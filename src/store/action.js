import { getCart } from '../service/cart'

export default {
  async undateCart(ctx) {
    const { data } = await getCart()
    ctx.commit('addCart', {
        count: data.length || 0
    })
  }
}