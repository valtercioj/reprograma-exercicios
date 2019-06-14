import React from 'react';

class BtnFontSize extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            tamanho: 16
        }
    }

    aumentaFonte = () => {
        // this.setState((estadoAnterior) => {
        //     return {
        //         tamanho: estadoAnterior.tamanho + 2
        //     }
        // })
        this.setState((estadoAnterior) => {return estadoAnterior.tamanho+=2})
    }

    diminuiFonte = () => {
        this.setState((estadoAnterior) => {return estadoAnterior.tamanho-=2})
    }

    render() {
        document.querySelector('body').style.fontSize = `${this.state.tamanho}px`
        return (
            <div className="btnGroup">
                <button onClick={this.aumentaFonte} className="btnFontSize">+1</button>
                <button onClick={this.diminuiFonte} className="btnFontSize">-1</button>
            </div>
        )
    }
}   

export default BtnFontSize;