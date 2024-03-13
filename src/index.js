const server = require("../src/server/Server");
require('dotenv').config();

const PORT = process.env.PORT;

server.listen(PORT || 3333, () => {
	console.log(`O servidor está rodando na porta ${PORT}`);
});


