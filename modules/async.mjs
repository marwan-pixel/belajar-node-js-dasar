function samplePromises() {
  return Promise.resolve("Marwan");
}

const name = await samplePromises();
console.info(name);
