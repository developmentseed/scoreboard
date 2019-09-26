import React from 'react'
import { createPortal } from 'react-dom'
import { CSSTransition } from 'react-transition-group'

// Minimum time the loading is visible.
const MIN_TIME = 512
// Since we have a minimum display time we use a timeout to hide it if
// when the hide method is called the time isn't over yet. However, if in
// the mean time the loading is shown again we need to clear the timeout.
var hideTimeout = null

// Once the component is mounted we store it to be able to access it from
// the outside.
var theGlobalLoading = null

// Store the amount of global loading calls so we can keep it visible until
// all were hidden.
let theGlobalLoadingCount = 0

export class GlobalLoading extends React.Component {
  constructor (props) {
    super(props)
    this.componentAddedBodyClass = false

    this.state = {
      showTimestamp: 0,
      revealed: false
    }
  }

  toggleBodyClass (revealed) {
    let bd = document.getElementsByTagName('body')[0]
    if (revealed) {
      this.componentAddedBodyClass = true
      bd.classList.add('unscrollable-y')
    } else if (this.componentAddedBodyClass) {
      // Only act if the class was added by this component.
      this.componentAddedBodyClass = false
      bd.classList.remove('unscrollable-y')
    }
  }

  componentDidMount () {
    // if (theGlobalLoading !== null) {
    //   throw new Error('<GlobalLoading /> component was already mounted. Only 1 is allowed.')
    // }
    theGlobalLoading = this
    this.toggleBodyClass(this.state.revealed)
  }

  componentDidUpdate () {
    this.toggleBodyClass(this.state.revealed)
  }

  componentWillUnmount () {
    this.toggleBodyClass(false)
    theGlobalLoading = null
  }

  render () {
    return createPortal((
      <CSSTransition
        in={this.state.revealed}
        unmountOnExit
        appear
        classNames='loading-pane'
        timeout={{ enter: 300, exit: 300 }}>

        <div className='loading-pane'>
          <div className='spinner'>
            <div className='spinner__bounce' />
            <div className='spinner__bounce' />
            <div className='spinner__bounce' />
          </div>
        </div>

      </CSSTransition>
    ), document.body)
  }
}

/**
 * Show a global loading.
 * The loading has a minimum visible time defined by the MIN_TIME constant.
 * This will prevent flickers in the interface when the action is very fast.
 * @param  {Number} count Define how many loadings to show. This will not
 *                        show multiple loadings on the page but will increment
 *                        a counter. This is helpful when there are many actions
 *                        that require a loading.
 *                        The global loading will only be dismissed once all
 *                        counters shown are hidden.
 *                        Each function call will increment the counter.
 *                        Default 1
 * @example
 * showGlobalLoading()
 * // Counter set to 1
 * showGlobalLoading(3)
 * // Counter set to 4
 * hideGlobalLoading()
 * // Counter is now 3
 * hideGlobalLoading(3)
 * // Counter is now 0 and the loading is dismissed.
 */
export function showGlobalLoading (count = 1) {
  if (theGlobalLoading === null) {
    throw new Error('<GlobalLoading /> component not mounted')
  }
  if (hideTimeout) {
    clearTimeout(hideTimeout)
  }

  theGlobalLoadingCount += count

  theGlobalLoading.setState({
    showTimestamp: Date.now(),
    revealed: true
  })
}

/**
 * Hides a global loading
 * @param  {Number} count Define how many loadings to hide. Using 0 or any
 *                        negative number will immediately dismiss the loading
 *                        without waiting for the minimum display time.
 *                        Default 1
 * @param {function} cb   Callback called after the loading is hidden.
 *
 * @example
 * showGlobalLoading()
 * // Counter set to 1
 * showGlobalLoading(3)
 * // Counter set to 4
 * hideGlobalLoading()
 * // Counter is now 3
 * hideGlobalLoading(3)
 * // Counter is now 0 and the loading is dismissed.
 */
export function hideGlobalLoading (count = 1, cb = () => {}) {
  if (theGlobalLoading === null) {
    throw new Error('<GlobalLoading /> component not mounted')
  }

  if (typeof count === 'function') {
    cb = count
    count = 1
  }

  const hide = () => { theGlobalLoading.setState({ revealed: false }); cb() }

  // Using 0 or negative numbers results in the loading being
  // immediately dismissed.
  if (count < 1) {
    theGlobalLoadingCount = 0
    return hide()
  }

  // Decrement counter by given amount without going below 0.
  theGlobalLoadingCount -= count
  if (theGlobalLoadingCount < 0) theGlobalLoadingCount = 0

  let time = theGlobalLoading.state.showTimestamp
  let diff = Date.now() - time
  if (diff >= MIN_TIME) {
    if (theGlobalLoadingCount === 0) return hide()
  } else {
    hideTimeout = setTimeout(() => {
      if (theGlobalLoadingCount === 0) return hide()
    }, MIN_TIME - diff)
  }
}
