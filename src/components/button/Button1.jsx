const Button = ({ 
    type, 
    label, 
}) => { 
    return ( 
    <button 
       type={type} 
       className="w-full py-2 mt-9  bg-[#A8A8A8] hover:bg-[#00229B] text-white font-semibold rounded-lg"> 
       {label} 
    </button> 
    ) 
} 
 
export default Button;