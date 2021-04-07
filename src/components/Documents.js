import React, { Component } from 'react';

export default class Documents extends Component {
    documentSelected(){
      var res = document.getElementById("id").value;
      document.getElementById("dem").innerHTML = res + "Selecionado";
      console.log(res)
    };

    render() {
        return (
            <div>
                <div className="main">
                    <h2>Documents</h2>
                    <p>Lista de Documentos</p>
                        <select id="id" onChange="documetSelected()">
                            <option value="doc1">Documento 1</option>
                            <option value="doc2">Documento 2</option>
                            <option value="doc3">Documento 3</option>
                            <option value="doc4">Documento 4</option>
                        </select>
                        <p id="dem"></p>
                </div>
            </div>
        )
    }
}
