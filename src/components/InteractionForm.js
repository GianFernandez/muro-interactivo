import React, { useState } from 'react'

const InteractionForm = (props) => {

    const initialStateValues = {
        tittle: '',
        description: ''
    };

    const [values, setValues] = useState(initialStateValues);

    const mantenerCambioInput = e => {
        const {name, value} = e.target;
        setValues({...values, [name]: value})
    };

    const mantenerSubmit = e => {
        e.preventDefault();
        props.addOrEdit(values);
        setValues({...initialStateValues})
    };

    return (
        <form className="card card-body" onSubmit={mantenerSubmit}>
            <div className="form-group input-group">
                <div className="input-group-text bg-dark">
                    <i className="material-icons">text_fields</i>
                </div>
                <input type="text" className="form-control" name="tittle"
                    placeholder="Título" onChange={mantenerCambioInput}
                    value={values.tittle}></input>
            </div>

            <div className="form-group">
                <textarea name="description" rows="3" className="form-control"
                    placeholder="Cuentale a todos como ha sido tu día!"
                    onChange={mantenerCambioInput}
                    value={values.description}></textarea>
            </div>
            <button className="btn btn-primary btn-block">
                Publicar
            </button>
        </form >
    )
};

export default InteractionForm;