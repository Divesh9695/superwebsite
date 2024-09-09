import React from 'react'
import image from "./image/pri.jpg";
import Aimage from "./image/A.jpg";
import pimage from "./image/p.jpg";
import dimage from "./image/d.jpg";
import timage from "./image/t.jpg";
import rimage from "./image/r.jpg";
import simage from "./image/s.jpg";
const Home = () => {
    return (
        <div className='c' style={{ backgroundImage: `url(${image})` }} >
            <div className='Search-box'>
            </div>
            <div className='p'>

                <p>HANDCRAFTED  CAREER
                    <br />
                    OPPORTUNITIES SINCE 1987</p>
            </div>

            <div className='A'>

                <p>you are ready to joine tha five guys family?</p>
            </div>
            <div className='rock'>
            
            <div className='Search-box'>
                <input type="Search of job tittle" placeholder='Search of job tittle' className='search_text_box' />
                <div >
                    <button className='home_btn'>Find Job</button>
                </div>
            </div>
            <div className='Location'>
                <input type="Search of job tittle" placeholder='Search of job tittle' className='location_text_box' />
                <div >
                    <button className='home_btn'>Find Job</button>
                </div>
            </div>
            </div>
            <div className='m'>
            
            
                <p className='tip'> Get tailored job recommendations blased on your interests.</p>
                <button className='z'>Get started</button>
            </div>
            <div className='Q'>Job Recommendations for You</div>
            <div
                className='home'>New opportunities   Be tha first
            </div>

            <div className="cont">
                <div className="book">Terms of use  Listed below are the best restaurant captions on Instagram,
                    including over 100 captions, including captions on best, funny,
                    short, fine dining, restaurant openings, promotion
                    taglines and call-to-actions.</div>
                <div className="book">privacy policy Always look forward to coming here.#unique
                    We will fill your belly. It’s your heart that will yearn for more.
                    We do chicken right.
                    The magic grill.
                    You will get addicted to us. #addicted
                    Go to a place where your food can talk with your plate.
                    Tomatoes grow up to be ketchup. </div>
                <div className="book">your privacy choices Forget love, I’d rather fall in chocolate.
                    I like hashtags because they look like waffles.
                    I followed a diet but it didn’t follow me back, so I unfollowed it.
                    May your coffee be strong & your Monday be short
                    In the mood for food </div>
            </div>
            <button className="house">view more</button>
            <div className='t'>
                <div className="box4">
                    <h1>Hiring Events</h1></div>
                <div className='n'>
                    <h3>The vibrancy of youth often brings with it an insatiable zest
                        for life, where every moment is an adventure waiting to unfold. Embracing
                        the wild and carefree moments of our younger years is a treasure that enriches our
                        souls, fueling stories and lessons that we carry into our twilight years. This saying
                        captures the essence of living fully, encouraging us not to shy away from the spontaneous
                        escapades that ultimately pave the way for sagacity and discernment.</h3>
                </div>

                <div className='image_box_detail'>
                    <div className='ho'>
                        {/* <div className='pro' style={{ backgroundImage: `url(${Aimage})` }}> */}
                        <img className='pro' src={simage} alt="react logo" />

                        <div>
                            <p className='pea'>"Regardless of the situation, regardless of the
                                scoreboard, you're going to be successful because you've put in all
                                the time, all the effort, all the hard work,
                                and you know that it's going to
                                pay off." — Apollo Heste</p>
                        </div>
                    </div>
                    <div className='ho'>
                        <img className='pro' src={pimage} alt="react logo" />
                        <div>
                            <p className='ui'>"Regardless of the situation, regardless of the
                                scoreboard, you're going to be successful because you've put in all
                                the time, all the effort, all the hard work,
                                and you know that it's going to
                                pay off." — Apollo Heste</p>
                        </div>
                    </div>

                    <div className='ho'>
                        {/* <div className='pro' style={{ backgroundImage: `url(${pimage})` }}></div> */}
                        <img className='pro' src={simage} alt="react logo" />
                        <div>
                            <p className='to'>"Regardless of the situation, regardless of the
                                scoreboard, you're going to be successful because you've put in all
                                the time, all the effort, all the hard work,
                                and you know that it's going to
                                pay off." — Apollo Heste</p>
                        </div>
                    </div>
                </div>

            </div>
            <div>
                <div >
                    <div>
                        {/* <img className='div' src={timage} alt="react logo" /> */}
                        <div className='div' style={{ backgroundImage: `url(${timage})` }} >

                            <div className='h'>
                                <h1>Join Our Talent community</h1>
                                <p className='job-nav'>We Well reach out to you about relevant positions
                                    and keep you in mind whenever we have new and
                                    interesting opportunities!
                                </p>
                                <div >
                                    <button className='task'>Learn More</button>
                                </div>
                                </div>
                            </div>
                        </div>

                    </div>

                </div>
                <div className='top'>
                    <h1>
                        What our employees have to <br />say about working for five guys!
                    </h1>
                    <p className='down'> "Don't ever let somebody tell you that you can't do something.
                        Not even me, alright? You got a dream, you gotta protect it.
                        People can't do something
                        themselves, they want to tell you you can't do it.
                        If you want something, go get it. Period." — "
                        The Pursuit of Happyness" </p>
                </div>
                <div>
                    <div className='head' style={{ backgroundImage: `url(${rimage})` }} ></div>

                </div>
                <div>
                    <div className='data' style={{ backgroundImage: `url(${simage})` }}>
                        <div className='base'>
                            <h1>
                                Working for Five guys

                            </h1>
                            <p>
                                "To me, being perfect is not about that scoreboard out there.
                                It's not about winning. It's about you and your relationship to
                                yourself and your family and your friends." — "Friday Night Lights"
                            </p>

                            <div >
                                <button className='btn'>Learn More</button>
                            </div>

                        </div>
                    </div>
                </div>
                <div className='heading_text_job'>
                    <h4>Accommodation statement:</h4>
                </div>
                <div className="Advanced">
                    <p className='show'>Five Guys is committed to providing reasonable accommodation to,
                        among others, individuals with disabilities and disabled veterans.
                        If you need an accommodation because of a disability to search and apply for a career opportunity with Five Guys,
                        please send an e-mail to Keri Nelson, V.P.
                        of Compliance and Compensation at knelson@fiveguys.
                        com or call 703-339-3314 to let us know the nature of
                        your accommodation request and your contact information.</p>

                </div>
                <div className="header_container">
                    <h4>Statement regarding franchise owned locations:</h4>
                </div>
                <div className='content'>
                    <p>Many Five Guys restaurants are owned and operated by an independent franchisee.
                        Each Five Guys franchisee is an independent employer and thus solely
                        responsible for hiring decisions and all other employment-related matters for the franchisee’s restaurant(s).
                        The terms “Company”, “Five Guys”, “we”, “our”, or “us” refer to the specific entity (corporate or franchise)
                        that owns and operates the Five Guys restaurant to which you are applying.  Nothing on this site should be
                        construed as Five Guys Enterprises LLC or its affiliates being involved in or having control over a franchise employee’s
                        terms and conditions of employment.  Neither Five Guys Enterprises LLC nor its affiliates have access to franchisees’
                        employment records.  Any employment-related questions regarding a
                        franchise restaurant should be directed to the franchisee. </p>


                </div>
                <div>

                </div>
                <div className="grid-container">
                    <div className="grid-item">Terms of use</div>
                    <div className="grid-item">privacy policy</div>
                    <div className="grid-item">your privacy choices</div>
                </div>
                <div>
                    <div className="form-group">
                        <h1>FIVE GUYS</h1>

                        <div className="grid-container">
                            <div className="grid-item">Five Guys Enterprises, LLC <br />
                                1940 Duke St., 5th Floor
                                Alexandria, <br /> VA 22314</div>
                            <div className="grid-item">EXPLORE
                                SEARCH FOR JOBS
                                HOME</div>
                            <div className="grid-item">your privacy choices</div>
                            <div className="grid"></div>
                        </div>
                    </div>

                </div>
            </div>
            )
}

            export default Home