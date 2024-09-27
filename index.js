import express from "express";
import routers from "./src/routes/route.js";
import { exec } from "child_process";

//function iniciarServidor() {
//  exec('shutdown /s /t 0', (error, stdout, stderr) => {
//      if (error) {
//          console.error(`Erro ao iniciar servidor: ${error}`);
//          return;
//      }
// });
//}

const app = express();

app.use(express.json());

// Iniciando o servidor
//iniciarServidor();

app.use(routers);

const PORT = '3000';

app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
})