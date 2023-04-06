import { render, screen } from '@testing-library/react'
import Footer from '../components/Footer.js'
import { BrowserRouter } from "react-router-dom"

describe("<Footer />", () => {
  // Create a function to render the Footer
  const renderFooter = () => {
    const div = document.createElement('div')
    render(
      <BrowserRouter>
        <Footer />
      </BrowserRouter>,
      div
    )
  }

  it('renders without crashing', () => {
    renderFooter()
  })

  it('contains basic content', () => {
    renderFooter()

    expect('©').toBeInTheDocument
    expect('Contact Us').toBeInTheDocument
    expect('Terms').toBeInTheDocument
  })
})