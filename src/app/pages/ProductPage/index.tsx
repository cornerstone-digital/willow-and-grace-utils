import ReactDOM from 'react-dom'
import ScentsPage from './ProductPage'

const renderProduct = (productName: string, elemId: string) => {
  const rootEl = document.getElementById(elemId)

  rootEl && ReactDOM.render(<ScentsPage productName={productName} />, rootEl)
}

;(window as any).renderProduct = renderProduct
