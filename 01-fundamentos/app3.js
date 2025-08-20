const fs = require("fs");
const content = fs.readFileSync("../README.md", "utf8");

const countReact = content.match(/React/gi)?.length ?? 0;
console.log(
  `The word "React" appears ${countReact} times in the README.md file.`
);
