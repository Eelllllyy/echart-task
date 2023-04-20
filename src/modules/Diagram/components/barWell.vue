<template>
  <div class="new-wells" ref="newWellstRef"></div>
</template>
<script setup lang="ts">
import { computed, ref, onMounted, watch } from "vue";
import { useApiStore } from "@/store/index";
import * as echarts from "echarts";
const newWellstRef = ref();
const store = useApiStore();
let chart: any;
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
            return i.dataIndex === store.newWells.length - 1
              ? "#EA3742"
              : "#F3AE4D";
          },
        },
        data: store.newWells,
        selectedMode: "multiple",
        type: "bar",
        select: {
          label: {
            show: true,
            position: "top",
          },
        },
      },
    ],
  };
  return option;
});
watch(chartOptions, () => {
  chart.setOption(chartOptions.value);
});
onMounted(() => {
  chart = echarts.init(newWellstRef.value);
  chart.setOption(chartOptions.value);
  chart.resize({
    width: 730,
  });
});
</script>
<style scoped>
.new-wells {
  width: 980px;
  height: 270px;
}
</style>
