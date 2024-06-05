import dotenv from "dotenv";

dotenv.config();

export const mysqlUsername = process.env.MYSQL_USERNAME ?? "postgres.duuxefhmutyhwjgjcxuq";

export const mysqlPassword = process.env.MYSQL_PASSWORD_ ?? "7Ijbix3Sj8ec2EEB";

export const mysqlSchema = process.env.MYSQL_SCHEMA ?? "postgres";

export const mysqlHost = process.env.MYSQL_HOST ?? "aws-0-us-west-1.pooler.supabase.com";

export const mysqlPort = process.env.MYSQL_PORT ?? "6543";

export const PORT = process.env.PORT ?? 5000;

export const SALT = process.env.SALT ?? 10;