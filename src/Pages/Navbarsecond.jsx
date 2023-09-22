import  'react'
import '../Pages/styles/navbarsecond.css'
import logo from '../assets/logo.png'
import norton  from '../assets/norton.png'
import mcAfee  from '../assets/mcafee.png'
const Navbarsecond = () => {
  return (
    <div className='nav__second'>
        <img  className='nav__second-img' src={logo} alt="" />
        <div className='nav__second-vrs'>
        <img className='nav__second-mcAfee' src={mcAfee} alt="" />
        <img className='nav__second-norton' src={norton} alt="" />
        </div>
    </div>
  )
}

export default Navbarsecond