import { resolve } from 'path';

import { config } from 'dotenv';

config({ path: resolve(__dirname, '../.env') });

export const { APP_PORT, MONGO_DB_URL, MONGO_DB_USER, MONGO_DB_PASSWORD } =
  process.env as {
    [key: string]: string;
  };
