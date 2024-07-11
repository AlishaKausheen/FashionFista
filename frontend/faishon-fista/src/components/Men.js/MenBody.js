import React from 'react'
import { useNavigate } from 'react-router-dom'
import { imgMenArr, offerImg } from '../body/imgUrl'

function MenBody() {
  const navigate = useNavigate();

  return (
    <div className='col text-center'>
      <img className='col-10 mt-4' onClick={() => { navigate('/filtermen') }}
        src='https://i.pinimg.com/originals/6f/66/29/6f66290a7db1fb8b61ff90529435d5be.jpg'
        height={'350px'} alt='banner' />

      <img className='col-11 mt-4 m-4'
        src='https://assets.myntassets.com/f_webp,w_980,c_limit,fl_progressive,dpr_2.0/assets/images/2022/3/11/d153ee75-3464-44f7-9041-4afd29d95a751646993148101-Unbelievable-Deals.jpg'
        height={'150px'} alt='banner' />

      <div className='col-12 p-2'>
        {imgMenArr.map((val, index) => {
          return <img key={index} src={val.img}
            onClick={() => { navigate('/filtermen') }}
            className='col-2' alt='shradda' />
        })}
      </div>

      <img className='col-11 mt-4 m-4'
        src='https://assets.myntassets.com/f_webp,w_980,c_limit,fl_progressive,dpr_2.0/assets/images/2022/3/11/85891451-b148-4e95-b9f2-0bf42e82e51a1646993148063-Don_t-Miss-These-Offers.jpg'
        height={'100px'} alt='banner' />

      <div className='col-12 p-2'>
        {offerImg.map((val, index) => {
          console.log(val)
          return <img key={index} src={val.img}
            onClick={() => { navigate('/filtermen') }}
            className='col-2' alt='shradda' />
        })}
      </div>

      <img className='col-11 mt-4 m-4'
        src='https://assets.myntassets.com/f_webp,w_980,c_limit,fl_progressive,dpr_2.0/assets/images/2022/3/11/d153ee75-3464-44f7-9041-4afd29d95a751646993148101-Unbelievable-Deals.jpg'
        height={'150px'} alt='banner' />

      <div className='col-12 p-2'>
        {imgMenArr.map((val, index) => {
          console.log(val)
          return <img key={index} src={val.img}
            onClick={() => { navigate('/filtermen') }}
            className='col-2' alt='shradda' />
        })}
      </div>
    </div>
  )
}

export default MenBody
