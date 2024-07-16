const http = require("http");
const funciones_sql = require("D:\\Archivos\\CLASES-DONATO\\clases-js\\PRUEBA-SQL\\index.js");
const pruebaJson = require("./prueba.json");

const processRequest = async (req, res) => {
  const { url, method } = req;

  switch (method) {
    case "GET":
      switch (url) {
        case "/prueba-datos":
          res.setHeader("Content-Type", "application/json; charset=utf-8");
          return res.end(JSON.stringify(pruebaJson));

        case "/autores":
          try {
            const datos = await funciones_sql.obtenerDatos("autor");
            res.setHeader("Content-Type", "application/json; charset=utf-8");
            return res.end(JSON.stringify(datos));
          } catch (error) {
            res.statusCode = 500;
            console.error("Error al obtener los datos", error);
          }
        default:
          res.statusCode = 404;
          return res.end("Error 404: Página no encontrada");
      }
  }
};

const server = http.createServer(processRequest);

server.listen(5000, () => {
  console.log("Server on port 5000");
});
