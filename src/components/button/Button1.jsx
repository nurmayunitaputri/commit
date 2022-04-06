const Button = ({ 
    type, 
    label, 
}) => { 
    return ( 
    <button 
       type={type} 
       className="w-full my-5 py-2 bg-[#A8A8A8] hover:bg-[#00229B] text-white font-semibold rounded-lg"> 
       {label} 
    </button> 
    ) 
} 
 
export default Button;