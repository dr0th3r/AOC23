const fs = require("fs");

fs.readFile("./03.txt", "utf-8", (err, data) => {
  if (err) {
    console.error(err);
    return;
  }

  let total = 0;

  const lines = data.split("\r").map((line) => line.trim());

  for (let i = 0; i < lines.length; i++) {
    for (let j = 0; j < lines[i].length; j++) {
      if (lines[i][j] === "*") {
        total += getRatio(lines, i, j);
      }
    }
  }

  console.log(total);
});

function getRatio(lines, i, j) {
  let numbers = [];

  let line;
  if (i > 0) {
    line = lines[i - 1];

    if (/\d/.test(line[j])) {
      let numberStr = "";
      let x = j;

      while (x >= 0 && /\d/.test(line[x])) {
        //search left
        numberStr = `${line[x]}${numberStr}`;
        x--;
      }

      x = j + 1;

      while (x < line.length && /\d/.test(line[x])) {
        //search right
        numberStr += line[x];
        x++;
      }

      if (numberStr !== "") {
        numbers.push(Number(numberStr));
      }
    } else {
      if (j > 0 && /\d/.test(line[j - 1])) {
        let x = j - 1;
        let numberStr = "";

        while (x >= 0 && /\d/.test(line[x])) {
          numberStr = `${line[x]}${numberStr}`;
          x--;
        }

        if (numberStr !== "") {
          numbers.push(Number(numberStr));
        }
      }

      if (j < line.length - 1 && /\d/.test(line[j + 1])) {
        let x = j + 1;
        let numberStr = "";

        while (x < line.length && /\d/.test(line[x])) {
          numberStr += line[x];
          x++;
        }

        if (numberStr !== "") {
          numbers.push(Number(numberStr));
        }
      }
    }
  }

  {
    line = lines[i];
    if (j > 0 && /\d/.test(line[j - 1])) {
      let x = j - 1;
      let numberStr = "";
      while (x >= 0 && /\d/.test(line[x])) {
        numberStr = `${line[x]}${numberStr}`;
        x--;
      }

      if (numberStr !== "") {
        numbers.push(Number(numberStr));
      }
    }

    if (j < line.length - 1 && /\d/.test(line[j + 1])) {
      let x = j + 1;
      let numberStr = "";
      while (x < line.length && /\d/.test(line[x])) {
        numberStr += line[x];
        x++;
      }

      if (numberStr !== "") {
        numbers.push(Number(numberStr));
      }
    }
  }

  if (i < lines.length - 1) {
    line = lines[i + 1];

    if (/\d/.test(line[j])) {
      let numberStr = "";
      let x = j;

      while (x >= 0 && /\d/.test(line[x])) {
        //search left
        numberStr = `${line[x]}${numberStr}`;
        x--;
      }

      x = j + 1;

      while (x < line.length && /\d/.test(line[x])) {
        //search right
        numberStr += line[x];
        x++;
      }

      if (numberStr !== "") {
        numbers.push(Number(numberStr));
      }
    } else {
      if (j > 0 && /\d/.test(line[j - 1])) {
        let x = j - 1;
        let numberStr = "";

        while (x >= 0 && /\d/.test(line[x])) {
          numberStr = `${line[x]}${numberStr}`;
          x--;
        }

        if (numberStr !== "") {
          numbers.push(Number(numberStr));
        }
      }

      if (j < line.length - 1 && /\d/.test(line[j + 1])) {
        let x = j + 1;
        let numberStr = "";

        while (x < line.length && /\d/.test(line[x])) {
          numberStr += line[x];
          x++;
        }

        if (numberStr !== "") {
          numbers.push(Number(numberStr));
        }
      }
    }
  }

  if (numbers.length > 0) {
    console.log(numbers);
    if (i > 0) {
      console.log(lines[i - 1]);
    }
    console.log(lines[i]);
    if (i < lines.length - 1) {
      console.log(lines[i + 1]);
    }
  }

  if (numbers.length === 2) {
    return numbers[0] * numbers[1];
  }

  return 0;
}
