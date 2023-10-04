import React from 'react'
import '../../styles/components/TextInput.scss'

interface ITextInput {
    label: string;
    placeholder?: string;
    id: string;
}

const TextInput: React.FC<ITextInput> = ({ label, placeholder, id }) => {
    return (
        <div className='text-input'>
            <input type='text' id={id} name={id} placeholder={placeholder} />
            <label htmlFor={id}>{label}</label>
        </div>
    )
}

export default TextInput