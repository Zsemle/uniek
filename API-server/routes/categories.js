const path = require('path');

const categoriesRoutes = (app, fs) => {
  const dataPath = path.join(__dirname, '..', 'data', 'categories.json');

  const readFile = (
    callback,
    returnJson = false,
    filePath = dataPath,
    encoding = 'utf8',
  ) => {
    fs.readFile(filePath, encoding, (err, data) => {
      if (err) {
        throw err;
      }

      callback(returnJson ? JSON.parse(data) : data);
    });
  };

  app.get('/categories', (req, res) => {
    readFile((data) => {
      res.set('Access-Control-Allow-Origin', 'http://localhost:3000');
      res.send(data);
    }, true);
  });
};

module.exports = categoriesRoutes;
