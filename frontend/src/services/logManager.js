class LogManager {
    log(message) {
        console.log(message);
    }

    warn(message) {
        console.warn(message);
    }

    error(message) {
        console.error(message);
    }
}

const logManager = new LogManager();

export default logManager;