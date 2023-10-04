import { cleanup, render } from '@testing-library/react';
import CharacterSheet from './CharacterSheet';

afterEach(() => {
    cleanup();
})

describe('CharacterSheet Component', () => {
    const { container } = render(<CharacterSheet />);
    test('should render the CharacterSheet component', () => {
        expect(container.getElementsByClassName('character-sheet')).toBeTruthy();
    })
});