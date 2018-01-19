<template>
  <div>
    <button class="g-logout" @click="onlogout">Logout</button>
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
button::-moz-focus-inner {
  border: 0;
}

.g-logout {
  font-family: Arial, Helvetica, sans-serif;
  color: black;
  background: #fff;
  border: .25px solid gray;
  border-radius: 10px;
  padding: 10px;
}

.g-logout:hover {
  border: none;
  box-shadow: 0px 0px 1px 1px rgba(0, 78, 196, 0.5);
}

.g-logout:active {
  color: gray;
  border: none;
}

</style>
