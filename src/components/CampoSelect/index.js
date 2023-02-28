import "./CampoSelect.css"

const CampoSelect = (props) => {
    return(
        <div className="campo-select">
            <label className=".campo-label">{props.label}</label>
            <select />
        </div>
    )
}

export default CampoSelect;