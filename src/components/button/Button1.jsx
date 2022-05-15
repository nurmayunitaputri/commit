const Button = ({ 
    type, 
    label, 
}) => { 
    return ( 
    <button 
       type={type} 
       className="w-full py-2 mt-6  bg-[#E2EFFF] text-[#00229B] hover:bg-[#00229B] hover:text-white font-semibold rounded-lg"> 
       {label} 
    </button> 
    ) 
} 
 
export default Button;