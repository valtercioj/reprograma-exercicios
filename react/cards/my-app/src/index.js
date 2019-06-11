import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import './App.css';
import img01 from './img/IMG_3818.JPG';
import img02 from './img/IMG_4046.JPG';
import * as serviceWorker from './serviceWorker';

// function Card(props){
//     return (
//     <div className="comentario">
//         <img className="comentario__perfil" src={props.img} alt={props.alt}/>
//         <div>
//             <h3 className="comentario__nome">{props.nome}</h3>
//             <h4 className="comentario__subtitulo">{props.subtitulo}</h4>
//             <hr/>
//             <p>{props.comentario}</p>
//         </div>
//     </div>
//     )
// }

// function App(){
//     return (
//     <div>
//         < Card
//             nome="Mellina" 
//             subtitulo="AMEI ESSE VIDEO KERO ++" 
//             comentario="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Itaque illum quas suscipit atque, odit sapiente qui tenetur minus ipsa sed quos accusantium laudantium sit maiores, distinctio debitis corrupti nisi. Veniam."
//             img={img01}
//             alt="Foto de gata deitada no chão"
//         />
//         < Card
//             nome="Joana" 
//             subtitulo="Nem achei nada demais" 
//             comentario="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Itaque illum quas suscipit atque, odit sapiente qui tenetur minus ipsa sed quos accusantium laudantium sit maiores, distinctio debitis corrupti nisi. Veniam."
//             img={img02}
//             alt="Foto de gata deitada no sofá"
//         />
//     </div>
//     )
// }


//usando classes:

class Card extends React.Component{
    render() {
        return (
            <div className="comentario">
                <img className="comentario__perfil" src={this.props.img} alt={this.props.alt}/>
                <div>
                    <h3 className="comentario__nome">{this.props.nome}</h3>
                    <h4 className="comentario__subtitulo">{this.props.subtitulo}</h4>
                    <hr/>
                    <p>{this.props.comentario}</p>
                </div>
            </div>
        )
    }
}

class App extends React.Component {
    render() {
        return (
            <div>
            < Card
                nome="Mellina" 
                subtitulo="AMEI ESSE VIDEO KERO ++" 
                comentario="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Itaque illum quas suscipit atque, odit sapiente qui tenetur minus ipsa sed quos accusantium laudantium sit maiores, distinctio debitis corrupti nisi. Veniam."
                img={img01}
                alt="Foto de gata deitada no chão"
            />
            < Card
                nome="Joana" 
                subtitulo="Nem achei nada demais" 
                comentario="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Itaque illum quas suscipit atque, odit sapiente qui tenetur minus ipsa sed quos accusantium laudantium sit maiores, distinctio debitis corrupti nisi. Veniam."
                img={img02}
                alt="Foto de gata deitada no sofá"
            />
        </div>
        )
    }
}

ReactDOM.render(< App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
