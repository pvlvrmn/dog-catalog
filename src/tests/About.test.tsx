import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import About from '../Components/About/About';

test('Correct render of AboutPage', () => {
    render(<About />);
    const linkElem = screen.getByText('Tech stack');
    expect(linkElem).toBeInTheDocument();
});
