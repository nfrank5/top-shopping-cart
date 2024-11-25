import { describe, it, expect } from 'vitest'
import { render, screen, prettyDOM } from "@testing-library/react";
import Footer from './Footer';

describe("footer", () => {
  it("Shows the text", () => {
    const renderer = render(<Footer/>);
    //console.log(prettyDOM(renderer.container))
    const text = screen.getByText(/An exercise in React by me/i); 
    expect(text).toBeInTheDocument();
  });

});