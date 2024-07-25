import Cupcake from '../../assets/images/cupcake.svg'
import Pizza from '../../assets/images/pizza.svg'
import Kebab from '../../assets/images/kebab.svg'
import Salmon from '../../assets/images/salmon.svg'
import Doughnut from '../../assets/images/doughnut.svg'
import Button from '../Button/Button'
import Arrowleft from '../../assets/images/arrow-left.svg'
import Arrowright from '../../assets/images/arrow-right.svg'


const Category = () => {
    let foodData =[
        {
            id:1,
            img:Cupcake,
            title:"Cupcake",
            count:"22 Items",
            bg:"#F0FEEB"
        },
        {
            id:2,
            img:Pizza,
            title:"Pizza",
            count:"25 Items",
            bg:"#E4F2F4"
        },
        {
            id:3,
            img:Kebab,
            title:"Kebab",
            count:"12 Items",
            bg:"#EAEEFA"
        },
        {
            id:4,
            img:Salmon,
            title:"Salmon",
            count:"22 Items",
            bg:"#F9EEF3"
        },
        {
            id:5,
            img:Doughnut,
            title:"Doughnut",
            count:"11 Items",
            bg:"#F3F7D9"
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
