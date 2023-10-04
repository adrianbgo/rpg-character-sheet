import { cleanup, render } from '@testing-library/react';
import TextInput from './TextInput';

afterEach(() => {
    cleanup();
})

describe('Stat Component', () => {
    const mockTextInput = {
        id: 'test-id',
        label: 'test-label',
    }
    const { container } = render(<TextInput id={mockTextInput.id} label={mockTextInput.label} />);
    test('should render the TextInput component', () => {
        expect(container.getElementsByClassName('text-input')).toBeTruthy();
    })
});