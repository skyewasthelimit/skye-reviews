import React from 'react'
import { Link } from 'react-router-dom'

const About = () => {
  return (
    <div className='about'>
      <div className='entry'>
        <p className='entry-text'>
          &nbsp;&nbsp;&nbsp;This is a submission based game reviews website built with
          the purpose of documenting my gaming ratings. I get asked often as 
          a streamer what my sentiments or feelings are about a game and I'm often
          not the best at articulating those words the way I'd like to when asked.
          <br></br>
          <br></br>
          &nbsp;&nbsp;&nbsp;The other purpose of this website is to give my friends, viewers,
          community members a place to submit their own reviews too! It's a fun hobby to practice writing
          and we I have a lot of passionate fellow gamers in my circle who I hope will also help contribute to 
          this site's content and purpose!
          <br></br>
          <br></br>
          &nbsp;&nbsp;&nbsp;If you want to submit a game review you can either use the built in submission form 
          <Link to="/Review">&nbsp;here</Link> or directly email me:
          <br></br>
          <br></br>
          <a href="mailto:skyemclean87@gmail.com"><h3>skyemclean87@gmail.com</h3></a>
          <br></br>
          <br></br>
          &nbsp;&nbsp;&nbsp;Thanks so much for checking out the site and happy gaming!

        </p>
      </div>
      <div className='entry-title'>
        About Skye Reviews
      </div>
    </div>
  )
}

export default About
