<template>
  <div id="app">
    <router-view />
  </div>
</template>

<style lang="scss">
html,
body {
  height: 100%;
  font-size: 14px;
  font-family: "Helvetica Neue", Arial, Helvetica, sans-serif !important;
}

#app,
.page {
  height: 100%;
  position: relative;
}

.page {
  display: flex;
  flex-direction: column;
}

.public.container {
  max-width: 900px;
}

.public {
  .form {
    margin-top: 50px;
    width: 320px;

    .form-group {
      margin-top: 10px;
      margin-bottom: 10px;

      label {
        margin-bottom: 5px;
        font-weight: bold;
        color: #555;
      }

      .error {
        line-height: 1;
        display: none;
        margin-top: 5px;
      }
    }
  }
}

.field-error {
  .error {
    display: block;
    color: #ff0000;
  }
}

input.form-control:focus,
textarea.form-control:focus {
  border: 1px solid #f4c2c2 !important;
}

.modal-open .modal-backdrop.show {
  opacity: 0.7;
}
</style>
