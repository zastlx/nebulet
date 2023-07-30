import { createPool, Pool } from "mysql2/promise";
import config from "../config.js";

const pool: Pool = createPool(config.mysql);

export default pool;