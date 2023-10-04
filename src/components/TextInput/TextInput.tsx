import React from 'react'
import '../../styles/components/TextInput.scss'

interface ITextInput {
    label: string;
    placeholder?: string;
    id: string;
    value: string;
    onChange: (val: string) => void;
}

const TextInput: React.FC<ITextInput> = ({ label, placeholder, id, onChange, value }) => {
    return (
        <div className='text-input'>
            <input type='text' id={id} name={id} placeholder={placeholder} value={value} onChange={(e) => onChange(e.target.value)} />
            <label htmlFor={id}>{label}</label>
        </div>
    )
}

export default TextInput