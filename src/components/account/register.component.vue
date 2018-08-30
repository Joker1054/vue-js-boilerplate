<template>
  <div class="project-c-register">
    <h2 v-text="$t('ACCOUNT.REGISTER')" />
    <span v-text="$t('ACCOUNT.USERNAME')" />
    <input v-model="username" />
    <span v-text="$t('ACCOUNT.EMAIL')" />
    <input v-model="email" />
    <span v-text="$t('ACCOUNT.PASSWORD')" />
    <input v-model="password"
           type="password" />
    <button class="project-btn-base"
            v-text="$t('COMMON.SUBMIT')"
            @click="handleRegister" />
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'
import isEmpty from 'lodash/isEmpty'

export default {
  name: 'register-component',
  data () {
    return {
      username: '',
      email: '',
      password: ''
    }
  },
  computed: {
    ...mapState('account', ['status'])
  },
  methods: {
    ...mapActions('account', ['register']),
    handleRegister () {
      if (!isEmpty(this.username) && !isEmpty(this.password) && !isEmpty(this.email)) {
        this.register({
          name: this.username,
          password: this.password,
          email: this.email
        }).then(() => {
          this.$router.push({ name: 'home' })
        })
      }
    }
  }
}
</script>
