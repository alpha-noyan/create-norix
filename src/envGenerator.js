const fs = require("fs");
const path = require("path");

async function generateEnv(projectPath, config) {
  const envContent = `PORT=${config.port}

NODE_ENV=development

DB_STRING=${config.dbUri}

DB_PASSWORD=${config.dbPassword}

DB_NAME=${config.dbName}

JWT_SECRET=${config.jwtSecret}

JWT_EXPIRES_IN=7d

FRONTEND_URL=${config.frontendUrl}

JWT_RESET_PASSWORD_EXPIRES_IN=10m

EMAIL_USER=${config.emailUser}

EMAIL_PASS=${config.emailPass}
`;

  const envPath = path.join(projectPath, ".env");

  fs.writeFileSync(envPath, envContent);

  console.log("✅ .env created");
}

module.exports = generateEnv;