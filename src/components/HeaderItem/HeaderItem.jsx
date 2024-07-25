
const HeaderItem = ({title, hot}) =>{
    return(
        <li className= "header__item">
        <a className={`header__link ${hot? "header__link-hot" : "header__link"} hover:text-[#8BAC3E] duration-300 text-[14px] leading-[22px] text-[#757575] font-medium`} href="/">{title}</a>
        </li> 
    )
}
export default HeaderItem