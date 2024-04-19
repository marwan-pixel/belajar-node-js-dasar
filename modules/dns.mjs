import dns from "dns/promises";

const ip = await dns.resolve6("www.programmerzamannow.com");

console.info(ip);
// console.info(ip.family);
