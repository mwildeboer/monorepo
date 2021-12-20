import { render } from "@testing-library/react";
import { Button } from "../src";

it("renders", () => {
  const { container } = render(<Button>Button</Button>);
  expect(container).toBeDefined();
});
