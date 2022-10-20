const core = require('@actions/core');
const os = require('os');
const path = require('path');
const fs = require('fs');

function flushContent(configFile, content){
    if (!fs.existsSync(path.dirname(configFile))) {
        fs.mkdirSync(path.dirname(configFile));
    }
    fs.writeFileSync(configFile, content);
}

function generateContent(host, port, databaseName, waitTime, connectionTimeout) {
    return [
        `mongodb.host=${host}`,
        `mongodb.port=${port}`,
        `mongodb.database=${databaseName}` ,
        `mongodb.maxWaitTime=${waitTime}` ,
        `mongodb.connectTimeout=${connectionTimeout}`
    ].join("\n");
}

export function generate() {
    const configFile = core.getInput("file-location");
    const content = generateContent(core.getInput("host"),
        core.getInput("port"),
        core.getInput("database-name"),
        core.getInput("wait-time"),
        core.getInput("connection-timeout"));
    flushContent(configFile, content);
}
