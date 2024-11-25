import { vi, describe, it, expect } from 'vitest'
import { render, screen, prettyDOM } from "@testing-library/react";
import NavigationBar from './NavigationBar';
import { MemoryRouter } from "react-router-dom";


describe("CheckOut product card", () => {
  it("Shows the title", () => {
    const renderer = render(<MemoryRouter><NavigationBar cartCount={6} /></MemoryRouter>);
    //console.log(prettyDOM(renderer.container))
    const title = screen.getByText(/React Shopping Cart/i); 
    expect(title).toBeInTheDocument();
  });

  it("Shows the correct number of items in the cart", () => {
    render(<MemoryRouter><NavigationBar cartCount={5} /></MemoryRouter>);
    const cartCount = screen.getByRole("cart-count"); 
    expect(cartCount.textContent).toMatch(/Items currently in the cart 5/i);;
  });
  


});