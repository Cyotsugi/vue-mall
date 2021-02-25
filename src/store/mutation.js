export default {
  //通过ctx.commit('addCart', {xxx}) 调用addCart方法，合并全局状态的数据
  addCart(state,payload) {
    state.cartCount = payload.count
  }
}