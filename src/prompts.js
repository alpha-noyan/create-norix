const { default: inquirer } = require("inquirer");

async function askQuestions() {
  const answers = await inquirer.prompt([
    {
      type: "input",
      name: "port",
      message: "Port:",
      default: 8000
    },
    {
      type: "input",
      name: "description",
      message: "Project description:",
    },
    {
      type: "input",
      name: "author",
      message: "Author:",
    },
    {
      type: "input",
      name: "license",
      message: "License:",
      default: "MIT",
    },
    {
      type: "input",
      name: "dbUri",
      message: "MongoDB URI, structure should be like: mongodb+srv://<username>:<db_password>@<cluster_address>/<db_name>?retryWrites=true&w=majority",
    },
    {
      type: "input",
      name: "dbPassword",
      message: "Database Password:",  
    },
    {
      type: "input",
      name: "dbName",
      message: "Database Name:",
    },
    {
      type: "input",
      name: "frontendUrl",
      message: "Frontend URL(You can enter it later in env):",
    },
    {
      type: "password",
      name: "jwtSecret",
      message: "JWT Secret(You can enter it later in env):",
    },
    
    {
      type: "input",
      name: "emailUser",
      message: "SMTP Email(You can enter it later in env):",
    },
    {
      type: "password",
      name: "emailPass",
      message: "SMTP Email Password(You can enter it later in env):",
    },
    {
      type: "confirm",
      name: "installDependencies",
      message: "Install dependencies?",
      default: true,
    },
  ]);

  return answers;
}

module.exports = askQuestions;
