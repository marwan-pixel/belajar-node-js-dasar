import fs from "fs/promises";

const buffer = await fs.readFile("modules/file-system.mjs");

await fs.writeFile("temp.txt", "Hello Node JS");

// console.info(buffer.toString());
