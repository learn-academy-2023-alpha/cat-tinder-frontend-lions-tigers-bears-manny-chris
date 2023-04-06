import { render, screen, userEvent } from '@testing-library/react';
import Header from '../components/Header.js';
import { BrowserRouter } from "react-router-dom"

describe("<Header />", () => {
  // Create a function to render the Header
  const renderHeader = () => {
    const div = document.createElement('div')
    render(
      <BrowserRouter>
        <Header />
      </BrowserRouter>,
      div
    )
  }

  it('renders without crashing', () => {
    renderHeader()
  })

  // Test will not pass until NavBar works in Test
  it('renders a logo with a src and alt', () => {
    renderHeader()

    const logo = screen.getByRole('img')

    expect(logo).toHaveAttribute('src', 'icon.png')
    expect(logo).toHaveAttribute('alt', 'uproar')
  })


  // Test will not pass until NavBar works in Test
  it('has clickable links', () => {
    renderHeader()

    expect(screen.getByRole('link', { name: 'Hunt' }))
    expect(screen.getByRole('link', { name: 'Expand' }))
    expect(screen.getByRole('link', { name: 'Sharpen' }))
  })

  it('has a hamburger button', () => {
    renderHeader()

    expect(screen.getByRole('button', { name: /toggle navigation/i }))
  })
})