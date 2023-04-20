<template>
  <section class="footer-section">
    <div class="footer-content">
      <div>
        <h1>ТЭК России</h1>
        <p class="text-thin">Функционирование и развитие</p>
      </div>
      <div class="subblock-footer">
        <span
          >Дизайн <br />
          и разработка</span
        >
        <div class="line-gray-footer"></div>
        <span
          >ЦДУ <br />
          <b>ТЭК</b></span
        >
      </div>
    </div>
  </section>
</template>
<script setup lang="ts"></script>
<style scoped>
.footer-section {
  width: 100%;
  height: 248px;
  background-color: #ededed;
  display: flex;
  justify-content: center;
}
.footer-content {
  height: 224px;
  width: 1502px;
  display: flex;
  justify-content: space-evenly;
  flex-direction: column;
}
.subblock-footer {
  display: flex;
  text-align: right;
  font-weight: 300;
  color: #808080;
  font-size: small;
}
.line-gray-footer {
  background-color: #707070;
  width: 1px;
  height: 40px;
  margin: 0 10px;
}
.text-thin {
  font-size: small;
  color: #333333;
}

/* adaptive */
@media(max-width:1500px){
  .footer-section{
    background-color: #ffffff;
  }
}
</style>
