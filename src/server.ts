import fastify from "fastify";
import { knex } from "./database";
import crypto from "node:crypto";

const app = fastify();

app.get("/hello", async (req, reply) => {
  // const transaction = await knex('transactions').insert({
  //   id: crypto.randomUUID(),
  //   title: 'Transação de teste',
  //   amount: 1000,
  // }).returning('*')

  const transaction = await knex('transactions').select('*')

  return transaction;
});

app.listen({
    port: 3333,
}).then(() => { console.log('HTTP server listening on port 3333'); });

