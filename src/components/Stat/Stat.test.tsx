import { cleanup, render } from '@testing-library/react';
import Stat from './Stat';

afterEach(() => {
    cleanup();
})

describe('Stat Component', () => {
    const mockStat = {
        type: "Strength",
        computed: true,
        formula: jest.fn()
    }
    const { container } = render(<Stat type={mockStat.type} computed={mockStat.computed} formula={mockStat.formula} />);
    test('should render the Stat component', () => {
        expect(container.getElementsByClassName('stat')).toBeTruthy();
    })
});