import  'react'
import '../Pages/styles/description.css'
import stars from '../assets/Stars.png'

const Description = () => {
  return (
    <div className='description'>
        <div className='description__main'>
            <div className='description__main-air'>Clarifion Air Ionizer </div>
            <div className='description__price-one'>$180</div>
            <div className='description__price-two'>$84</div>
        </div>
        <img src={stars} alt="" />
        <div>
          <div className='descripton_circle'></div>
          <div className='description__stock'>12 left in Stock</div>
        </div>
        <div  className='description__letter'>Simply plug a Clarifion into any standard outlet and replace bulky, expensive air purifiers with a simple.</div>
    </div>
  )
}

export default Description