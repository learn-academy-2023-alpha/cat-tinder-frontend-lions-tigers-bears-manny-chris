import { render, screen } from '@testing-library/react'
import BeastNew from '../components/BeastNew.js'
import { BrowserRouter } from "react-router-dom"
import createBeast from '../App.js'

describe("<BeastNew />", () => {
    // Create a function to render the BeastNew
    const renderBeastNew = () => {
        const div = document.createElement('div')
        render(
            <BrowserRouter>
                <BeastNew createBeast={createBeast} />
            </BrowserRouter>,
            div
        )
    }

    it('renders without crashing', () => {
        renderBeastNew()
        screen.logTestingPlaygroundURL()
    })

    it('contains basic content', () => {
        renderBeastNew()

        expect(screen.getByRole('heading', {
            name: /expand your tribe/i
        })).toBeInTheDocument
        expect(screen.getByRole('textbox', {
            name: /description/i
        })).toBeInTheDocument
        expect(screen.getByRole('spinbutton', {
            name: /age/i
        })).toBeInTheDocument
        expect(screen.getByRole('button', {
            name: /spawn/i
        })).toBeInTheDocument
    })
})