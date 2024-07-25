import Mails from '../../assets/images/mail.svg'
import Phone from '../../assets/images/phone.svg'
import Instagram from '../../assets/images/instagram.svg'
import MailYellow from '../../assets/images/mail-yellow.svg'
import PhoneYellow from '../../assets/images/phone-yellow.svg'
import SiteLogo from '../../assets/images/site-logo.svg'
import Button from '../Button/Button';

const Footer = () => {
  return (
    <footer className='pt-[190px] pb-[32px]'>
      <div className="container">
        <div className="flex gap-[110px] bg-[#F9FFF6] pt-[79px] pb-[40px] mb-[48px] px-[70px] rounded-[20px]">
          <div className="w-[335px] ">
            <a href="/">
              <img
                src={SiteLogo}
                alt="logo"
                width={207}
                height={50}
                className="mb-[21px]"
              />
            </a>
            <p className="text-[#757575] text-[14px] leading-[20px] mb-[33px]">
              Jl. Prof. DR. Satrio No.7, RT.3/RW.3, Karet Kuningan, Kecamatan
              Setiabudi, Kota Jakarta Selatan, Daerah Khusus Ibukota Jakarta
              12950
            </p>
            <div className='flex gap-[10px]'>
                <img src={Mails} alt="Mail" className='py-[14px] px-[12px] bg-[#8BAC3E] rounded-[50%]' />
                <img src={Phone} alt="Phone" className='p-[12px] bg-[#8BAC3E] rounded-[50%]' />
                <img src={Instagram} alt="Instagram" className='p-[12px] bg-[#8BAC3E] rounded-[50%]' />
            </div>
          </div>
          <div>
            <strong className='text-[18px] leading-[24px] block mb-[33px]'>Categories</strong>
              <ul className='flex flex-col gap-[19px]'>
                <li><a className='text-[#757575] text-[14px] cursor-pointer' href="/">Cupcake</a></li>
                <li><a className='text-[#757575] text-[14px] cursor-pointer' href="/">Pizza</a></li>
                <li><a className='text-[#757575] text-[14px] cursor-pointer' href="/">Kebab</a></li>
                <li><a className='text-[#757575] text-[14px] cursor-pointer' href="/">Salmon</a></li>
                <li><a className='text-[#757575] text-[14px] cursor-pointer' href="/">Doughnut</a></li>
              </ul>
            </div>
            <div>
            <strong className='text-[18px] leading-[24px] block mb-[33px]'>About Us</strong>
              <ul className='flex flex-col gap-[19px]'>
                <li><a className='text-[#757575] text-[14px] cursor-pointer' href="/">About Us</a></li>
                <li><a className='text-[#757575] text-[14px] cursor-pointer' href="/">FAQ</a></li>
                <li><a className='text-[#757575] text-[14px] cursor-pointer' href="/">Report Problem</a></li>
              </ul>
            </div>
            <div>
               <strong className='text-[18px] leading-[24px] block mb-[33px]'>Newsletter</strong>
                <p className='text-[#757575] text-[14px] leading-[24px] mb-[18px]'>
                   Get now free 50% discount for alll products on your first order
                </p>
                <form>
                  <label className='w-[250px] flex items-center relative mb-[19px]'>
                    <input className='py-[8px] pl-[15px] border-2 border-black placeholder:text-[14px] leading-[24px] placeholder:text-black rounded-l-[8px]' placeholder='Your email address' type="text" />
                    <Button extraStyle={'py-[8.5px] rounded-r-lg rounded-l-none absolute top-0 right-0'}>
                        <p className='font-medium'>SEND</p>
                    </Button>
                  </label>
                </form>
                <label className='flex items-center gap-[5px] mb-[10px]'>
                    <img src={MailYellow} alt="Mail" />
                    <a href="mailto:elemesid@gmail.com">elemesid@gmail.com</a>
                </label>
                <label className='flex items-center gap-[5px]'>
                    <img src={PhoneYellow} alt="Phone" />
                    <a href="tel:08881112222"> 0888 1111 2222</a>
                </label>
            </div>
        </div>
        <p className='text-[12px] text-[#757575] leading-[16px] uppercase text-center tracking-[5%]'>© 2021 Elemes id. All rights reserved</p>
      </div>
    </footer>
  );
};

export default Footer;
