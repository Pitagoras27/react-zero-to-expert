import "setimmediate";
import "whatwg-fetch"; // <-- yarn add whatwg-fetch

require("dotenv").config({ path: ".env.test" });

jest.mock("./src/helpers/getEnviromentVaribles", () => ({
  getEnviromentVaribles: () => ({ ...process.env }),
}));
