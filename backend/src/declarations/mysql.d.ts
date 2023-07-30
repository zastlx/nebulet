import { RowDataPacket } from "mysql2";
import { User } from "./user";

type UserRow = RowDataPacket & User;

type resultCount = RowDataPacket & { count: number };