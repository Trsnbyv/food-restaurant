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
import Arrowleft from '../../assets/images/arrow-left.svg'
import Arrowright from '../../assets/images/arrow-right.svg'


const Category = () => {
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
            bg:"#F0FEEB"
        },
    ]
  return (
    <section className="category-section pt-[64px] pb-[57px]">
      <div className="container">
        <h2 className="text-[38px] leading-[50px] font-medium">
          Browser Our Category
        </h2>
        <h3 className="text-[38px] leading-[50px] font-medium text-[#8BAC3E]">
          Receipt
        </h3>
        <ul className='flex gap-[10px] items-center py-[42px]'>
            {foodData.map((item, index) =>(
                <li style={{backgroundColor:item.bg}} id='category-box' className="rounded-[10px] w-[230px] text-center py-[30px] duration-500" key={index}>
                    <img src={item.img} className='mx-auto mb-[21px]' alt="Category img"/>
                    <p className='font-medium text-[16px] leading-[22px] mb-1'>{item.title}</p>
                    <p className='text-[14px] leading-[16px] mb-1'>{item.count}</p>
                </li>
            ))}
        </ul>
        <div className='flex items-center justify-end gap-[13px]'>
            <Button extraStyle={'py-[8px] pl-[13px]'}> 
            <img src={Arrowleft} alt="arrow" width={33} height={33} />
            <p className='text-[16px] font-medium'>PREV</p>
            </Button>
            <Button extraStyle={'py-[8px] pr-[13px]'}> 
            <p className='text-[16px] font-medium'>NEXT</p>
            <img src={Arrowright} alt="arrow" width={33} height={33} />
            </Button>
        </div>
      </div>
    </section>
  );
};

export default Category;
