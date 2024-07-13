import React from 'react'
import { imgMenArr, imgWomenArr, imgWomenOfferArr, offerImg } from '../body/imgUrl'

function WomenBody() {
  return (
    <div className='col text-center'>
    <img className='col-10 mt-4'
      src='https://img.freepik.com/free-photo/group-women-spending-time-together_23-2148930912.jpg?t=st=1720690973~exp=1720694573~hmac=4dfe9a1ea4286b4712f5df29859504194ee37a67d34a0bb400d0167a84d21cfc&w=1380'
      height={'750px'} alt='banner' />

    <div className='col-12 p-2'>
      {imgWomenArr.map(val => {
        console.log(val)
        return <img src={val.img} className='col-2' alt='shradda' />
      })}
    </div>

    <img className='col-11 mt-4 m-4'
      src='https://assets.myntassets.com/f_webp,w_980,c_limit,fl_progressive,dpr_2.0/assets/images/2022/3/11/85891451-b148-4e95-b9f2-0bf42e82e51a1646993148063-Don_t-Miss-These-Offers.jpg'
      height={'150px'} alt='banner' />

    <div className='col-12 p-2'>
      {imgWomenOfferArr.map(val => {
        console.log(val)
        return <img src={val.img} className='col-2' alt='shradda' />
      })}
    </div>


    <img className='col-11 mt-4 m-4'
      src='https://assets.myntassets.com/f_webp,w_980,c_limit,fl_progressive,dpr_2.0/assets/images/2022/3/11/d153ee75-3464-44f7-9041-4afd29d95a751646993148101-Unbelievable-Deals.jpg'
      height={'200px'} alt='banner' />

    <div className='col-12 p-2'>
      {imgWomenArr.map(val => {
        console.log(val)
        return <img src={val.img} className='col-2' alt='shradda' />
      })}
    </div>
  </div>
  )
}

export default WomenBody