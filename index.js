const core = require('@actions/core');
const configuration = require('./configuration');

async function run() {

    try {
        configuration.generate();
    } catch (error) {
        core.setFailed(error.message);
    }
}

run();