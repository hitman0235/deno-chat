addEventListener("fetch", (event) => {
    const response = new Response("Hello World! Commit", {
      headers: { "content-type": "text/plain" },
    });
    event.respondWith(response);
  });