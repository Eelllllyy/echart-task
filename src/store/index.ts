import { defineStore } from "pinia"
import axios from "axios"
export const useApiStore = defineStore("api", {
  state: () => ({
    newWells: [],
    currentYear: null,
    structure: [],
    description: {
      left: "",
      right: "",
    },
    title: "",
    activeBar: 0,
    activePie: 0,
  }),
  actions: {
    async commissNewWells() {
      try {
        const response = await axios.get("data/total/CommissNewWells_BarChart.json")
        this.newWells = response.data
        this.title = "Ввод новых скважин"
        this.currentYear = response.data.at(-1)
      } catch (e) {
        console.error(e)
      }
    },
    async regionalStructure() {
      try {
        const response = await axios.get("data/total/RegionalStructure_PieChart.json")
        this.structure = response.data
      } catch (e) {
        console.error(e)
      }
    },
    async commissNewWellsDescription() {
      try {
        const response = await axios.get("data/total/CommissNewWells_BarChart_description.json")
        this.description.left = response.data.description.left
        this.description.right = response.data.description.right
      } catch (e) {
        console.error(e)
      }
    },
    async wellStockDynamics() {
      try {
        const response = await axios.get("data/fund/WellStockDynamics_BarChart.json")
        this.newWells = response.data
        this.title = "Динамика фонда скважин"
        this.currentYear = response.data.at(-1)
      } catch (e) {
        console.error(e)
      }
    },
    async regionalStructureFund() {
      try {
        const response = await axios.get("data/fund/RegionalStructure_PieChart.json")
        this.structure = response.data
      } catch (e) {
        console.error(e)
      }
    },
    async wellStockDescription() {
      try {
        const response = await axios.get("data/fund/WellStockDynamics_BarChart_description.json")
        this.description.left = response.data.description.left
        this.description.right = response.data.description.right
      } catch (e) {
        console.error(e)
      }
    },
  },
})
