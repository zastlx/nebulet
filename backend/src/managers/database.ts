import { createPool, Pool } from "mysql2";
import config from "../config.js";

const pool: Pool = createPool(config.mysql);

export default pool;