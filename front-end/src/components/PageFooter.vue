<script>
export default {
  name: 'PageFooter'
}
</script>

<template>
  <footer class="footer">
    <span class="copyright">&copy; @2023 TaskAgile.com</span>
    <ul class="footer-links list-inline float-end">
      <li class="list-inline-item">
        <a href="#">{{ $t("pageFooter.about") }}</a>
      </li>
      <li class="list-inline-item">
        <a href="#">{{ $t("pageFooter.termsOfService") }}</a>
      </li>
      <li class="list-inline-item">
        <a href="#">{{ $t("pageFooter.privacyPolicy") }}</a>
      </li>
      <li class="list-inline-item">
        <a href="https://github.com/yeonnex/TaskAgile">GITHUB</a>
      </li>
    </ul>
  </footer>
</template>

<style lang="scss" scoped>
.footer {
  width: 100%;
  font-size: 13px;
  color: #666;
  //line-height: 40px;
  border-top: 1px solid #ddd;
  margin-top: 50px;
  // TODO: 콘텐츠의 길이가 길어 스크롤 함에도 불구하고 계속 화면에 보이는 이슈
  position: fixed;
  bottom: 0;

  .list-inline-item {
    margin-right: 10px;
  }

  a {
    color: #666;
    text-decoration: none;
  }
}
</style>
