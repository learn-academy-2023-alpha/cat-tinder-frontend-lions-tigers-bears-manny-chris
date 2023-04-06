import { render, screen } from '@testing-library/react'
import BeastIndex from '../components/BeastIndex.js'
import { BrowserRouter } from "react-router-dom"
import beasts from '../mockBeasts.js'

describe("<BeastIndex />", () => {
  // Create a function to render the BeastIndex
  const renderBeastIndex = () => {
    const div = document.createElement('div')
    render(
      <BrowserRouter>
        <BeastIndex beasts={beasts} />
      </BrowserRouter>,
      div
    )
  }

  it('renders without crashing', () => {
    renderBeastIndex()
  })

  it('contains basic content', () => {
    renderBeastIndex()

    expect(screen.getByRole('img', { name: /tony/i })).toBeInTheDocument
    expect(screen.getByRole('heading', { name: /tony/i })).toBeInTheDocument
    expect(screen.getByRole('heading', { name: /30/i })).toBeInTheDocument
    expect(screen.getByText(/grrrrrreaaaaat match/i)).toBeInTheDocument
  })
})