const fs = require("fs");

fs.readFile("./01.txt", "utf-8", (err, data) => {
  if (err) {
    console.error(err);
    return;
  }

  let total = 0;

  for (const line of data.split("\r")) {
    const firstNum = line.match(/(\d).*/)[1];
    const lastNum = line.match(/.*(\d)/)[1];

    total += Number(`${firstNum}${lastNum}`);
  }

  console.log(total);
});
