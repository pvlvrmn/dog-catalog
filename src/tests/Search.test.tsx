import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Search from '../Components/DogPage/Search';

describe('Search element', () => {
    test('Search input render', () => {
        render(<Search />);
        const linkElem = screen.getByPlaceholderText('Search breed');
        expect(linkElem).toBeInTheDocument();
    });
})

