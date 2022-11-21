import React, { useState, useEffect } from 'react'

import './banner.scss'
function Banner() {



    return (
        <section>
           
                <ul className='ulcss'>
                    <li className='licss'><img src="brightter-assets/brighter-logo.svg"  className='img-fluids'/></li>
                    <li className='licss'><button>Newsfeed</button></li>
                    <li className='licss'><button>Oasis</button></li>
                    <li className='licss'><button>watch</button></li>
                    <li className='licss'><button>play</button></li>
                    <li className='licss'><button>work</button></li>
                    <li className='licss'><button>shop</button></li>
                    <li className='licss'><button>stories</button></li>
                    <li className='licss'><button>$angel</button></li>
                </ul>
                <div className='container-fluid'>
                <div className="row">
                    <div className='col-lg-7 col-md-7 col-sm-7 banner-main'>

                        <div className='mainmargin'>


                            <img src='brightter-assets/main.png' className='img-fluid centerz' />

                            <h1 className='welcome'>Welcome to Oasis </h1>

                            <pre className="textofmain">
                                Download Oasis, a web browser by brightter.com
                                <br />
                                3x faster than chrome with privacy protection from companies like Google and big tech.
                            </pre>
                            <div className='center'>
                                <button className='btn btn-download'> <img src='brightter-assets/Download.svg' /> Download Oasis</button>
                            </div>
                        </div>
                    </div>
                    <div className='col-lg-5 col-md-5 col-sm-5'>
                        <div className='mainmargin'>
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
            <div className="container p-0">


                <div className="row">

                    <div className="col-xl-6 col-lg-6 m-auto ">
                        <div className='text-header'>
                            <h2 className='mainheading'>Stop being followed online</h2>
                            <p>By default, blocks the trackers & creepy ads on every website you visit. And that thing where ads follow you across the Web? We block that, too.</p>
                        </div>
                    </div>
                    <div className="col-xl-6 col-lg-6 m-auto ">
                        <div className='log-text'>
                            <img src='brightter-assets/authentication.svg' className='img-fluid' />

                        </div>
                    </div>

                </div>

                <div className="row">

                    <div className="col-xl-6 col-lg-6 m-auto ">
                        <div className='log-text'>
                            <img src='/brightter-assets/analyze.svg' className='img-fluid' />

                        </div>
                    </div>
                    <div className="col-xl-6 col-lg-6 m-auto ">
                        <div className='text-header'>
                            <h2 className='mainheading'>Online privacy made simple</h2>
                            <p>All the good of ad-blocking, incognito windows, private search, even VPN. All in a single download. Stay out of reach from those trying to monopolize your data. Safe and secure.</p>
                        </div>
                    </div>

                </div>


                <div className="row">

                    <div className="col-xl-6 col-lg-6 m-auto ">
                        <div className='text-header'>
                            <h2 className='mainheading'>Switch in 60 seconds</h2>
                            <p>Quickly import bookmarks, extensions, even saved passwords. It’s the best of your old browser, only safer. And it only takes a minute to switch.</p>
                        </div>
                    </div>
                    <div className="col-xl-6 col-lg-6 m-auto ">
                        <div className='log-text'>
                            <img src='brightter-assets/startup-launch.svg' className='img-fluid' />

                        </div>
                    </div>

                </div>

                <div className="row">

                    <div className="col-xl-6 col-lg-6 m-auto ">
                        <div className='log-text'>
                            <img src='brightter-assets/file-and-folder.svg' className='img-fluid' />

                        </div>
                    </div>
                    <div className="col-xl-6 col-lg-6 m-auto ">
                        <div className='text-header'>
                            <h2 className='mainheading'>Privacy you can see</h2>
                            <p>No creepy ads & trackers means less stuff (visible or hidden) on the sites you visit. And that means faster page load, better battery life, even mobile data savings.</p>
                        </div>
                    </div>

                </div>

            </div>
            <div className='banner-end'>
                <div className="row">
                    <div className='col-lg-12'>
                        <h1 className='welcomesecond'>Download Oasis.</h1>
                        <div className='center'>
                            <button className='btn btn-download'><img src='brightter-assets/Download.svg' /> Download Oasis</button>
                        </div>


                    </div>

                </div>
            </div>

            <div className='container'>
                <div className='row'>
                    <div className='col-lg-6 col-sm-6 col-md-6'>
                        <img src='brightter-assets/brighter-logo.svg' className='imgof'></img>
                    </div>
                    <div className='col-lg-6 col-sm-6 col-md-6'>
                        <p className='textfooter'>© 2022 brightter, All Rights Reserved</p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Banner