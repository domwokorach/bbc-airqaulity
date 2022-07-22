import { render, screen } from "@testing-library/react";
import App from "./App";

test("Error learn react link", () => {
  render(<App />);
  const linkElement = screen.getByText(/This is Reacr Testing/i);
  expect(linkElement).toBeInTheDocument();
});
