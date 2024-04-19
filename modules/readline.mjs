import process from "process";
import readline from "readline";

const input = readline.createInterface(process.stdin, process.stdout);

input.question("Siapa nama anda? ", (name) => {
  console.info(`Halo, ${name}`);
  input.close();
});
