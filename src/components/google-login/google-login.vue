<template>
  <div>
    <button class="google-login" ref="googleBtn">Login</button>
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

</style>
