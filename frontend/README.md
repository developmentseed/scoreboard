# OSM Scoreboard 🗺 🎯

A project to display OSM user contribution metrics and campaign metrics.

## 🔨 Development

### Folder Structure

```
app/
  README.md
  node_modules/
  package.json
  public/
    index.html
    favicon.ico
  src/
    styles/
      App.scss
      index.scss
    App.js
    App.test.js
    index.js
    logo.svg
```

### Custom Project Name

The Frontend assumes that the Scoreboard is deployed for the OSM ecosystem. However, you can configure the Scoreboard to show other project names on the frontpage and and about page by setting the `REACT_APP_PROJECT_NAME` during build.

### Available Scripts

In the project directory, you can run:

#### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

#### `npm test`

Launches the test runner in the interactive watch mode.<br>
See the section about [running tests](#running-tests) for more information.

#### `npm run build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
Your app is ready to be deployed!

See the section about [deployment](#deployment) for more information.

### Deployment

`npm run build` creates a `build` directory with a production build of your app. Set up your favourite HTTP server so that a visitor to your site is served `index.html`, and requests to static paths like `/static/js/main.<hash>.js` are served with the contents of the `/static/js/main.<hash>.js` file.

#### Static Server

For environments using [Node](https://nodejs.org/), the easiest way to handle this would be to install [serve](https://github.com/zeit/serve) and let it handle the rest:

```sh
npm install -g serve
serve -s build
```

The last command shown above will serve your static site on the port **5000**. Like many of [serve](https://github.com/zeit/serve)’s internal settings, the port can be adjusted using the `-p` or `--port` flags.

Run this command to get a full list of the options available:

```sh
serve -h
```

#### Other solutions
Check the deployment solutions in the [`create-react-app` deployment](https://github.com/facebookincubator/create-react-app/blob/master/packages/react-scripts/template/README.md#deployment) section of their documentation
