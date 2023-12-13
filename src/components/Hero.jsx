import React from 'react'

const Hero = () => {
  return (
    <section className='hero'>
      <div className='hero--left'>
        <p className=''>In faucibus suspendisse in sagittis pharetra facilisis.</p>
        <h1 className=''>About</h1>
        <p className=''>Tellus tincidunt gravida tincidunt dui nulla arcu scelerisque sit. Aliquet.</p>
        <p className=''>Gravida urna eget magna mauris tristique morbi netus faucibus massa. Curabitur at nibh vel viverra amet lectus habitasse. Sed.</p>
        <div>
          <a href='/'>Ultricies</a>
          <a href='/'>Tristique montes</a>
        </div>
      </div>

      <div className='hero--right'>
        <div className='quote'>
          <img src='' alt=''/>
          <p>Sed molestie id blandit tempor. Arcu malesuada vitae aliquam in amet ultrices dui mauris amet.</p>
        </div>
      </div>
    </section>
  )
}

export default Hero