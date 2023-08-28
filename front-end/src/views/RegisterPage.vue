<script>

export default {
  name: 'RegisterPage',
  data: function () {
    return {
      form: {
        username: '',
        emailAddress: '',
        password: ''
      }
    }
  },
  methods: {
    submitForm () {

    }
  }
}
</script>

<template>
  <div class="container">
    <div class="row justify-content-center">
      <div class="register-form">
        <div class="logo-wrapper">...</div>
        <form @submit.prevent="submitForm">
          <div class="form-group">
            <input id="username" v-model="form.username" class="form-control" type="text">
          </div>
          <div class="form-group">
            <input id="emailAddress" v-model="form.emailAddress" class="form-control" type="email">
          </div>
          <div class="form-group">
            <input id="password" v-model="form.password" class="form-control" type="password">
          </div>
          <button class="btn btn-primary" type="submit"></button>
        </form>
      </div>
    </div>

    <footer class="footer">
      <span>...</span>
      <ul class="list-inline justify-content-end"></ul>
    </footer>
  </div>
</template>

<style lang="scss" scoped>
.container {
  max-width: 900px;
}

.register-form {
  margin-top: 50px;
  max-width: 320px;
}

.logo-wrapper {
  margin-bottom: 40px;
}

.footer {
  width: 100%;
  line-height: 40px;
  margin-top: 50px;
}
</style>
