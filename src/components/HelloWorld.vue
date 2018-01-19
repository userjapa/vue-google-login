<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <h2>Essential Links</h2>
    <ul>
      <li>
        <a
          href="https://vuejs.org"
          target="_blank"
        >
          Core Docs
        </a>
      </li>
      <li>
        <a
          href="https://forum.vuejs.org"
          target="_blank"
        >
          Forum
        </a>
      </li>
      <li>
        <a
          href="https://chat.vuejs.org"
          target="_blank"
        >
          Community Chat
        </a>
      </li>
      <li>
        <a
          href="https://twitter.com/vuejs"
          target="_blank"
        >
          Twitter
        </a>
      </li>
      <br>
      <li>
        <a
          href="http://vuejs-templates.github.io/webpack/"
          target="_blank"
        >
          Docs for This Template
        </a>
      </li>
    </ul>
    <h2>Ecosystem</h2>
    <ul>
      <li>
        <a
          href="http://router.vuejs.org/"
          target="_blank"
        >
          vue-router
        </a>
      </li>
      <li>
        <a
          href="http://vuex.vuejs.org/"
          target="_blank"
        >
          vuex
        </a>
      </li>
      <li>
        <a
          href="http://vue-loader.vuejs.org/"
          target="_blank"
        >
          vue-loader
        </a>
      </li>
      <li>
        <a
          href="https://github.com/vuejs/awesome-vue"
          target="_blank"
        >
          awesome-vue
        </a>
      </li>
    </ul>
    <GoogleLogin client-id="647307757706-d4m043r2opgsst3jbr36toottl7mkuv4.apps.googleusercontent.com" v-bind:onsuccess="onSignIn" v-bind:onerror="onError"></GoogleLogin>
    <GoogleLogout client-id="647307757706-d4m043r2opgsst3jbr36toottl7mkuv4.apps.googleusercontent.com">Logout</GoogleLogout>
  </div>
</template>

<script>
import GoogleLogin from './google-login/google-login'
import GoogleLogout from './google-logout/google-logout'

export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  methods: {
    onSignIn (googleUser) {
      const profile = googleUser.getBasicProfile()
      this.msg = `Welcome, ${profile.getName()}, to Our Vue.js App`
      console.log(`ID: ${profile.getId()}`)
      console.log(`Name: ${profile.getName()}`)
      console.log(`Image URL: ${profile.getImageUrl()}`)
      console.log(`Email: ${profile.getEmail()}`)
      console.log(`ID Token: ${googleUser.getAuthResponse().id_token}`)
    },
    onError (error) {
      console.log(error)
    }
  },
  components: {
    GoogleLogin,
    GoogleLogout
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
.GoogleLogin {
  padding: 50px;
}
</style>
