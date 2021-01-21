import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import VueI18n from 'vue-i18n'
import 'element-ui/lib/theme-chalk/index.css';
import 'element-ui/lib/theme-chalk/display.css';
// @ts-ignore
import ElementLocale from 'element-ui/lib/locale';
// @ts-ignore
import enLocale from 'element-ui/lib/locale/lang/en';
// @ts-ignore
import zhLocale from 'element-ui/lib/locale/lang/zh-CN';
import { Button, Row, Col, Tooltip, Container, Header, Aside, Main, Footer, Card, Tag, Loading } from 'element-ui';
Vue.use(Button)
   .use(VueI18n)
   .use(Row)
   .use(Col)
   .use(Tooltip)
   .use(Container)
   .use(Header)
   .use(Aside)
   .use(Main)
   .use(Footer)
   .use(Card)
   .use(Tag)
   .use(Loading)

const messages = {
  en: {
    message: 'hello',
    ...enLocale // 或者用 Object.assign({ message: 'hello' }, enLocale)
  },
  zh: {
    message: '你好',
    ...zhLocale // 或者用 Object.assign({ message: '你好' }, zhLocale)
  }
}
// Create VueI18n instance with options
const i18n = new VueI18n({
  locale: 'zh_cn', // set locale
  messages, // set locale messages
})

ElementLocale.i18n((key: any, value: any) => i18n.t(key, value))
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
