<script>
export default {
  name: 'LogoComponent'
}
</script>

<template>
  <div class="logo-wrapper">
    <img class="logo" src="/images/logo.png" alt="오픈 소스 작업 관리 도구">
    <div class="tagline">{{ $t('logo.tagline') }}</div>
  </div>
</template>

<style scoped lang="scss">
.logo-wrapper {
  text-align: center;
  margin-bottom: 40px;
}
.tagline {
  line-height: 180%;
  color: #666;
}
.logo {
  max-width: 150px;
  margin: 0 auto;
}
</style>
