const fs = require("fs");
const data = fs.readFileSync("../README.md", "utf8");

const newContent = data.replace(/React/gi, "Angular");
fs.writeFileSync("../README-Angular.md", newContent, "utf8");
const message = "File updated successfully!";
console.log(message);
