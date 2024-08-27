const jsonServer = require('json-server');
const cors = require('cors');
const server = jsonServer.create();
const router = jsonServer.router('db.json');
const middlewares = jsonServer.defaults();

// CORS sozlamalarini kengaytiring
server.use(cors({
  origin: '*', // Hamma domenlardan so'rovlarni qabul qilish
  methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
  allowedHeaders: 'Content-Type, Authorization'
}));

server.use(middlewares);
server.use(router);
server.listen(process.env.PORT || 3000, () => {
  console.log('JSON Server is running');
});
