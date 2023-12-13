import React from 'react'

const Footer = () => {
  return (
    <footer>
       <img src='/public/assets/logoBagel.png' alt='' />

       <div className='footer--socials'>
        <img src='/public/assets/icons/instagram.png' alt='' />
        <img src='/public/assets/icons/facebook.png' alt='' />
        <img src='/public/assets/icons/twitter.png' alt='' />
        <img src='/public/assets/icons/linkedin.png' alt='' />
        <img src='/public/assets/icons/ubereats.png' alt='' />
       </div>

       <nav>
          <ul>
            <li>
              <a href='/'>
                Legals
              </a>
            </li>
            <li>
              <a href='/'>
                Accessibility
              </a>
            </li>
            <li>
              <a href='/'>
                Site map
              </a>
            </li>
            <li>
              <a href='/'>
                Confidentiality
              </a>
            </li>
          </ul>
       </nav>
    </footer>
  )
}

export default Footer