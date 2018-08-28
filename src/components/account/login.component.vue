<template>
  <div class="project-c-login">
    <h2 v-text="$t('ACCOUNT.LOGIN')" />
    <span v-text="$t('ACCOUNT.EMAIL')" />
    <input v-model="email" />
    <span v-text="$t('ACCOUNT.PASSWORD')" />
    <input v-model="password"
           type="password" />
    <button class="project-btn-base"
            v-text="$t('COMMON.SUBMIT')"
            @click="handleLogin" />
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'
import { CLIENT_ID } from './../../constants'
import isEmpty from 'lodash/isEmpty'

export default {
  name: 'login-component',
  data () {
    return {
      email: '',
      password: ''
    }
  },
  computed: {
    ...mapState('account', ['status'])
  },
  methods: {
    ...mapActions('account', ['login']),
    handleLogin () {
      if (!isEmpty(this.email) && !isEmpty(this.password)) {
        this.login({
          email: this.email,
          password: this.password,
          clientId: CLIENT_ID
        })
      }
    }
  }
}
</script>
