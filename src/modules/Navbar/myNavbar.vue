<template>
  <main class="main-nav">
    <div class="main-nav-content">
      <h3 class="title-nav">Основные тенденции и факторы</h3>
      <div class="articles-nav">
        <article
          class="one-article"
          v-for="(item, index) in items"
          :key="index"
        >
          <h3>{{ item.title }}</h3>
          <div class="gray-line"></div>
          <ul v-for="li in item.list">
            <li>
              {{ li.title }}
              <ul v-for="subLi in li.subTitle">
                <li class="sub-li">{{ subLi?.title }}</li>
              </ul>
            </li>
          </ul>
        </article>
      </div>
    </div>
  </main>
</template>
<script setup lang="ts">
import { reactive } from "vue";
const booty = {
  title: "Добыча",
  list: [
    {
      title: "Нефти и газового конденсата",
      subTitle: [
        {
          title: "Всего",
          url: "#",
        },
        {
          title: "ВИНК",
          url: "#",
        },
        {
          title: "Независимые производители",
          url: "#",
        },
        {
          title: "СРП",
          url: "#",
        },
      ],
      url: "#",
    },
    {
      title: "В разрезе регионов страны",
      url: "#",
    },
    {
      title: "На новых месторождениях(гринфилдах)",
      url: "#",
    },
    {
      title: "На шельфе",
      url: "#",
    },
  ],
};
const techIndicators = {
  title: "Технологические показатели",
  list: [
    {
      title: "Капитальные вложения ВИНК в нефтедобычу",
      url: "#",
    },
    {
      title: "Бурение",
      url: "#",
    },
    {
      title: "Ввод новых скважин",
      url: "#",
    },
    {
      title: "Закачка воды для поддержания пластового давления",
      url: "#",
    },
  ],
};
const exports = {
  title: "Экспорт",
  list: [
    {
      title: "Экспорт нефти из России",
      subTitle: [
        {
          title: "Всего",
          url: "#",
        },
        {
          title: "ВИНК",
          url: "#",
        },
        {
          title: "Независимые производители",
          url: "#",
        },
        {
          title: "СРП",
          url: "#",
        },
      ],
      url: "#",
    },
    {
      title: "По направлениям",
      url: "#",
    },
    {
      title: "Основные транспортные коридоры экспорта нефти",
      url: "#",
    },
  ],
};
const development = {
  title: "Развитие",
  list: [
    {
      title: "Магистральные нефтепроводы Российской Федерации",
      url: "#",
    },
    {
      title: "Проекты российских компаний за рубежом",
      url: "#",
    },
  ],
};
const items = reactive<Array<Item>>([
  booty,
  exports,
  techIndicators,
  development,
]);
interface Item {
  title: string;
  list: Array<Li>;
}
interface Li {
  title: string;
  subTitle?: Array<SybLi>;
  url: string;
}
interface SybLi {
  title: string;
  url: string;
}
</script>
<style scoped>
.main-nav {
  width: 100vw;
  height: 100vh;
  margin-top: 121.6px;
  z-index: 10;
  background-color: rgba(173, 173, 173, 0.247);
  position: fixed;
}
.main-nav-content {
  width: 1602px;
  background-color: white;
  margin: 0 auto;
  display: flex;
  align-items: center;
  flex-direction: column;
}
.articles-nav {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  width: 1225px;
}
li {
  list-style: none;
  line-height: 22px;
  cursor: pointer;
}
.title-nav {
  margin-bottom: 30.7px;
  width: 1225px;
}
.gray-line {
  width: 535.5px;
  height: 1px;
  background-color: #707070;
  margin: 5px 0 20px;
}
.one-article {
  margin-bottom: 74px;
}
.sub-li {
  font-size: 13px;
  color: #707070;
  font-weight: 300;
}
/* adaptive */
@media(max-width:1500px){
  .articles-nav{
    flex-direction: column;
  }
  .main-nav{
    background-color: rgba(255, 255, 255, 0);
  }
}
</style>
