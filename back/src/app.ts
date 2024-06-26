import app from "./index";

import { sequelize } from "./db.mysql";
import { PORT } from "./config";

async function main() {
  try {
    await sequelize.sync();

    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
    });
  } catch (error) {
    console.log("Error en base de datos", error);
  }
}

main();
