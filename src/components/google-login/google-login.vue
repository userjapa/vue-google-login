<template>
  <div>
    <button class="g-login" ref="googleBtn">Login</button>
  </div>
</template>

<script>
import props from './props'
import methods from './methods'
import mounted from './mounted'

export default {
  name: 'GoogleLogin',
  props,
  methods,
  mounted
}
</script>

<style>
button::-moz-focus-inner {
  border: 0;
}

.g-login {
  font-family: Arial, Helvetica, sans-serif;
  color: black;
  background: #fff;
  border: .25px solid gray;
  border-radius: 10px;
  padding: 10px;
}

.g-login:hover {
  border: none;
  box-shadow: 0px 0px 1px 1px rgba(0, 78, 196, 0.5);
}

.g-login:active {
  color: gray;
  border: none;
}
</style>
