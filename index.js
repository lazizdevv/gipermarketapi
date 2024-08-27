const jsonServer = require('json-server');
const cors = require('cors');
const server = jsonServer.create();
const router = jsonServer.router('db.json');
const middlewares = jsonServer.defaults();

// CORS sozlamalarini kengaytiring
server.use(cors({
  origin: '*', // Hamma domenlardan so'rovlarni qabul qilish
  methods: 'GET,HEAD,PUT,PATCH,POST,DELETE,OPTIONS',
  allowedHeaders: 'Content-Type, Authorization'
}));

server.use(middlewares);
server.use(router);

// Portni tekshirib, kerakli portda ishlash
const port = process.env.PORT || 4173; // Default port: 4173
server.listen(port, () => {
  console.log(`JSON Server is running on port ${port}`);
});
