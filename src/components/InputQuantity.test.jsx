import { describe, it, expect } from 'vitest'
import { render, screen, prettyDOM } from "@testing-library/react";
import InputQuantity from './InputQuantity';

describe("Input quantity", () => {
  it("Shows the input", () => {
    const renderer = render(<InputQuantity/>);
    console.log(prettyDOM(renderer.container))
    const text = screen.getByRole("spinbutton"); 
    expect(text).toBeInTheDocument();
  });

});