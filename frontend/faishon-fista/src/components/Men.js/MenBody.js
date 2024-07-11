import React from 'react'
import { useNavigate } from 'react-router-dom'
import { imgMenArr, offerImg } from '../body/imgUrl'

function MenBody() {
  const navigate = useNavigate();

  return (
    <div className='col text-center'>
      <img className='col-10 mt-4' onClick={() => { navigate('/filtermen') }}
        src='https://img.freepik.com/free-photo/man-traveling-with-city-subway_23-2149491292.jpg?t=st=1720690022~exp=1720693622~hmac=8c91949fb5f38ee79b13fb6d831ab84e690b9dcb334add8079bc3ddc772477bd&w=1380'
        height={'850px'} alt='banner' />

      <img className='col-11 mt-4 m-4'
        src='https://assets.myntassets.com/f_webp,w_980,c_limit,fl_progressive,dpr_2.0/assets/images/2022/3/11/d153ee75-3464-44f7-9041-4afd29d95a751646993148101-Unbelievable-Deals.jpg'
        height={'200px'} alt='banner' />

      <div className='col-12 p-2'>
        {imgMenArr.map((val, index) => {
          return <img key={index} src={val.img}
            onClick={() => { navigate('/filtermen') }}
            className='col-2' alt='shradda' />
        })}
      </div>

      <img className='col-11 mt-4 m-4'
        src=''
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
         height={'200px'} alt='banner' />

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
