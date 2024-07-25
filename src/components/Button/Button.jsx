
const Button = ({children, extraStyle}) =>{
    return(
        <button className={`rounded-[100px] ${extraStyle} flex items-center gap-[7px] header__btn hover:text-[#8BAC3E] hover:bg-white hover:border-[#8BAC3E] duration-300 border-[3px] border-transparent text-white bg-[#8BAC3E] text-[14px] leading-[22px] font-medium py-[10px] px-[18px] `}>
        {children}
       </button>
    )
}
export default Button