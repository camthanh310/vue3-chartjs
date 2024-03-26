import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import ChartJsPlugin from './plugins/ChartJsPlugin'
const app = createApp(App)

app.use(router)
app.use(ChartJsPlugin)

app.mount('#app')
