import fs from "fs";

const writer = fs.createWriteStream("target.log");

writer.write("Marwan\n");
writer.write("Hadid\n");
writer.end();

const reader = fs.createReadStream("target.log");

reader.addListener("data", (data) => {
  console.info(data.toString());
});
