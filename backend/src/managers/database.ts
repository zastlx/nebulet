import { createPool } from "mysql2";
import config from "../config.js";

const pool = createPool(config.mysql);

export default pool;