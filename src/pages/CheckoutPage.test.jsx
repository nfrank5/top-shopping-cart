import { vi, describe, it, expect } from 'vitest'
import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import CheckoutPage from './CheckoutPage';
import { useOutletContext } from 'react-router-dom';

vi.mock(import("react-router-dom"), async (importOriginal) => {
  const actual = await importOriginal()
  return {
    ...actual,
    useOutletContext: vi.fn(),
  }
})


describe("CheckOut page", () => {
  it("Shows the correct quantity per item", () => {
   useOutletContext.mockReturnValue([[1,1,2,2,2], vi.fn(), [{
      id:1,
      title:'title1',
      price:'11.11',
      category:'category1',
      description:'description1',
      image:'https://fakestoreapi.com/img/71YXzeOuslL._AC_UY879_.jpg'
    },
    {
      id:2,
      title:'title2',
      price:'22.22',
      category:'category2',
      description:'description2',
      image:'https://fakestoreapi.com/img/71YXzeOuslL._AC_UY879_.jpg'
    }]]);     
    const renderer = render(<MemoryRouter><CheckoutPage /></MemoryRouter>);
    const quantity = screen.getByText(/Quantity: 2/i); 
    expect(quantity).toBeInTheDocument();
  });

  it("Shows the correct total price per item", () => {
    render(<MemoryRouter><CheckoutPage /></MemoryRouter>);
    const totalPrice = screen.getByText(/Total: 22.22/i); 
    expect(totalPrice).toBeInTheDocument();
  });

  it("Shows the correct total ", () => {
    render(<MemoryRouter><CheckoutPage /></MemoryRouter>);
    const totalPrice = screen.getByText(/Total to pay: 88.88/i); 
    expect(totalPrice).toBeInTheDocument();
  }); 

  
});


