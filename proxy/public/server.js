require('newrelic');

const express = require("express");
const morgan = require("morgan");
const cors = require('cors');
const app = express();
const port = 3000;

app.use(cors());
app.use(morgan("dev"));

app.use(express.static('public/lib'));
app.listen(port, () => {
  console.log(`Server running at: http://ec2-52-53-171-73.us-west-1.compute.amazonaws.com${port}`);
});