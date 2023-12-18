const fs = require("fs");

fs.readFile("./02.txt", "utf-8", (err, data) => {
  if (err) {
    console.error(err);
    return;
  }

  let total = 0;

  for (const line of data.split("\r")) {
    const maxRed = [...line.matchAll(/(\d+) red/g)].reduce(
      (acc, match) => Math.max(acc, Number(match[1])),
      0
    );

    const maxGreen = [...line.matchAll(/(\d+) green/g)].reduce(
      (acc, match) => Math.max(acc, Number(match[1])),
      0
    );

    const maxBlue = [...line.matchAll(/(\d+) blue/g)].reduce(
      (acc, match) => Math.max(acc, Number(match[1])),
      0
    );

    total += maxRed * maxGreen * maxBlue;
  }

  console.log(total);
});
