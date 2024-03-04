const server = require('../src/server/Server');

const PORT = 3131;

server.listen(PORT, () => {
	console.log(`O servidor está rodando na porta ${PORT}`);
});
