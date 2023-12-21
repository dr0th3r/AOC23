const fs = require("fs");

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

    if (countOfWinning > 0) {
      total += 2 ** (countOfWinning - 1);
    }
  }

  console.log(total);
});
