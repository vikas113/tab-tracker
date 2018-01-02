<template>
  <div id="register">
    <input type="email" name="email" placeholder="Enter your Email" v-model="email">
    <br>
    <input type="password" name="password" placeholder="Enter your Password" v-model="password">
    <br><button @click="register">Register</button>
  </div>
</template>

<script>
import authenticationservice from '@/services/authenticationservice'
export default {
  name: 'register',
  data () {
    return {
      email: '',
      password: ''
    }
  },
  methods: {
    async register () {
      const response = await authenticationservice.register({
        email: this.email,
        password: this.password
      })
    }
  }
}
</script>
