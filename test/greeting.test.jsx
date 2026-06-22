import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import Greeting from '../src/components/Greeting.jsx'

describe('Greeting', () => {
  it('renders a level-1 heading that greets the name prop', () => {
    render(<Greeting name="Ada" />)
    const heading = screen.getByRole('heading', { level: 1 })
    expect(heading).toHaveTextContent('Hello, Ada!')
  })

  it('uses the name it is given (not a hard-coded one)', () => {
    render(<Greeting name="Grace" />)
    expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent('Hello, Grace!')
  })
})
