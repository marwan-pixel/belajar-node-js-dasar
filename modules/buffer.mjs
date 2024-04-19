// const buffer = Buffer.from("Marwan Hadid");
const buffer = Buffer.alloc(100);
const len = buffer.write("Hello World!");
console.info(len);
console.info(buffer.toString());
console.info(buffer.reverse());
console.info(buffer.toString());

// const buffer = new Buffer.from("Marwan");

// buffer.write("Codevolution");

// console.info(buffer.toString());
// console.info(buffer.toJSON());
// console.info(buffer);
