import { vi, describe, it, expect } from 'vitest'
import { render, screen,prettyDOM } from "@testing-library/react";
import CheckoutProductCard from './CheckoutProductCard';

describe("CheckOut product card", () => {
  it("Shows the title", () => {
    const renderer = render(<CheckoutProductCard product={{price:3, title:"fuzz"}} quantity={2} />);
    //console.log(prettyDOM(renderer.container))
    const title = screen.getByText(/fuzz/i); 
    expect(title).toBeInTheDocument();
  });
  it("Shows the total", () => {
    const renderer = render(<CheckoutProductCard product={{price:3, title:"fuzz"}} quantity={2} />);
    //console.log(prettyDOM(renderer.container))
    const total = screen.getByText(/Total: 6/i); 
    expect(total).toBeInTheDocument();
  
  });
});