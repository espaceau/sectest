'use strict';

const express = require('express');
const child_process = require('child_process');

// Constants
const PORT = 8080;
const HOST = '0.0.0.0';

// App
const app = express();

app.get('/', (req, res) => {
  res.send("Remote cmd API is alive. Use /exec/<commandToBeExecuted> \n");
});

app.get('/exec/:cmd', (req, res) => {
  console.log("Running" + req.params.cmd + " locally on this server");
  var ret = child_process.spawnSync(req.params.cmd, { shell: true});
  res.send(ret.stdout);
});

app.listen(PORT, HOST);
console.log("Running on http://${HOST}:${PORT}");