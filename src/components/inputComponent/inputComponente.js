function InputComponente({
    label,
    tipo,
    required,
    className = "form-control form-control-sm",
    id,
    placeholder,
    value,
    onchange,
    readOnly,
    maxLength = undefined,
    minLength = undefined
}) {
    return <div className="form-group">
        <label>{label}</label>
        <input type={tipo}
            disabled={readOnly}
            required={required}
            value={value}
            onChange={onchange}
            className={className}
            id={id}
            placeholder={placeholder}
            maxLength={maxLength}
            minLength={minLength}
        />
    </div>
}

export default InputComponente