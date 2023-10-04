import React, { FC } from 'react'

interface ITextInput {
    label: string;
    placeholder?: string;
    id: string;
}

const TextInput: FC<ITextInput> = ({ label, placeholder, id }) => {
    return (
        <label htmlFor={id}>{label}<input type='text' id={id} name={id} placeholder={placeholder} /></label>
    )
}

export default TextInput