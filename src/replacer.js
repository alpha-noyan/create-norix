const fs = require("fs-extra");
const path = require("path");

async function replacePlaceholders(directory, replacements) {

    const files = await fs.readdir(directory);

    for (const file of files) {

        const fullPath = path.join(directory, file);

        const stats = await fs.stat(fullPath);

        if (stats.isDirectory()) {

            await replacePlaceholders(fullPath, replacements);

        } else {

            let content = await fs.readFile(fullPath, "utf8");

            for (const key in replacements) {

                const placeholder = `__${key}__`;

                content = content.replaceAll(
                    placeholder,
                    replacements[key]
                );

            }

            await fs.writeFile(fullPath, content);

        }

    }

}

module.exports = replacePlaceholders;