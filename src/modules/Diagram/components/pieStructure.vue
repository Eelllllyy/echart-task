<template>
  <div class="regional-structure" ref="structureRef"></div>
</template>
<script setup lang="ts">
import { computed, ref, onMounted, watch } from "vue";
import { useApiStore } from "@/store/index";
import * as echarts from "echarts";
const structureRef = ref();
const store = useApiStore();
let chart: any;
const colorPalette = ["#951B81", "#EA3742", "#F3AE4D"];
const chartOptions = computed(() => {
  const option = {
    title: {
      text: "Региональная структура",
      left: "0",
      top: "0",
    },

    legend: {
      orient: "vertical",
      left: "left",
      padding: [40, 0],
      itemGap: 17,
      itemWidth: 32,
      itemHeight: 47,
      itemStyle: {
        opacity: 0,
        padding: [20],
        border: 1,
        width: 100,
      },
    },
    series: [
      {
        name: "Access From",
        color: colorPalette,
        type: "pie",
        radius: ["50%", "70%"],
        label: {
          show: false,
          position: "center",
          color: "rgba(255, 255, 255, 0)",
        },
        labelLine: {
          show: false,
        },
        data: store.structure,
      },
    ],
  };
  return option;
});
watch(chartOptions, () => {
  chart.setOption(chartOptions.value);
});
onMounted(() => {
  chart = echarts.init(structureRef.value);
  chart.setOption(chartOptions.value);
});
</script>
<style scoped>
.regional-structure {
  width: 980px;
  height: 270px;
}
</style>
