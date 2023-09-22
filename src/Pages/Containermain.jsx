import  'react'
import '../Pages/styles/containermain.css'
import product  from '../assets/product.png'
const Containermain = () => {
  return (
    <div className='containermain'>
        <img  className='containermain__img'  src={product} alt="" />
        <div></div>
    </div>
  )
}

export default Containermain