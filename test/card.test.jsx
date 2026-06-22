import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import Card from '../src/components/Card.jsx'

describe('Card', () => {
  it('shows the title in a level-2 heading', () => {
    render(<Card title="Coffee" price={3} />)
    expect(screen.getByRole('heading', { level: 2 })).toHaveTextContent('Coffee')
  })

  it('shows the price with a leading dollar sign', () => {
    render(<Card title="Coffee" price={3} />)
    expect(screen.getByText('$3')).toBeInTheDocument()
  })

  it('renders an <article> as the container', () => {
    const { container } = render(<Card title="Tea" price={2} />)
    expect(container.querySelector('article')).not.toBeNull()
  })
})
