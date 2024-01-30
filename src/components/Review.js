import React from 'react'
import { Link } from 'react-router-dom'

const Review = () => {
  return (
    <div className='review-form'>
      <div className='form-entry'>
        <p className='entry-text'>Submit a Review : FEATURE CURRENTLY UNAVAILABLE</p>
      <form className="form-for-reviews" method="post" action='mailto:skyemclean87@gmail.com'>
        <fieldset>
        <label for="game-name">Game:<input className='form-input' placeholder="Game name" required></input></label>
        <label for="review"><textarea className='form-input' rows="3" cols="30" placeholder='Your review'required></textarea></label>
        <label for="rating">Rating:<input className='form-input' type="number" min="1" max="10" placeholder="Out of 10" required></input></label>
        <label for="user-name">Username:<input className='form-input' type="text" placeholder="Username" required></input></label>
        <label for="email">Email:<input className='form-input' type="email" placeholder="Email" required></input></label>
        <label for="submit"><input value="Submit" className="submit-btn" type="submit" /></label>
        </fieldset>
      </form>
      </div>
    </div>
  )
}

export default Review