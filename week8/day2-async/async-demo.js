// Simulates a slow network request
function fakeFetch() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Data arrived!");
    }, 2000); // 2-second delay just like a real API
  });
}

// Demonstrates async/await flow
async function runDemo() {
  console.log("1. Starting demo...");

  // This pauses ONLY this function, not the whole program
  const result = await fakeFetch();

  console.log("2. Received:", result);
  console.log("3. Demo finished.");
}

runDemo();

