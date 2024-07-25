import Paperoni from '../../assets/images/paperoni.svg'
import Meat from '../../assets/images/meat.svg'
import Doner from '../../assets/images/doner.svg'
import SalmonRoll from '../../assets/images/salmonroll.svg'
import CupcakeChoco from '../../assets/images/cupcakechoco.svg'
import DoughnutMilk from '../../assets/images/doughnutmilk.svg'
import DoughnutUnicorn from '../../assets/images/doughnutunicorn.svg'
import KathiKebab from '../../assets/images/kathikebab.svg'
import StarFive from '../../assets/images/star-five.svg'
import StarFour from '../../assets/images/star-four.svg'
import StarThree from '../../assets/images/star-three.svg'
import Button from '../Button/Button'



const Trending = () => {
    let foodData =[
        {
            id:1,
            img:Paperoni,
            title:"Pizza Paperoni",
            count:"Pizza",
            bg:"#E6F3F5",
            star:StarFive
        },
        {
            id:2,
            img:Meat,
            title:"Pizza Meat",
            count:"Pizza",
            bg:"#E4F2F4",
            star:StarThree
        },
        {
            id:3,
            img:Doner,
            title:"Doner Kebab",
            count:"Kebab",
            bg:"#EAEEFA",
            star:StarFive
        },
        {
            id:4,
            img:SalmonRoll,
            title:"Salmon Roll",
            count:"Salmon",
            bg:"#F9EEF3",
            star:StarFour
        },
        {
            id:5,
            img:CupcakeChoco,
            title:"Cupcake Choco",
            count:"Cupcake",
            bg:"#F0FEEB",
            star:StarFour
        },
        {
            id:6,
            img:DoughnutMilk,
            title:"Doughnut Milk",
            count:"Doughnut",
            bg:"#F3F7D9",
            star:StarFive
        },
        {
            id:7,
            img:DoughnutUnicorn,
            title:"Doughnut Unicorn",
            count:"Doughnut",
            bg:"#F0FEEB",
            star:StarFour
        },
        {
            id:8,
            img:KathiKebab,
            title:"Kathi Kebab",
            count:"Kebab",
            bg:"#E6F3F5",
            star:StarFour
        },
    ]
  return (
    <section className="trending-section pt-[64px] pb-[59px]">
      <div className="container">
        <h2 className="text-[38px] leading-[50px] font-medium">
          Browser Our Trending
        </h2>
        <h3 className="text-[38px] leading-[50px] font-medium text-[#8BAC3E]">
          Receipt
        </h3>
        <ul className='flex gap-[20px] items-center flex-wrap py-[60px]'>
            {foodData.map((item, index) =>(
                <li style={{backgroundColor:item.bg}} id='trending-box' className="rounded-[17px] w-[287px] text-start py-[33px] pl-[20px] duration-500 ease-in-out" key={index}>
                    <img src={item.img} className='mb-[19px]' alt="Category img"/>
                    <p className='font-medium text-[26px] leading-[50px]'>{item.title}</p>
                    <p className='text-[18px] font-medium leading-[21px] mb-[19px] text-[#8BAC3E]'>{item.count}</p>
                    <img src={item.star} alt="rating" />
                </li>
            ))}
        </ul>
        <Button extraStyle={'m-auto'}>ALL Receipt</Button>
      </div>
    </section>
  );
};

export default Trending;
