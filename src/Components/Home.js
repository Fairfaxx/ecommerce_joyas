import React from 'react';
import ItemListContainer from '../Containers/ItemListContainer';

const Home = () => {

    return (
        <div style={{ paddingTop: '50px' }}>
            <h1>Joyas Antiguas de Colección</h1>
            <h3>Desde 1973</h3>
            <p style={{ paddingTop: '50px' }}>Estamos en el <strong>mismo lugar</strong> desde siempre. <br /> Nuestro <strong>puntaje</strong> nos valida como la <strong>MEJOR</strong> casa de ventas de Joyas</p>
            <div style={{ marginTop: '-130px' }}>
                <ItemListContainer />
            </div>
        </div>
    );
}

export default Home;
