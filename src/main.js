import Vue from 'vue'
import md5 from 'js-md5';
import App from './App.vue'
import router from './router'
import store from './store'
import {Button, Form, Field, Toast, Icon, Swipe, SwipeItem, SwipeCell, PullRefresh, List, Tab, Tabs, GoodsAction, GoodsActionIcon, GoodsActionButton, CheckboxGroup, Checkbox, SubmitBar, Stepper, Popup, AddressList, AddressEdit } from 'vant'
import 'lib-flexible/flexible'

Vue.use(Form).use(Field).use(Toast).use(Button).use(Icon)
  .use(Swipe).use(SwipeItem).use(SwipeCell).use(PullRefresh)
  .use(List).use(Tab).use(Tabs).use(GoodsAction).use(GoodsActionButton)
  .use(GoodsActionIcon).use(CheckboxGroup).use(Checkbox)
  .use(SubmitBar).use(Stepper).use(Popup).use(AddressList).use(AddressEdit)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

Vue.prototype.$md5 = md5;
window.vRouter = router
