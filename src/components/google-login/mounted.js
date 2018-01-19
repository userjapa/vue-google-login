export default function () {
  if (!window.gapi) {
    if (this.clientId && typeof this.clientId === 'string' && this.clientId !== '') {
      let metaTag = document.getElementsByTagName('meta')[0]
      if (!document.getElementById('client_id') && !document.getElementById('scope')) {
        let id = document.createElement('meta')
        id.name = 'google-signin-client_id'
        id.id = 'client_id'
        id.content = this.clientId
        metaTag.parentNode.insertBefore(id, metaTag)
        console.log('Credentials included!')

        let scope = document.createElement('meta')
        scope.name = 'google-signin-scope'
        scope.content = 'profile email'
        metaTag.parentNode.insertBefore(scope, id)
        console.log('Scope included!')
      }

      let script = document.getElementsByTagName('script')[0]
      if (!document.getElementById('google_api')) {
        let platform = document.createElement('script')
        platform.src = 'https://apis.google.com/js/platform.js'
        platform.id = 'google_api'
        platform.setAttribute('async', '')
        platform.setAttribute('defer', '')
        script.parentNode.insertBefore(platform, script)
        console.log('Google API platform loaded!')
      }
    } else {
      console.log('Client ID is required!')
    }

    if (this.onsuccess && this.onerror && typeof this.onsuccess === 'function' && typeof this.onerror === 'function') {
      let count = 0
      const checkGAPI = setInterval(() => {
        if (window.gapi) {
          window.gapi.load('auth2', () => {
            const auth2 = window.gapi.auth2.init({ client_id: this.clientId })
            auth2.attachClickHandler(this.$refs['googleBtn'], {},
              success => {
                this.onsuccess(success)
              },
              error => {
                this.onerror(error)
              })
          })
          clearInterval(checkGAPI)
        } else {
          console.log(`Google API undefined. Attempt nº ${count + 1}`)
          count++
        }
      }, 500)
    } else {
      console.log('Success and Error callback is required!')
    }
  }
}
