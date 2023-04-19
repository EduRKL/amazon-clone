import React from 'react'
import './Header.css'
import SearchIcon from '@mui/icons-material/Search';
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';

function Header() {
  return (
    <div className='header'>
        <img 
            className = "header__logo" 
            src="http://pngimg.com/uploads/amazon/amazon_PNG11.png" alt='Amazon Logo'
            />

            <div className='header__search'>
                <input className='header__searchInput' type='text'></input>
                <SearchIcon className = "header__searchIcon"/>
                { /* Logo */ }

            </div>

            <div className='header__nav'>

              <div className='header__option'>
                  <span className='header__optionLineOne'>Olá, convidado</span>
                  <span className='header__optionLineTwo'>Assine agora</span>
              </div>


              <div className='header__option'>
                  <span className='header__optionLineOne'>Devoluções</span>
                  <span className='header__optionLineTwo'>e Pedidos</span>
              </div>


              <div className='header__option'>
                  <span className='header__optionLineOne'>Seu</span>
                  <span className='header__optionLineTwo'>Prime</span>
              </div>


             <div className='header__optionBasket'>
                  <ShoppingBasketIcon />
                  <span className='header__optionLineTwo header__basketCount'>0</span>
             </div>
              
            </div>
    </div>

    
  )
}

export default Header
