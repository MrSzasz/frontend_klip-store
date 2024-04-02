import { create } from 'zustand'
import { persist, createJSONStorage } from 'zustand/middleware'

interface CartStore {
  [x: string]: any
  cart: Cart[]
  add: (productToAdd: Product) => void
  changeQuantity: (productID: number, newQuantity: number) => void
  remove: (productID: number) => void
  removeAll: () => void
  loadingState: boolean
  totalCartQuantity: number
}

export const useCartStore = create<CartStore>()(
  persist(
    (set, get) => ({
      cart: [],
      totalCartQuantity: 0,
      add: product => {
        const { cart } = get()
        const productInCart = cart.find(p => p.id === product.id)
        if (productInCart !== undefined) {
          const newCart = cart.map(p => {
            if (p.id === product.id) {
              const newQuantity =
                p.quantity + product.quantity > 10
                  ? 10
                  : p.quantity + product.quantity
              return {
                ...p,
                quantity: newQuantity,
              }
            }
            return p
          })
          set({ cart: newCart })
          return
        }
        const newCart = [...cart, product]
        set({ cart: newCart })
        set({ totalCartQuantity: newCart.length })
      },
      changeQuantity: (productID, newQuantity) => {
        const { cart } = get()
        const newCart = cart.map(p => {
          if (p.id === productID) {
            return {
              ...p,
              quantity: newQuantity,
            }
          }
          return p
        })
        set({ cart: newCart })
      },
      remove: product => {
        set(state => ({ cart: state.cart.filter(p => p.id !== product) }))
        set(state => ({ totalCartQuantity: state.cart.length }))
      },
      removeAll: () => {
        set({ cart: [] })
        set({ totalCartQuantity: 0 })
      },
      loadingState: true,
      setLoadingState: (status: boolean) => {
        set({ loadingState: status })
      },
    }),
    {
      name: 'cart-storage',
      storage: createJSONStorage(() => sessionStorage),
      onRehydrateStorage: () => state => {
        if (state !== undefined) {
          state.setLoadingState(false)
        }
      },
    },
  ),
)
