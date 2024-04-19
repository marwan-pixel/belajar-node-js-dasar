import { time } from "console";
import timers from "timers/promises";

// setInterval(() => {
//   console.info(`Start time at ${new Date()}`);
// }, 1000);

// console.info(new Date());
// const name = await timers.setTimeout(5000, "Marwan");
// console.info(new Date());

// console.info(name);

for await (const startTime of timers.setInterval(1000, "ignored")) {
  console.info(`Start time at ${new Date()}`);
}
