import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";

describe("False Test Case", () => {
  it("renders a welcome message", () => {
    render(<h1>Welcome to Resumeye</h1>);
    const message = screen.getByText(/Welcome to Resumeye/i);
    expect(message).toBeDefined();
  });
});
