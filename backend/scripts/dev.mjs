import chalk from "chalk";
import chokidar from "chokidar";
import {
    spawn,
    exec
} from "child_process";
import {
    join,
    extname,
    basename
} from "path";
import {
    mkdirSync,
    existsSync,
    renameSync
} from "fs";

const SRC_DIR = join(process.cwd(), "src");
const DIST_DIR = join(process.cwd(), "dist");
let runningProcess;

const log = (str) => {
    console.log(str + "\n");
}

// Function to compile TypeScript
const tscCompile = () => {
    log(chalk.blue("\nCompiling TypeScript..."));
    const compileProcess = exec("npx tsc");
    compileProcess.on("close", (code) => {
        if (code === 0) {
            log(chalk.green("Compilation successful."));
            // Restart the running process after successful compilation
            restartProcess();
        } else {
            log(chalk.red(`Compilation failed with code ${code}.`));
        }
    });
};

// Function to restart the running process
const restartProcess = () => {
    if (runningProcess) {
        log(chalk.blue("Stopping the running process gracefully..."));
        runningProcess.kill();
        runningProcess.on("close", () => {
            log(chalk.blue("Process stopped gracefully. Restarting..."));
            startProcess();
        });
    } else {
        log(chalk.blue("No running process found. Starting a new one..."));
        startProcess();
    }
};

// Function to start the process
const startProcess = () => {
    const distPath = new URL(`${DIST_DIR}/index.js`,import.meta.url).pathname;
    runningProcess = spawn("node", [distPath], {
        stdio: "inherit"
    });
};

// Function to handle file changes
const handleFileChange = (filePath, eventType) => {
    const distFile = join(DIST_DIR, filePath.replace(extname(filePath), ".js"));

    if (eventType === "add" || eventType === "change") {
        // Compile the TypeScript file
        tscCompile();
    } else if (eventType === "rename") {
        // Rename the compiled counterpart when the file is renamed
        if (existsSync(distFile)) {
            const newDistFile = join(DIST_DIR, basename(filePath).replace(extname(filePath), ".js"));
            renameSync(distFile, newDistFile);
        }
    }
};

// Create the "dist" directory if it doesn't exist
if (!existsSync(DIST_DIR)) {
    mkdirSync(DIST_DIR);
}

// Watch the "src" directory for file changes
const watcher = chokidar.watch(SRC_DIR, {
    persistent: true,
    ignoreInitial: true,
});

watcher.on("all", (event, path) => {
    const eventType = event === "addDir" ? "add" : event === "unlinkDir" ? "unlink" : event;
    handleFileChange(path, eventType);
});

// Start the initial process
startProcess();
log(chalk.blue("Watching for changes in the \"src\" directory..."));