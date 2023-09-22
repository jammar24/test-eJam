import  'react'
import '../Pages/styles/review.css'
import foto from '../assets/foto.png'
import stars from '../assets/Stars.png'
const Review = () => {
  return (
   <>
    <article className='review__continer'>
        <div className='review__min'>
            <img  className='review__img'   src={foto} alt="" />
            <div  className='review__min-one'>
            <img  className='review__stars'   src={stars} alt="" />
            </div>
            <div className='review__veryf'>
              <div className='review__veryf-list'>Ken T.</div>
            </div>
           
              <div className='review__veryf-cos'>Verified Customer</div>
           
       </div> 
          
       
   </article>
    <h2 className='review__lett'>“As soon as the Clarifions arrived I put one in my bedroom. This was late in the afternoon. When I went to the bedroom in the evening it smelled clean. When I went to bed I felt I could breathe better. Wonderful.”</h2>  
  </>
    )
}

export default Review;