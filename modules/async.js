function samplePromises() {
  return Promise.resolve("Marwan");
}

async function run() {
  const name = await samplePromises();
  console.info(name);
}

run();
