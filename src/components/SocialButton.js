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


// {usersData && usersData.map((record) => {
//   console.log("record ", record)
//  const { id, myname, email, myphone, image, gender, } = record;
//  return (
//    <CardSection
//      key={record.id}
//      usersData={record}
// /> );
// })}