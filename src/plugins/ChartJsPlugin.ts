import type { App } from 'vue'
import {
  Chart as ChartJS,
  Title,
  Tooltip,
  Legend,
  BarElement,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  ArcElement
} from 'chart.js'

export default {
  install: (app: App) => {
    ChartJS.register(
      Title,
      Tooltip,
      Legend,
      BarElement,
      CategoryScale,
      LinearScale,
      PointElement,
      LineElement,
      ArcElement
    )

    ChartJS.defaults.backgroundColor = '#c82834'
  }
}
