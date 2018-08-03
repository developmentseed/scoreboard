export default (text, length) => {
  if (text.length > length) {
    return `${text.substring(0, length)}...`;
  }
  return text;
}