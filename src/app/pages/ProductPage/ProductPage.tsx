import { ScentData } from '@components/ScentsList/ScentsList'
import useScents from '@hooks/useScents'

const productTypes = ['Wax Melt', 'Reed Diffuser']
const productDescriptions = new Map<string, string>()

productDescriptions
  .set(
    'Wax Melt',
    'Our premium scented wax melts are handcrafted by us in our Hampshire workshop using premium soy wax and high quality scents.',
  )
  .set(
    'Reed Diffuser',
    'Our premium scented wax melts are handcrafted by us in our Hampshire workshop using premium soy wax and high quality scents.',
  )

const cleanProductName = (productName: string) => {
  let cleaned: string = productName

  productTypes.forEach(productType => {
    cleaned = cleaned.replace(productType, '')
  })

  return cleaned
}

const getProductTypeByName = (productName: string) => {
  return productTypes.find(productType => {
    return productName.includes(productType)
  })
}

const getScentDetailsByName = (productName: string, scents: ScentData[]) => {
  const scentName = cleanProductName(productName).trim()
  const productType = getProductTypeByName(productName)?.trim()
  const scent = scents.find(scent => scent.ScentName === scentName)

  return {
    productType,
    scent,
  }
}

const getCLPInfo = (productType: string, scent?: ScentData) => {
  switch (productType) {
    case 'Wax Melt':
      return scent?.CLPWaxMelt
    case 'Candle':
      return scent?.CLPCandle
    case 'Reed Diffuser':
      return scent?.CLPRoomDiffuser
    case 'Room Spray':
      return scent?.CLPRoomSpray
  }
}

type ProductPageProps = {
  productName: string
}

const ProductPage = ({ productName }: ProductPageProps) => {
  const scents = useScents()

  if (!scents) return null

  const scentDetails: { productType?: string; scent?: ScentData } | undefined = getScentDetailsByName(productName, scents)

  if (!scentDetails.productType) return null

  return (
    <>
      <p>{productDescriptions.get(scentDetails.productType)}</p>
      <h4>Scent Description</h4>
      <p>{scentDetails.scent?.Description}</p>
      <h4>CLP Information</h4>
      <p>{getCLPInfo(scentDetails.productType, scentDetails.scent)}</p>
    </>
  )
}

export default ProductPage
