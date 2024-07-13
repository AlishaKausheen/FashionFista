import React from 'react'
import { brandImg, imgArr } from './imgUrl'
import { offerImg } from './imgUrl';

function BodyMain() {
  return (
    <div className='col'>
      <img className='col-12 mt-4'
      src = 'https://img.freepik.com/free-vector/flat-design-fashion-template_23-2150382726.jpg?w=1380&t=st=1720683768~exp=1720684368~hmac=5e474a532f77854062cba04ff4c1de1bc6aa8e8df68f156098f70201c39fa950https://img.freepik.com/free-vector/fashion-trends-sale-banner-template_23-2150769839.jpg?w=1380&t=st=1720683083~exp=1720683683~hmac=55c46a15fd738c0f87341badedad4a49f4312f2113d881fd297adf5fce38be3d'
      height={'1000px'} alt='banner' width={'1200px'}/>

      <div className='col-12 p-2'>
        {imgArr.map(val => {
          {/* console.log(val) */}
          return <img src={val.img} className='col-2' alt='shradda' />
        })}
      </div>

      <img className='col-11 mt-4 m-4'
        src='https://img.freepik.com/free-vector/horizontal-sale-banner-template_23-2148897328.jpg?w=1380&t=st=1720683121~exp=1720683721~hmac=a948632035d2d9ecb2158b11d38a2bc2edc9f2f6e86416089a3c98b5c39ce942'
        height={'600px'} alt='banner' width={'800px'}/>

      <div className='col-12 p-2'>
        {offerImg.map(val => {
          {/* console.log(val) */}
          return <img src={val.img} className='col-2' alt='shradda' />
        })}
      </div>


      <img className='col-11 mt-4 m-4'
        src='https://img.freepik.com/free-vector/fashion-sale-with-discounhttps://img.freepik.com/free-vector/flat-design-fashion-collection-twitch-banner_23-2149953844.jpg?w=1380&t=st=1720683607~exp=1720684207~hmac=52e47ed90ec46b536ccbd8cc119dc16528d11a765566cf93e11449ef56b6868ft-template_23-2148936503.jpg?w=1380&t=st=1720683182~exp=1720683782~hmac=0f06a0d493c9d93ed9eb11f76909a5ce5428d1bd3f1b52a71fdc8b019616fc1a'
        height={'700px'} alt='banner' />

      <div className='col-12 p-2'>
        {imgArr.map(val => {
          {/* console.log(val) */}
          return <img src={val.img} className='col-2' alt='shradda' />
        })}
      </div>

      <img className='col-11 mt-4 m-4'
        src='https://img.freepik.com/free-vector/flat-design-dashion-boutique-facebook-cover_23-2149314983.jpg?w=1380&t=st=1720683215~exp=1720683815~hmac=fb24f671096cdbccad612a346546fb0074de0f8740e938dac49febdb07c652bc'
        height={'600px'} alt='banner' />

      <div className='col-12 p-2 mb-3'>
        {brandImg.map(val => {
          {/* console.log(val) */}
          return <img src={val.img} className='col-2' alt='shradda' />
        })}
      </div>

    </div>
  )
}

export default BodyMain