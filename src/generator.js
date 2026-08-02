const fs = require("fs-extra");
const path = require("path");
const replacePlaceholders = require("./replacer");
const installDependencies = require("./installer");
const buildPlaceholders = require("./placeholders");
const generateEnv = require("./envGenerator");

async function generateProject(config) {

    const { projectName, database } = config;

    const template = path.join(
        __dirname,
        "../template"
    );

    const destination = path.join(
        process.cwd(),
        projectName
    );

    await fs.copy(template, destination);

    const replacements = buildPlaceholders(config);

    await replacePlaceholders(destination, replacements);

    await generateEnv(destination, config);

    if (config.installDependencies) {
    await installDependencies(destination);
    }

    console.log("Project generated successfully.");

}

module.exports = generateProject;