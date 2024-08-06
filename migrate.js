// migrate.js
require("dotenv").config({ path: "./.env.local" });
require("ts-node/register");
require("./src/migrate.ts");
