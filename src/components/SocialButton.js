import React from 'react'

const SocialButton = () => {
  return (
    <div  className="social">
    <button
    id="connect-facebook"
    onClick=" connectWithSocialMedia(event)"
  >
    Connect with Facebook
  </button>
  <button
    id="connect-twitter"
    onClick=" connectWithSocialMedia(event)"
  >
    Connect with Twitter
  </button>
  <button
    id="connect-instagram"
    onClick=" connectWithSocialMedia(event)"
  >
    Connect with Instagram
  </button>
    </div>
  )
}

export default SocialButton

