const app = require("../app.js");
const server = app.listen(3030, () => {
  const port = server.address().port;
  console.log("Application listening at", port);
});
