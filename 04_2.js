const fs = require("fs");

let counts = {};

fs.readFile("./04.txt", "utf-8", (err, data) => {
  if (err) {
    console.error(err);
    return;
  }

  let total = 0;

  const lines = data.split("\r").map((line) => line.split(":")[1].trim());

  for (let i = 0; i < lines.length; i++) {
    let [winning, your] = lines[i].split("|");

    winning = winning.split(" ").filter((number) => {
      if (/^\d+$/.test(number)) return Number(number);
    });
    your = your.split(" ").filter((number) => {
      if (/^\d+$/.test(number)) return Number(number);
    });

    let countOfWinning = 0;

    winning.forEach((num) => {
      if (your.includes(num)) {
        countOfWinning++;
      }
    });

    counts[i] = countOfWinning;
  }

  for (let i = 0; i < Object.keys(counts).length; i++) {
    total += search(i);
  }

  console.log(total);
});

function search(i) {
  if (counts[i] === 0) {
    return 1;
  }

  let total = 1;

  for (let j = 1; j <= counts[i]; j++) {
    total += search(i + j);
  }

  return total;
}
