export default {
  onlogout () {
    const auth2 = window.gapi.auth2.getAuthInstance()
    auth2.signOut().then(() => {
      if (typeof this.logout === 'function') {
        this.logout()
      } else {
        console.log('Callback not declared. User signed out.')
      }
    })
  }
}
