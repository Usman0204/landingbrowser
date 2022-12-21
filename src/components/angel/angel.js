import React, { useState, useEffect } from 'react'

import './angel.scss'
function Angel() {



    return (
        <section>
            <nav class="navbar sticky-top navbar-expand-lg navbar-light bg-light">
                <div class="container">
                    <a href='/'><img src="angel-coin/assets/logo.png" className='img-fluids' /></a>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarSupportedContent">

                        <ul className='navbar-nav me-auto mb-2 mb-lg-0 ulcss'>
                            <li className='nav-item new'></li>
                            <li className='nav-item new'><a>Welcome</a></li>
                            <li className='nav-item new'><a>About US</a></li>
                            <li className='nav-item new'><a>Features</a></li>
                            <li className='nav-item new'><a>Vision</a></li>
                            <li className='nav-item new'><a>Roadmap</a></li>
                            <li className='nav-item new'><a>Buy </a></li>
                            <li className='nav-item new'><a>FAQs</a></li>

                        </ul>

                    </div>
                </div>
            </nav>
            <div>
                <div className='row mainback'>

                    <div className='col-lg-6 col-md-6 col-sm-6'>
                        <div className='padding'>
                            <h2 className='textmain'>WELCOME to $Angel Coin</h2>
                            <p className='textinner'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</p>
                            <div className='button-container-div'><button className='buynow'>Buy Now</button></div>
                        </div>
                    </div>
                    <div className='col-lg-6 col-md-6 col-sm-6'>
                        <img src='angel-coin/assets/header-image.png' className='imgs'/>
                    </div>

                </div>
                <div className='row mainback'>


                    <div className='col-lg-6 col-md-6 col-sm-6 offset-lg-1'>
                        <img src='angel-coin/assets/about-us-image.png' className='imgs' />
                    </div>
                    <div className='col-lg-5 col-md-5 col-sm-5'>
                        <div className=''>
                            <h2 className='textmain'>What is $Angel Coin?</h2>
                            <p className='textinner'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                                orem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s
                            </p>

                        </div>
                    </div>
                    <div className='row'>
                        <div className='col-lg-4 col-md-4 col-sm-4'>
                            <div className='innerheight'>
                                <img src="/angel-coin/assets/medal-icon.png" className='center' />
                                <h3 className='innertext'>text 1</h3>
                                <p>
                                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, orem Ipsum is simply dummy text of the printing and typesetting industry.
                                </p>
                            </div>
                        </div>
                        <div className='col-lg-4 col-md-4 col-sm-4'>
                            <div className='innerheight'>
                                <img src="/angel-coin/assets/settings-icon.png" className='center' />
                                <h3 className='innertext'>text 2</h3>
                                <p>
                                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, orem Ipsum is simply dummy text of the printing and typesetting industry.
                                </p>
                            </div>
                        </div>
                        <div className='col-lg-4 col-md-4 col-sm-4'>
                            <div className='innerheight'>
                                <img src="/angel-coin/assets/pie-chart-icon.png" className='center' />
                                <h3 className='innertext'>text 3</h3>
                                <p>
                                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, orem Ipsum is simply dummy text of the printing and typesetting industry.
                                </p>
                            </div>

                        </div>
                    </div>

                </div>
                <div className='row mainback'>
                    <div className='col-lg-12'>
                        <div className='mainpadding'>
                            <h1 className='roadmap'>Our Roadmap</h1>
                            <img src='angel-coin/assets/roadmap.png' className='img'/>
                        </div>
                    </div>
                </div>
                <div className='row mainback'>
                <h1 className='roadmap'>Frequently Asked Questions</h1>
                    <div className='col-lg-6 col-md-6 col-sm-6 offset-lg-3'>
                        <div className='mainpadding'>
                           
                            <div class="accordion" id="accordionExample">
                                <div class="accordion-item">
                                    <h2 class="accordion-header" id="headingOne">
                                        <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                            Accordion Item #1
                                        </button>
                                    </h2>
                                    <div id="collapseOne" class="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                                        <div class="accordion-body">
                                            <strong>This is the first item's accordion body.</strong> It is shown by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                                        </div>
                                    </div>
                                </div>
                                <div class="accordion-item">
                                    <h2 class="accordion-header" id="headingTwo">
                                        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                            Accordion Item #2
                                        </button>
                                    </h2>
                                    <div id="collapseTwo" class="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                                        <div class="accordion-body">
                                            <strong>This is the second item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                                        </div>
                                    </div>
                                </div>
                                <div class="accordion-item">
                                    <h2 class="accordion-header" id="headingThree">
                                        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                                            Accordion Item #3
                                        </button>
                                    </h2>
                                    <div id="collapseThree" class="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                                        <div class="accordion-body">
                                            <strong>This is the third item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                                        </div>
                                    </div>
                                </div>
                                <div class="accordion-item">
                                    <h2 class="accordion-header" id="headingfour">
                                        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapsefour" aria-expanded="false" aria-controls="collapsefour">
                                            Accordion Item #4
                                        </button>
                                    </h2>
                                    <div id="collapsefour" class="accordion-collapse collapse" aria-labelledby="headingfour" data-bs-parent="#accordionExample">
                                        <div class="accordion-body">
                                            <strong>This is the third item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                                        </div>
                                    </div>
                                </div>
                                <div class="accordion-item">
                                    <h2 class="accordion-header" id="headingfive">
                                        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapsefive" aria-expanded="false" aria-controls="collapsefive">
                                            Accordion Item #5
                                        </button>
                                    </h2>
                                    <div id="collapsefive" class="accordion-collapse collapse" aria-labelledby="headingfive" data-bs-parent="#accordionExample">
                                        <div class="accordion-body">
                                            <strong>This is the third item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                                        </div>
                                    </div>
                                </div>
                                <div class="accordion-item">
                                    <h2 class="accordion-header" id="headingsix">
                                        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapsesix" aria-expanded="false" aria-controls="collapsesix">
                                            Accordion Item #6
                                        </button>
                                    </h2>
                                    <div id="collapsesix" class="accordion-collapse collapse" aria-labelledby="headingsix" data-bs-parent="#accordionExample">
                                        <div class="accordion-body">
                                            <strong>This is the third item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                                        </div>
                                    </div>
                                </div>
                               
                            </div>
                        </div>
                    </div>
                </div>

                <div className='row mainback paading'>
                
                    <div className='col-lg-5 col-md-5 col-sm-5'>
                        <img src="angel-coin/assets/logo.png" />
                        <p>This is the first item's accordion body. It is shown by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. </p>
                    </div>
                   
                    <div className='col-lg-7 col-md-7 col-sm-7'>
                        <ul className='ulicons'>
                            <li className='icons'><img src="angel-coin/assets/instagram-icon.png" /></li>
                            <li className='icons'><img src="angel-coin/assets/linkedin-icon.png" /></li>
                            <li className='icons'><img src="angel-coin/assets/telegram-icon.png" /></li>
                            <li className='icons'><img src="angel-coin/assets/twitter-icon.png" /></li>
                            <li className='icons'><img src="angel-coin/assets/youtube-icon.png" /></li>
                            <li className='icons'><img src="angel-coin/assets/reddit-icon.png" /></li>
                            <li className='icons'><img src="angel-coin/assets/github-icon.png" /></li>

                        </ul>
                        
                    </div>
                    <hr></hr>
                    <p>© 2022 $angelcoin, ALL RIGHTS RESERVED</p>
                    <div/>
                
                </div>
            </div>

        </section>

    )
}

export default Angel