export default {
  onSignIn (googleUser) {
    const profile = googleUser.getBasicProfile()
    console.log(`ID: ${profile.getId()}`)
    console.log(`Name: ${profile.getName()}`)
    console.log(`Image URL: ${profile.getImageUrl()}`)
    console.log(`Email: ${profile.getEmail()}`)
    console.log(`ID Token: ${googleUser.getAuthResponse().id_token}`)
  }
}
