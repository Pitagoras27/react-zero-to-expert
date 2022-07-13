const { render } = require("@testing-library/react");
import { Blockquote } from "../../src/03-examples/Blockquote.jsx";

describe("test of examples", () => {
  test("should render Blockquote", () => {
    render(<Blockquote />);
  });
});
