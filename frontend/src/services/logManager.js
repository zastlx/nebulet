class LogManager {
    #log;
    #warn;
    #error;
    #clear;

    constructor() {
        this.#log = console.log;
        this.#warn = console.warn;
        this.#error = console.error;
        this.#clear = console.clear;

        console.log = function () {};
        console.warn = function () {};
        console.error = function () {};
        console.clear = function () {};
    }

    log(...args) {
       this.#log(...args);
    }

    warn(...args) {
        this.#warn(...args);
    }

    error(...args) {
        this.#error(...args);
    }

    clear() {
        this.#clear();
    }
}

const logManager = new LogManager();

(() => {
    logManager.log("%cSTOP!", "font-size: 100px;color: red;");
    logManager.log("%cAnything pasted here could harm your account.", "font-size:30px;");
    logManager.log("%cIf you don't know what you're doing, close the Console now.", "font-size:22px;");
})();

export default logManager;