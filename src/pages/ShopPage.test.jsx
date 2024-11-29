import { vi, describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import ShopPage from './ShopPage';
import { useOutletContext } from 'react-router-dom';


vi.mock('react-router-dom', () => ({
  ...vi.importActual('react-router-dom'),
  useOutletContext: vi.fn(),
}));

describe('Shop Page', () => {
  it('renders the correct heading', () => {
    // Mock the return value of useOutletContext
    useOutletContext.mockReturnValue([[1], vi.fn(), [            {
      id:1,
      title:'title',
      price:'333',
      category:'category',
      description:'description',
      image:'https://fakestoreapi.com/img/71YXzeOuslL._AC_UY879_.jpg'
  }]]);

    // Render the component
    render(<ShopPage />);

    // Assert that the heading is present with the correct text
    expect(screen.getByRole("heading")).toHaveTextContent(/Shop Page/i);
  });
});