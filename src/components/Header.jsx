import React from 'react'

const Header = () => {
  return (
    <header>
      <a href="/" className='header--logo'>
        <img src='/public/assets/logoBagel.png' alt='logo' />
      </a>
      
      <div className='header--right'>
        <img className='menu--trigger' src='/public/assets/icons/burger.png' alt=''/>

        <nav>
          <ul>
            <li>
              <a className='menu--link' href='/about'>About</a>
            </li>
            <li>
              <a className='menu--link' href='/essentials'>Our essentials</a>
            </li>
            <li>
              <a className='menu--link' href='/testimony'>Testimony</a>
            </li>
            <li>
              <a className='menu--link' href='/contact'>Contact</a>
            </li>
          </ul>
        </nav>

        <a className='order--button' href='/order'>
          Order now
        </a>
      </div>
      

    </header>
  )
}

export default Header   