import { render, screen } from '@testing-library/react'
import BeastShow from '../components/BeastShow.js'
import { MemoryRouter, Routes, Route } from "react-router-dom"
import beasts from '../mockBeasts.js'

describe("<BeastShow />", () => {
      // Create a function to render the BeastShow
      const renderBeastShow = () => {
            render(
                  <MemoryRouter initialEntries={['/beastshow/1']}>
                        <Routes>
                              <Route path='/beastshow/:id' element={<BeastShow beasts={beasts} />}/>
                        </Routes>
                  </MemoryRouter>
            )
      }

      it('renders without crashing', () => {
            renderBeastShow()
      })

      it('contains basic content', () => {
            renderBeastShow()

            expect(screen.getByRole('img', {name: /tony/i})).toBeInTheDocument
            expect(screen.getByRole('heading', {name: /tony/i})).toBeInTheDocument
            expect(screen.getByRole('heading', {name: /30/i})).toBeInTheDocument
            expect(screen.getByText(/grrrrrreaaaaat match/i)).toBeInTheDocument
      })
})