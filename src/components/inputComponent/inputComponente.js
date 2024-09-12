function InputComponente({
    label,
    tipo,
    required,
    className = "form-control form-control-sm",
    id,
    placeholder,
    value,
    onchange,
    readOnly
}) {
    return <div className="form-group">
        <label>{label}</label>
        <input type={tipo} disabled={readOnly} required={required} value={value} onChange={onchange} className={className} id={id} placeholder={placeholder} />
    </div>
}

export default InputComponente