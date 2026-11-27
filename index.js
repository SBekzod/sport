console.log("Hello World!");
// PACKAGES: CORE EXTERNAL FILE

const fs = require("fs");
const moment = require("moment");

const data = fs.readFileSync("./message.txt", "utf8");
const time = moment().format("HH:mm:ss");
console.log(data, time);
