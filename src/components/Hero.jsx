import React from 'react'

const Hero = () => {
  return (
    <section className='hero'>
      <div className='hero--left'>
        <div className='hero--left__texts'>
          <p className='upper--title'>In faucibus suspendisse in sagittis pharetra facilisis.</p>
          <h1 className='title'>About</h1>
          <p className='text-xl'>Tellus tincidunt gravida tincidunt dui nulla arcu scelerisque sit. Aliquet.</p>
          <p className='text-regular'>Gravida urna eget magna mauris tristique morbi netus faucibus massa. Curabitur at nibh vel viverra amet lectus habitasse. Sed.</p>
        </div>

        <div className='hero--left__bottom'>
           <div className='link'>
            <a className='link--brown' href='/'>Ultricies</a>
            <a className='link--white' href='/'>Tristique montes</a>
          </div>

          <div className='ask'>
            <img src='/public/assets/icons/question.png' alt=''/>
            <p>Questions ? <a href="/contact">Contact us</a></p>
          </div>
        </div>
      </div>

      <div className='hero--right'>
        <div className='quote'>
          <img src='/public/assets/icons/quote.png' alt=''/>
          <p>Sed molestie id blandit tempor. Arcu malesuada vitae aliquam in amet ultrices dui mauris amet.</p>
        </div>
      </div>
    </section>
  )
}

export default Hero