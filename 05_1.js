const fs = require("fs");

fs.readFile("./05.txt", "utf-8", (err, data) => {
  if (err) {
    console.error(err);
    return;
  }

  const maps = data.split("\r\n\r\n");

  let lowestLocationVal = Infinity;

  const seeds = maps[0]
    .split(":")[1]
    .trim()
    .split(" ")
    .map((seed) => Number(seed));

  for (const seed of seeds) {
    let currentSearched = seed;

    for (const map of maps.slice(1)) {
      const lines = map.split("\n").slice(1); //we don't wan't the title

      for (const line of lines) {
        const [destinationStart, rangeStart, rangeLength] = line
          .trim()
          .split(" ")
          .map((num) => Number(num.trim()));

        if (
          currentSearched >= rangeStart &&
          currentSearched < rangeStart + rangeLength - 1
        ) {
          currentSearched = destinationStart + currentSearched - rangeStart;
          break;
        }
      }
    }

    if (currentSearched < lowestLocationVal) {
      lowestLocationVal = currentSearched;
    }
  }

  console.log(lowestLocationVal);
});
