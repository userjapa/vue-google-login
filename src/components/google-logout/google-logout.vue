<template>
  <div>
    <button @click="logout">Logout</button>
  </div>
</template>

<script>
import props from './props'
import methods from './methods'
import mounted from './mounted'

export default {
  name: 'GoogleLogout',
  props,
  methods,
  mounted
}
</script>

<style>

</style>
