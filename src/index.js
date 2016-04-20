const findWithRegex = (regex, contentBlock) => {
  // Get the text from the contentBlock
  const text = contentBlock.getText();
  let matchArr;
  let start; // eslint-disable-line
  let matches = []
  // Go through all matches in the text and return the indizes to the callback
  while ((matchArr = regex.exec(text)) !== null) { // eslint-disable-line
    start = matchArr.index;
    matches.push([start, start + matchArr[0].length]);
  }

  return matches;
};

export default findWithRegex;
