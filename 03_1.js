const fs = require("fs");

fs.readFile("./03.txt", "utf-8", (err, data) => {
  if (err) {
    console.error(err);
    return;
  }

  let total = 0;

  const lines = data.split("\r").map((line) => line.trim());

  for (let i = 0; i < lines.length; i++) {
    let numStartId = null;
    for (let j = 0; j < lines[i].length; j++) {
      if (numStartId === null && !isNaN(lines[i][j])) {
        numStartId = j;
        if (numStartId === 0) {
          console.log(lines[i][1]);
        }
      } else if (numStartId !== null && isNaN(lines[i][j])) {
        if (checkNum(lines, i, numStartId, j)) {
          total += Number(lines[i].slice(numStartId, j));
        }
        numStartId = null;
      } else if (numStartId !== null && j === lines[i].length - 1) {
        if (checkNum(lines, i, numStartId, j + 1)) {
          total += Number(lines[i].slice(numStartId));
        }
        //nulling numStartId is not neccessary, because it will do so in the next iteration of the outer loop
      }
    }
  }

  console.log(total);
});

function checkNum(lines, lineId, startId, endId) {
  let adjecentChars = "";

  startId = Math.max(0, startId - 1);
  endId = Math.min(lines[lineId].length, endId + 1); //we can do this because all lines are of the same length

  if (lineId > 0) {
    adjecentChars += lines[lineId - 1].slice(startId, endId);
  }

  adjecentChars += lines[lineId].slice(startId, endId);

  if (lineId < lines.length - 1) {
    adjecentChars += lines[lineId + 1].slice(startId, endId);
  }
  console.log(adjecentChars, /[^\d\.]/.test(adjecentChars));

  return /[^\d\.]/.test(adjecentChars);
}
