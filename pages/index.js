
import { CartProvider } from 'react-use-cart'

import Cart from './cart'
import Page from './page'

export default function Home() {
  return (
      <>
        <CartProvider>
         
          <Cart/>
          <Page/>
        </CartProvider>
      </>
  )
}
