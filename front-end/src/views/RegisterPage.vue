<script>
import LogoComponent from '@/components/LogoComponent.vue'
import PageFooter from '@/components/PageFooter.vue'

export default {
  name: 'RegisterPage',
  data: function () {
    return {
      form: {
        username: '',
        emailAddress: '',
        password: ''
      },
      errorMessage: ''
    }
  },
  components: {
    LogoComponent,
    PageFooter
  },
  methods: {
    submitForm () {
      // TODO: 데이터 검증 하기
      /** registrationService
       .register(this.form)
       .then(() => {
       this.$router.push({ name: 'LoginPage' })
       })
       .catch((error) => {
       this.errorMessage =
       'Failed to register user. Reason: ' +
       (error.message ? error.message : 'Unknown') +
       '.'
       }) **/
    }
  }
}
</script>

<template>
  <div>
    <div class="container public">
      <div class="row justify-content-center">
        <div class="form">
          <LogoComponent />
          <form @submit.prevent="submitForm">
            <div v-show="errorMessage" class="alert alert-danger failed">
              {{ errorMessage }}
            </div>
            <div class="form-group">
              <label for="username">{{
                $t("registerPage.form.username.label")
              }}</label>
              <input
                id="username"
                v-model="form.username"
                class="form-control"
                type="text"
              />
            </div>
            <div class="form-group">
              <label for="email">{{
                $t("registerPage.form.emailAddress.label")
              }}</label>
              <input
                id="emailAddress"
                v-model="form.emailAddress"
                class="form-control"
                type="email"
              />
            </div>
            <div class="form-group">
              <label for="password">{{
                $t("registerPage.form.password.label")
              }}</label>
              <input
                id="password"
                v-model="form.password"
                class="form-control"
                type="password"
              />
            </div>
            <button class="btn btn-primary w-100" type="submit">
              {{ $t("registerPage.form.submit") }}
            </button>
          </form>
        </div>
      </div>
    </div>
    <PageFooter />
  </div>
</template>

<style lang="scss" scoped></style>
