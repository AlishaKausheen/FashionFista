import React from 'react'
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import YouTubeIcon from '@mui/icons-material/YouTube';
import InstagramIcon from '@mui/icons-material/Instagram';

function Footer() {
    return (
        <div className='col mt-4 d-flex justify-content-left'>
            <hr />
            <div className='col-2 d-inline-block'>
                <p style={{ textAlign: 'left' }}><b>ONLINE SHOPPING</b></p>
                <p style={{ textAlign: 'left', marginBottom: '-1px' }} className='text-secondary'>Men</p>
                <p style={{ textAlign: 'left', marginBottom: '-1px' }} className='text-secondary'>Women</p>
                <p style={{ textAlign: 'left', marginBottom: '-1px' }} className='text-secondary'>Kids</p>
                <p style={{ textAlign: 'left', marginBottom: '-1px' }} className='text-secondary'>Home & Living</p>
                <p style={{ textAlign: 'left', marginBottom: '-1px' }} className='text-secondary'>Beauty</p>
            </div>

            <div className='col-2 d-inline-block'>
                <p style={{ textAlign: 'left' }}><b>USEFULL LINKS</b></p>
                <p style={{ textAlign: 'left', marginBottom: '-1px' }} className='text-secondary'>Contact Us</p>
                <p style={{ textAlign: 'left', marginBottom: '-1px' }} className='text-secondary'>FAQ</p>
                <p style={{ textAlign: 'left', marginBottom: '-1px' }} className='text-secondary'>T&C</p>
                <p style={{ textAlign: 'left', marginBottom: '-1px' }} className='text-secondary'>Terms of use</p>
                <p style={{ textAlign: 'left', marginBottom: '-1px' }} className='text-secondary'>Track order</p>
                <p style={{ textAlign: 'left', marginBottom: '-1px' }} className='text-secondary'>Shopping</p>
                <p style={{ textAlign: 'left', marginBottom: '-1px' }} className='text-secondary'>Cancelation</p>
                <p style={{ textAlign: 'left', marginBottom: '-1px' }} className='text-secondary'>Return</p>
                <p style={{ textAlign: 'left', marginBottom: '-1px' }} className='text-secondary'>Whitehat</p>
                <p style={{ textAlign: 'left', marginBottom: '-1px' }} className='text-secondary'>Blog</p>
                <p style={{ textAlign: 'left', marginBottom: '-1px' }} className='text-secondary'>Careers</p>
                <p style={{ textAlign: 'left', marginBottom: '-1px' }} className='text-secondary'>Privacy Policy</p>
                <p style={{ textAlign: 'left', marginBottom: '-1px' }} className='text-secondary'>Site Map</p>
            </div>

            <div className='col-4 d-inline-block '>
                <p style={{ textAlign: 'left' }}><b>EXPERIENCE FASHION FISTA ON MOBILE</b></p>

                <a href='#'>
                    <img className='col-6'
                        src='https://constant.myntassets.com/web/assets/img/80cc455a-92d2-4b5c-a038-7da0d92af33f1539674178924-google_play.png' alt='Google play' />
                </a>

                <a href='#'>
                    <img className='col-6'
                        src='https://constant.myntassets.com/web/assets/img/bc5e11ad-0250-420a-ac71-115a57ca35d51539674178941-apple_store.png' alt='Google play' />
                </a>

                <p style={{ textAlign: 'left', marginTop: '10px' }}><b>KEEP IN TOUCH</b></p>
                <div style={{ textAlign: 'left' }}>
                    <a href='#'>
                        <FacebookIcon style={{ fontSize: '35px', marginRight: '10px' }} className='text-secondary' />
                    </a>
                    <a href='#'>
                        <TwitterIcon style={{ fontSize: '35px', marginRight: '10px' }} className='text-secondary' />
                    </a>
                    <a href='#'>
                        <YouTubeIcon style={{ fontSize: '35px', marginRight: '10px' }} className='text-secondary' />
                    </a>
                    <a href='#'>
                        <InstagramIcon style={{ fontSize: '35px', marginRight: '10px' }} className='text-secondary' />
                    </a>
                </div>
            </div>

            <div className='col-4 d-inline-block text-left'>
                <p className='d-inline-block col-7' style={{ textAlign: 'left', fontSize: '20px' }}>
                <b>100% ORIGINAL</b> guarantee for all products at myntra.com</p><br/>
                <p className='d-inline-block col-7' style={{ textAlign: 'left', fontSize: '20px' }}><b>Return within 30days</b> of receiving your order</p>
            </div>
            <hr />
        </div>
    )
}

export default Footer