import React, { Component } from 'react';

class NewForm extends Component {
    
    categoryRef = React.createRef();
    
    getNews = e => {
        e.preventDefault();
        this.props.getNews(this.categoryRef.current.value);
    }
    render() { 
        return (
            <div className="buscador row">
                <div className="col s12 m8 offset-m2">
                    <form onClick={this.getNews}>
                        <h2>Noticias por categoria</h2>
                        <div className="input-field col s12 m8">
                            <select ref={this.categoryRef}>
                                <option value="general" defaultValue>General</option>
                                <option value="business">Negocio</option>
                                <option value="entertainment">Entretenimiento</option>
                                <option value="health">Salud</option>
                                <option value="science">Ciencia</option>
                                <option value="sports">Deportes</option>
                                <option value="technology">Tecnología</option>
                            </select>
                        </div>
                        <div className="input-field col s12 m4 enviar">
                            <input type="submit" className="btn amber darken-2" value="buscar" />
                        </div>
                    </form>
                </div>
            </div>
        );
    }
}
 
export default NewForm;