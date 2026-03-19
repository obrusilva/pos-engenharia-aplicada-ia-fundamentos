import {createServer } from "./server.ts";
import { config } from "./config.ts";
import { OpenRouterService } from "./openrouterService.ts";

const routerService = new OpenRouterService(config)

const app = createServer(routerService)
await app.listen({ port: 3000, host: '0.0.0.0' })
console.log(`Servidor rodando em http://localhost:3000`)

app.inject({
  method: 'POST',
  url: '/chat',
  body: { question: "O palmeiras tem mundial?" }
}).then((response) => {
    console.log('Status Code:', response.statusCode)
    console.log('Body:', response.body)    
})