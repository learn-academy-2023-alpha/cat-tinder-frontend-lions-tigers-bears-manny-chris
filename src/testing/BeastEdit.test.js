import { render, screen } from '@testing-library/react'
import BeastEdit from '../components/BeastEdit.js'
import { MemoryRouter, Routes, Route } from "react-router-dom"
import editBeast from '../App.js'
import beasts from '../mockBeasts.js'

describe("<BeastEdit />", () => {
  // Create a function to render the BeastEdit
  const renderBeastEdit = () => {
    const div = document.createElement('div')
    render(
      <MemoryRouter initialEntries={['/beastedit/1']}>
        <Routes>
          <Route path='/beastedit/:id' element={<BeastEdit editBeast={editBeast} beasts={beasts}/>} />
        </Routes>
      </MemoryRouter>,
      div
    )
  }

  it('renders without crashing', () => {
    renderBeastEdit()
    screen.logTestingPlaygroundURL()
  })

  it('contains basic content', () => {
      renderBeastEdit()

      expect(screen.getByRole('heading', {
        name: /expand your tribe/i
      })).toBeInTheDocument
      expect(screen.getByRole('textbox', {
        name: /name/i
      })).toBeInTheDocument
      expect(screen.getByRole('spinbutton', {
        name: /age/i
      })).toBeInTheDocument
      expect(screen.getByRole('textbox', {
        name: /image url/i
      })).toBeInTheDocument
      expect(screen.getByRole('button', {
        name: /mutate/i
      })).toBeInTheDocument
  })
})