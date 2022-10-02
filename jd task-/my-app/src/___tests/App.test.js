import { render, screen } from "@testing-library/react"
import App from "../App"

describe('App Component', () => {
    it('renders App component', () => {
        const { container } = render(<App />);
        expect(container).toBeDefined();
    })
    it('checks for rendered elements in the DOM', () => {
        render(<App />);
        expect(screen.getByTestId('title').textContent.includes('The Book Store')).toBeTruthy();
    })
})