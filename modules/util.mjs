import { json } from "stream/consumers";
import util from "util";

const firstName = "Marwan";
const lastName = "Hadid";

console.info(`Hello ${firstName} ${lastName}`);
console.info(util.format("Hello %s %s", firstName, lastName));

const person = {
  firstName: "Marwan",
  lastName: "Hadid",
};

console.info(`Person: ${JSON.stringify(person)}`);
console.info(util.format("Person: %j", person));
