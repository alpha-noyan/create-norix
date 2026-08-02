function buildReplacements(config) {
    return {
        PROJECT_NAME: config.projectName,
        DESCRIPTION: config.description,
        AUTHOR: config.author,
        LICENSE: config.license,
    };
}

module.exports = buildReplacements;