import React, { useState, useEffect } from 'react'

import './oasis.scss'
function Oasis() {



    return (
        <section>
            <nav class="navbar sticky-top navbar-expand-lg navbar-light bg-light">
                <div class="container-fluid">
                 <a href='/'><img src="brightter-assets/brighter-logo.svg" className='img-fluids' /></a>  
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarSupportedContent">

                        <ul className='navbar-nav me-auto mb-2 mb-lg-0 ulcss'>
                            <li className='nav-item licss'></li>
                            <li className='nav-item licss'><button>Newsfeed</button></li>
                            <li className='nav-item licss'><button>Oasis</button></li>
                            <li className='nav-item licss'><button>watch</button></li>
                            <li className='nav-item licss'><button>play</button></li>
                            <li className='nav-item licss'><button>work</button></li>
                            <li className='nav-item licss'><button>shop</button></li>
                            <li className='nav-item licss'><button>stories</button></li>
                            <li className='nav-item licss'><a href="/angel"><button>$angel</button></a></li>
                        </ul>

                    </div>
                </div>
            </nav>


            <div className='container-fluid'>
                <div className="row">
                    <div className='col-lg-7 col-md-7 col-sm-7 '>

                        <div className='mainmargin'>


                          
                            {/* <h1 className='welcome'>Welcome to Oasis </h1> */}
                            <video width="750" height="500" controls autoPlay >
                                <source src="brightter-assets/Logoanimation.mp4" type="video/mp4" />
                            </video>

                        
                        </div>
                    </div>
                    <div className='col-lg-5 col-md-5 col-sm-5'>
                        <div className='mainmargin positionof'>
                            <h2 className='mainwel'>Welcome</h2>
                            <h3 className='mainsex'>to<strong> brightter</strong> </h3>

                            <h4 className='welback'>Welcome Back!</h4>
                            <h5>Please sign to continue</h5>

                            <div>
                                <label>Email</label>
                                <input type="email" className='form-control' />
                            </div>
                            <div>
                                <label>Password</label>
                                <input type="password" className='form-control' />
                            </div>
                            <div>
                                <button type='submit' className='submitbtn'>Sign in</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
          

         
        </section>
    )
}

export default Oasis