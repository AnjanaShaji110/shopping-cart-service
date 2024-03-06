const express = require("express");
const routes = require("./src/routes/routes");
const cors = require('cors');
const swaggerUI = require("swagger-ui-express");
const documentation = require('./src/api-docs/documentation');



const app = express();
const port = 4000;

app.use(express.json());
app.use(cors());
app.use('/api-docs',swaggerUI.serve);
app.use('/api-docs',swaggerUI.setup(documentation));
app.use('/api/v1', routes);


app.get("/", (req, res) => {
    res.send("Working Fine");
});



app.listen(port, () => {
    console.log("App listening");
});