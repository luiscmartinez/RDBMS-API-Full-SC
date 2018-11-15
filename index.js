const server = require('express')()
require('./middleware')(server)
require('./api/routes')(server)

server.listen(9000, () => console.log('\n=== Port is open ===\n'))
