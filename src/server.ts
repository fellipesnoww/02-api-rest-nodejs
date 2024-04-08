import fastify from "fastify";

const app = fastify();

app.get("/hello", (req, reply) => {
  return 'Hello world' 
});

app.listen({
    port: 3333,
}).then(() => { console.log('HTTP server listening on port 3333'); });

