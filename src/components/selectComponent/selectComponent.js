function SelectComponente({
    options,
    value,
    onchange,
    label,
    required,
    disabled
}) {
    return (
        <div className="form-group">
            <label>{label}</label>
            <select value={value} required={required} disabled={disabled} onChange={onchange} className="form-select form-select-sm" aria-label=".form-select-sm example">
                <option value="">Selecione...</option>
                {
                    options.map(function (option) {
                        return <option value={option.value}>{option.label}</option>
                    })
                }
            </select>
        </div>
    )
}
export default SelectComponente