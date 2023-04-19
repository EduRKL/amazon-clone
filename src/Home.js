import React from 'react';
import "./Home.css";
import Product from "./Product";

function Home() {
  return (
    <div className='home'>
      <div className="home__container">
        <img 
        className='home__image'
        src="https://store-images.s-microsoft.com/image/apps.16285.14618985536919905.552c0017-6644-49a8-8467-8f7b34ce0428.30ad6b05-16d9-4d5e-a242-43107708a16a" alt='Imagem'/>
      
      <div className="home__row">
      <Product 
        title={'Camisa Adidas Seleção Masculina I 20/21 S/N° EW1510'} 
        price={249.90} 
        image={'https://m.media-amazon.com/images/I/61ZECX9aq4S._AC_SX522_.jpg'} 
        rating= {5} />
        <Product 
        title={'A startup enxuta: Como usar a inovação contínua para criar negócios radicalmente bem-sucedidos'} 
        price={29.99} 
        image={'https://m.media-amazon.com/images/I/41ch3v4+mpL._SY344_BO1,204,203,200_.jpg'} 
        rating= {3} />
        

      </div>

      <div className="home__row">
      <Product 
        title={'Fones de ouvido sem fio TWS JBL Wave Buds - Preto - JBLWBUDSBLK'} 
        price={282.00} 
        image={'https://m.media-amazon.com/images/I/51lhZsdupGL._AC_SX425_.jpg'} 
        rating= {4} />
        <Product 
        title={'Kit Batedeira Planetária Oster Bowl Inox e Liquidificador 1400 Full II - 220V'} 
        price={11.950} 
        image={'https://m.media-amazon.com/images/I/61GHpBpYZrL._AC_SY355_.jpg'} 
        rating= {4} />
        <Product 
        title={'Echo Dot (3ª Geração): Smart Speaker com Alexa - Cor Preta'} 
        price={206.10} 
        image={'https://m.media-amazon.com/images/I/41GZCWFJB1L._AC_SX425_.jpg'} 
        rating= {4} />

      </div>

      <div className="home__row">
      <Product 
        title={'Notebook Asus VivoBook X513EA-EJ1064T Intel Core i7 1165G7 Win 10 Home'} 
        price={5055.74} 
        image={'https://m.media-amazon.com/images/I/51TOcgJ9UzL._AC_SX425_.jpg'} 
        rating= {5} />

      </div>
      </div>
    </div>
  )
}

export default Home
