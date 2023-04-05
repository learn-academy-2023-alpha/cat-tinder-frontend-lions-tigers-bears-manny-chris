import { render, screen } from '@testing-library/react';
import NotFound from '../components/NotFound.js';
import { BrowserRouter } from "react-router-dom"

describe("<NotFound />", () => {
      // Create a function to render the NotFound
      const renderNotFound = () => {
            const div = document.createElement('div')
            render(
                  <BrowserRouter>
                        <NotFound />
                  </BrowserRouter>,
                  div
            )
      }

      it('renders without crashing', () => {
            renderNotFound()
      })

      it('renders a logo with a src and alt', () => {
            renderNotFound()

            const logo = screen.getByRole('img')

            expect(logo).toHaveAttribute('src', '404.jpeg')
            expect(logo).toHaveAttribute('alt', 'not found')
      })
})