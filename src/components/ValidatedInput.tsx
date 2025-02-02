import React, { useState } from "react";

interface ValidatedInputProps {
    label: string;
    value: string;
    onChange: (value: string) => void;
    type?: string;
    validate: (value: string) => string;
}

const ValidatedInput: React.FC<ValidatedInputProps> = ({ label, value, onChange, type = "text", validate }) => {
    const [error, setError] = useState("");

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const newValue = e.target.value;
        onChange(newValue);
        setError(validate(newValue));
    };

    return (
        <div style={{ display: "flex", flexDirection: "column", gap: "5px" }}>
            <label>{label}:</label>
            <input type={type} value={value} onChange={handleChange} />
            {error && <small style={{ color: "red" }}>{error}</small>}
        </div>
    );
};

export default ValidatedInput;
