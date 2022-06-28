import React from 'react'

const Footer = () => {
  return (
    <>
      <div className="containerfluid text-light p-4 bg-dark">
        <div className="row">
          <div className="col-10 col-md-4">
            <p className='text-center h5'>About Us</p>
            <ul>
            <li><p>Lorem ipsum dolor sit amet consectetur adipisicing.</p></li>
            <li><p>Lorem ipsum dolor sit amet consectetur adipisicing.</p></li>
            <li><p>Lorem ipsum dolor sit amet consectetur adipisicing.</p></li>
            <li><p>Lorem ipsum dolor sit amet consectetur adipisicing.</p></li>
            </ul>
          </div>
          <div className="col-10 col-md-4">
            <p className='text-center h5'>Contact Us</p>
            <p>Twitter &nbsp; &nbsp; &nbsp;<a href="http://twitter.com/gdeepak91">Click Here</a></p>
            <p>Facebook &nbsp; &nbsp; &nbsp;<a href="http://facebook.com/gdeepak91">Click Here</a></p>
            <p>LinkedIn &nbsp; &nbsp; &nbsp;<a href="http://linkedIn.com/gdeepak91">Click Here</a></p>
            <p>Instagram &nbsp; &nbsp; &nbsp;<a href="http://Instagram.com/gdeepak_91">Click Here</a></p>
            <p>WhatsApp &nbsp; &nbsp; &nbsp;<a href="http://whatsApp.com/gdeepak91">Click Here</a></p>
          </div>
          <div className="col-10 col-md-4">
            <p className='text-center h5'>Some Link</p>
            <p>Link</p>
            <p>Link</p>
            <p>Link</p>
            <p>Link</p>
          </div>
        </div>
      </div>
      <p className='text-center h5 bg-dark text-light p-3'>Copyright Reserved &copy; 2022 News Portal</p>
    </>
  )
}

export default Footer