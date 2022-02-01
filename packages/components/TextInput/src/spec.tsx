import { render } from "@testing-library/react";
import { TextInput } from ".";

it("renders", () => {
  const { container } = render(<TextInput />);
  expect(container).toBeDefined();
});
