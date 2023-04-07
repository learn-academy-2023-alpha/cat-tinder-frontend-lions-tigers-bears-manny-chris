import { render, screen } from '@testing-library/react';
import App from '../App';
import { Routes, Route, BrowserRouter } from "react-router-dom"

test('App renders without issue', () => {
  render(
    <BrowserRouter>
      <App />
    </BrowserRouter>
  )
})