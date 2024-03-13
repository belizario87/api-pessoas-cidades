const server = require("../src/server/Server");
require('dotenv').config();

const PORT = process.env.PORT;

server.listen(PORT, () => {
	console.log(`O servidor está rodando na porta ${PORT}`);
});


