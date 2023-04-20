<template>
  <header class="header">
    <div class="header-content">
      <div class="header-title">
        <h1>НЕФТЯННАЯ ПРОМЫШЛЕННОСТЬ</h1>
        <button
          @click="openNavbar = !openNavbar"
          :class="[openNavbar ? 'close-navbar' : 'open-navbar']"
          class="btn"
        ></button>
      </div>
      <div class="header-dowload">
        <div class="icon-dowload"></div>
        <button class="btn-dowload btn">Скачать отчет</button>
      </div>
    </div>
  </header>
  <div v-if="openNavbar">
    <myNavbar />
  </div>
  <main class="main">
    <div class="main-content">
      <section class="section">
        <h2 class="title-page">ВВОД НОВЫХ СКВАЖИН</h2>
        <div class="btn-common-block">
          <button
            class="btn-static"
            @click="totalPage()"
            :class="[currentActiveButton ? 'active' : 'inactive']"
          >
            Всего
          </button>
          <button
            class="btn-static"
            @click="fundPage()"
            :class="[currentActiveButton ? 'inactive' : 'active']"
          >
            Фонд эксплуатации скважин
          </button>
        </div>
        <barWell />
        <div class="description">
          <div class="text-left">{{ store.description.left }}</div>
          <div class="line-gray-vertical"></div>
          <h1>{{ store.description.right }}</h1>
        </div>
        <pieStructure />
      </section>
    </div>
  </main>
  <myFooter />
</template>
<script setup lang="ts">
import { onMounted, ref } from "vue";
import barWell from "@/modules/Diagram/components/barWell.vue";
import pieStructure from "@/modules/Diagram/components/pieStructure.vue";
import myNavbar from "@/modules/Navbar/myNavbar.vue";
import { useApiStore } from "@/store/index";
import myFooter from "@/modules/Footer/myFooter.vue";
const store = useApiStore();
const openNavbar = ref<boolean>(false);
const currentActiveButton = ref<boolean>(false);

const totalPage = () => {
  store.commissNewWells();
  store.commissNewWellsDescription();
  store.regionalStructure();
  currentActiveButton.value = !currentActiveButton.value;
  store.activeBar = 0
  store.activePie = 0
};
const fundPage = () => {
  store.wellStockDynamics();
  store.regionalStructureFund();
  store.wellStockDescription();
  currentActiveButton.value = !currentActiveButton.value;
  store.activeBar = 0
  store.activePie = 0
};
onMounted(() => {
  totalPage();
});
</script>
<style scoped>
.header,
.main {
  width: 100%;
  display: flex;
  justify-content: center;
}
.main {
  margin-top: 161.6px;
}
.header-content {
  width: 1502px;
  padding: 50.8px 0 36.2px;
  display: flex;
  justify-content: space-between;
  align-items: end;
  position: fixed;
  background-color: #fffffffa;
  z-index: 10;
}
.header-title {
  display: flex;
  align-items: end;
}
.header-dowload {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 110px;
  margin-bottom: 2px;
}
.btn-dowload {
  background-color: inherit;
}
.icon-dowload {
  background-image: url("@/modules/Navbar/assets/download.svg");
  width: 16px;
  height: 16px;
}
.main-content {
  width: 1502px;
}
.btn-common-block {
  display: flex;
  justify-content: space-between;
  width: 276px;
  margin-bottom: 20.5px;
}
.btn-static {
  padding: 5px 14px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}
.active {
  background-color: #000000;
  color: white;
}
.inactive {
  background-color: #f3f3f3;
  color: black;
}
.description {
  display: flex;
  justify-content: space-between;
  margin-bottom: 41px;
}
.open-navbar {
  background-image: url("@/modules/Navbar/assets/open-navbar.svg");
  width: 14px;
  height: 14px;
  margin: 0 0 5px 18px;
}
.close-navbar {
  background-image: url("@/modules/Navbar/assets/close-navbar.svg");
  width: 16px;
  height: 16px;
  margin: 0 0 5px 18px;
}
.btn {
  border: none;
  background-color: inherit;
  cursor: pointer;
}
.title-page {
  color: #ea3742;
  margin: 17.6px 0 71.7px;
}
.line-gray-vertical {
  width: 1px;
  height: 138px;
  background-color: #707070;
  margin: 0 62.5px 0 76px;
}
.section {
  width: 1317.5px;
}
.text-left {
  width: 257px;
}

/* adaptive */
@media(max-width:1760px){
  .header-content, .main-content{
    width: 80vw
  }
}
@media(max-width:1500px){
  .main-content{
    width: 90vw
  }
  .header-content{
    width: 85vw
  }
  .section{
    width: 100%;
  }
}
@media(max-width:1000px){
  .header-content{
    flex-wrap: wrap
  }
}
</style>
