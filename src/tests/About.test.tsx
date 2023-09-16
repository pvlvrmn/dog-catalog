import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import About from '../Components/About/About';

describe('About page', () => {
    test('About Page text render', () => {
        render(<About />);
        const linkElem = screen.getByText('Tech stack');
        expect(linkElem).toBeInTheDocument();
    });
    //
    // test('Number of links', () => {
    //     render(<About />);
    //     const linkElem = screen.getByRole('a');
    //     expect(linkElem).toBeInTheDocument();
    // })

    it('About renders correctly', () => {
        const tree = render(<About />)
        expect(tree).toMatchSnapshot();
    });
})

