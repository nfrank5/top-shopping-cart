import { vi, describe, it, expect } from 'vitest'
import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import CheckoutPage from './CheckoutPage';

describe("CheckOut product page", () => {
  it("Shows the shows the correct quantity per item", () => {
    const renderer = render(<MemoryRouter><CheckoutPage cartCount={6} /></MemoryRouter>);
    const title = screen.getByText(/React Shopping Cart/i); 
    expect(title).toBeInTheDocument();
  });

  it("Shows the correct number of items in the cart", () => {
    render(<MemoryRouter><NavigationBar cartCount={5} /></MemoryRouter>);
    const cartCount = screen.getByRole("cart-count"); 
    expect(cartCount.textContent).toMatch(/Items currently in the cart 5/i);;
  });
  


});