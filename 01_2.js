const fs = require("fs");

fs.readFile("./01.txt", "utf-8", (err, data) => {
  if (err) {
    console.error(err);
    return;
  }

  let total = 0;

  for (const line of data.split("\r")) {
    const firstNum = toNumber(
      line.match(/(\d|one|two|three|four|five|six|seven|eight|nine).*/)[1]
    );
    const lastNum = toNumber(
      line.match(/.*(\d|one|two|three|four|five|six|seven|eight|nine)/)[1]
    );

    console.log(firstNum, lastNum, line);

    total += Number(`${firstNum}${lastNum}`);
  }

  console.log(total);
});

function toNumber(value) {
  if (Number(value)) return value;

  switch (value) {
    case "one":
      return "1";
    case "two":
      return "2";
    case "three":
      return "3";
    case "four":
      return "4";
    case "five":
      return "5";
    case "six":
      return "6";
    case "seven":
      return "7";
    case "eight":
      return "8";
    case "nine":
      return "9";
    default:
      console.log("Invalid");
      return 0;
  }
}
