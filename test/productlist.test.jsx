import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import ProductList from '../src/components/ProductList.jsx'

const products = [
  { id: 1, title: 'Coffee', price: 3 },
  { id: 2, title: 'Tea', price: 2 },
  { id: 3, title: 'Juice', price: 4 },
]

describe('ProductList', () => {
  it('renders one list item per product', () => {
    render(<ProductList products={products} />)
    expect(screen.getAllByRole('listitem')).toHaveLength(3)
  })

  it('shows every product title', () => {
    render(<ProductList products={products} />)
    expect(screen.getByText('Coffee')).toBeInTheDocument()
    expect(screen.getByText('Tea')).toBeInTheDocument()
    expect(screen.getByText('Juice')).toBeInTheDocument()
  })

  it('renders a <ul> with no items for an empty array', () => {
    const { container } = render(<ProductList products={[]} />)
    const ul = container.querySelector('ul')
    expect(ul).not.toBeNull()
    expect(ul.querySelectorAll('li')).toHaveLength(0)
  })
})
