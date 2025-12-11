// n8n entrypoint
const { exec } = require("child_process");

exec("n8n start --tunnel", (err, stdout, stderr) => {
  console.log(stdout);
  console.error(stderr);
});
