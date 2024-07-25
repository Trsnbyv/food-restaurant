import SiteLogo from '../../assets/images/site-logo.svg'
import HeaderItem from '../HeaderItem/HeaderItem';
import HeaderImg from '../../assets/images/header-img.png'
import HeaderImgChild from '../../assets/images/header-img-child.png'
import Button from '../Button/Button';
const Header = () =>{
    return(
        <header className='site__header'>
        <div className='container'>
          <div className=' flex justify-between pt-[19px] pb-[27px]'>
            <a className='header__logo' href='/'>
              <img src={SiteLogo} width={176} height={41} alt='logo'/> 
            </a>
            <ul className='flex gap-[32px] items-center'>
              <HeaderItem title={'Home'} hot={false}/>
              <HeaderItem title={'About Me'} hot={false}/>
              <HeaderItem title={'Promotions'} hot={true}/>
              <HeaderItem title={'Blogs'} hot={false}/>
              <HeaderItem title={'Contact Us'} hot={false}/>
            </ul>
            <div className='header__btn-wrapper flex gap-[24px] items-center'>
                <a href="/" className='header__btn-link text-[14px] leading-[22px] text-[#333333] font-medium'>Masuk</a>
                <Button title={"Daftar Sekarang"}>Daftar Sekarang</Button>
            </div>
          </div>
          <div className='flex items-center justify-between'>
            <div className='w-[482px]'>
                <h2 className='text-[#8BAC3E] text-[64px] font-medium mb-[32px]'>Good Food Us Good Mood</h2>
                <p className='text-[18px] leading-[29px] text-[#757575] mb-[39px]'>
                    I would think that conserving our natural resources should be a conservative position: Not to waste food, and not to throw away a lot of the food that we buy.
                </p>
                <div className='flex gap-[16px]'>
                    <Button title={"Daftar Sekarang"}>Daftar Sekarang</Button>
                    <button className='py-[10px] px-[18px] rounded-[100px] bg-[#F2F2F2] text-[14px] leading-[22px] text-[#333333] font-medium hover:text-[#8BAC3E] hover:bg-white hover:border-[#8BAC3E] duration-300 border-[3px] border-transparent'>About Us</button>
                </div>
            </div>
            <div className='relative'>
                <img src={HeaderImg} alt="img" width={480} height={530}/>
                <img className='absolute bottom-3 left-[-80px]' src={HeaderImgChild} alt="IMg" width={292}  height={93}/>
            </div>
          </div>
        </div>
      </header>
    )
}

export default Header