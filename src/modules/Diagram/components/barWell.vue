<template>
  <article class="article-bar">
    <div class="new-wells" ref="newWellstRef"></div>
    <div class="bar-description">
      <p>
        Изменение <br />
        к отчетному году
      </p>
      <h1 class="big-number">{{ changeData[1] }} %</h1>
      <h1 class="big-number">{{ changeData[0] }}</h1>
      <span>мдрд куб.</span>
    </div>
  </article>
</template>
<script setup lang="ts">
import { computed, ref, onMounted, watch, Ref } from "vue"
import { useApiStore } from "@/store/index"
import * as echarts from "echarts"
const newWellstRef = ref()
const store = useApiStore()
let chart: any
const chartOptions = computed(() => {
  const option = {
    title: {
      left: "6%",
      text: store.title,
      subtext: "СКВ.",
    },
    xAxis: {
      type: "category",
      axisTick: {
        show: false,
      },
      data: store.newWells.map((item: any) => item.year),
    },
    yAxis: {
      type: "value",
    },
    series: [
      {
        barWidth: 22,
        itemStyle: {
          color: function (i: any) {
            return i.dataIndex === store.newWells.length - 1 ? "#EA3742" : "#F3AE4D"
          },
        },
        label: {
          show: true,
          position: "top",
        },
        data: store.newWells,
        selectedMode: "single",
        type: "bar",
      },
    ],
  }
  return option
})
watch(chartOptions, () => {
  chart.setOption(chartOptions.value)
})
const changeData = computed<any>(() => {
  const num: string = (store.currentYear?.value - store.activeBar).toFixed(1)
  const percent: string = ((store.activeBar * 100) / store.currentYear?.value).toFixed(1)
  if (store.activeBar === store.currentYear?.value) {
    return [0, 0]
  } else if (store.activeBar) {
    return [num, percent]
  }
  return [0, 0]
})
onMounted(() => {
  chart = echarts.init(newWellstRef.value)
  chart.setOption(chartOptions.value)
  chart.resize({
    width: 730,
  })
  chart.on("click", function (params: any) {
    store.activeBar = params.data.value
  })
})
</script>
<style scoped>
.new-wells {
  width: 980px;
  height: 270px;
}
.article-bar {
  position: relative;
}
.bar-description {
  position: absolute;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  top: 0;
  right: 30%;
  height: 80%;
}
.big-number {
  font-size: 30px;
}
/* adaptive */
@media (max-width: 1500px) {
  .bar-description {
    top: 10%;
    right: 0%;
  }
}
@media (max-width: 900px) {
  .bar-description {
    right: -20%;
  }
}
@media (max-width: 500px) {
  .bar-description {
    right: -69%;
    top: -65%;
  }
}
</style>
