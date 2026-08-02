const { Command } = require("commander");
const askQuestions = require("./prompts");
const generateProject = require("./generator");

const program = new Command();

program
  .name("create-norix")
  .description("Generate Express backend")
  .version("1.0.0")
  .argument("[project-name]")
  .action(async (projectName) => {
    try {
      if (!projectName) {
        console.log("❌ Please provide a project name.");
        process.exit(1);
      }

      const answers = await askQuestions();

      const config = {
        projectName,
        ...answers,
      };

      await generateProject(config);

      console.log("\n🎉 Project created successfully!");
      console.log(`\nNext steps:`);

      console.log(`cd ${projectName}`);

      if (!config.installDependencies) {
        console.log("npm install");
      }

      console.log("npm run dev");
    } catch (err) {
      console.error(err);
    }
  });

program.parse();