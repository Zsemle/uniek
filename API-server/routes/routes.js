const planRoutes = require('./plan');
const notesRoutes = require('./notes');
const categoriesRoutes = require('./categories');

const appRouter = (app, fs) => {
  app.get('/', (req, res) => {
    res.send('You\'ve found the root of the server');
  });

  planRoutes(app, fs);
  notesRoutes(app, fs);
  categoriesRoutes(app, fs);
};

module.exports = appRouter;
