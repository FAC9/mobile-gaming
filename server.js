const Hapi = require('hapi');
const Inert = require('inert');
const routes = require('./routes.js');

const server = new Hapi.Server();

server.connection({
  port: process.env.PORT || 4000
});

server.register(Inert, (err) => {
  if (err) throw err;

  server.routes({
    method: 'GET',
    path: '/{param*}',
    handler: {
      directory: {
        path: 'public'
      }
    }
  });
};
