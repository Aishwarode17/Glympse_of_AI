import React from 'react'
import {Link} from 'react-router-dom'


export default function Signup({googleSignin}) {


    return (
            <article className="br3 ba b--black-10 ma2 mb7 w-100 shadow-1 w-50-m w-25-l mw6 center " style={{textAlign:"center"}}>
            <main className="pa4 black-80 w-100 ">
                {/* <form className="measure"> */}
                    <fieldset id="sign_up" className="ba b--transparent ph0 mh0 " >
                    <legend className="f3 fw6 ph0 mh0">Sign In</legend>
                    <div className="mt3">
                        <label className="db fw6 lh-copy f5" htmlFor="email-address">Email</label>
                        <input className="pa2 input-reset ba bg-black white w-100" type="email" name="email-address"  id="email-address"/>
                    </div>
                    <div className="mv3">
                        <label className="db fw6 lh-copy f5" htmlFor="password">Password</label>
                        <input className="b pa2 input-reset ba bg-black white w-100" type="password" name="password"  id="password"/>
                    </div>
                    </fieldset>
                    <div className="lh-copy mt3">
                    <Link style={{fontSize:"X-large",fontWeight:"bold", textDecoration:"none", color:"black"}} className="transhtmlForm link+ ba pa1 dim grow shadow-4"  to={"/Robosapian"}>Signin</Link>
                    </div>
                    <div className="lh-copy mt3">
                    <Link style={{color:"blue",fontSize:"X-large",fontWeight:"bold", textDecoration:"underline"}} className="nav-link dim link "  to={"/Register"}>Register</Link>
                    </div>
                    <div className=" mt3">
                    <button onClick={googleSignin}  className="tk w-30 shadow-1 btnd ml3 w-90 btnd grow f4 link ph3 pv2 white line bg-light-purple">{`Signin with google`}</button>
                    </div>
                    <div className='mt3'>
                        <h3 className='black' style={{fontWeight:"bold"}}>Please sign in via google to get registered in our database for future updates</h3>
                    </div>


                {/* </form> */}
            </main>
            </article>
    )
}
