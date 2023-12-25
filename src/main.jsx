//1. importar librerias

import React from "react";
import ReactDOM from "react-dom";


//2. obtener la referencia al elemento donde ese va a renderizar la app

const rootDivElement = document.getElementById('root');

//3. le decimos a react que tome el control de ese elemto\
//ese elemento va a ser la razin de nuestra app

const root = ReactDOM.createRoot(rootDivElement);

//4. creasr un componente que se va a renderizxar / mostrar el elemento rainz


function App() {
    return <h1>Hola Mundo</h1>;
}

//5. renderizar el componente en el elemento rainz


root.render(<App />);