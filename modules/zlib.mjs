import fs from "fs";
import zlib from "zlib";

const source = fs.readFileSync("modules/zlib.mjs");
const result = zlib.gzipSync(source);

console.info(result.toString());

fs.writeFileSync("zlib-compress.mjs.txt", result);

// Decompress File using zlib
const readSource = fs.readFileSync("zlib-compress.mjs.txt");
const readResult = zlib.unzipSync(readSource);

console.info(readResult.toString());
