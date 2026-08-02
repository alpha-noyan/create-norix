const { execSync } = require("child_process");
const path = require("path");

async function installDependencies(projectPath) {
    console.log("\n📦 Installing dependencies...\n");

    execSync("npm install", {
        cwd: projectPath,
        stdio: "inherit"
    });

    console.log("\n✅ Dependencies installed.");
}

module.exports = installDependencies;