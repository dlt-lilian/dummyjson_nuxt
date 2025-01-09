import {createApp} from 'vue'
import {MotionPlugin} from '@vueuse/motion'

import App from 'app.vue'
const app = createApp(App)

app.use(MotionPlugin)
app.mount('#app')