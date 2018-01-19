export default {
  logout () {
    const auth2 = window.gapi.auth2.getAuthInstance()
    auth2.signOut().then(function () {
      console.log('User signed out.')
    })
  }
}
