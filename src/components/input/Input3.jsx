import { CheckCircleIcon } from '@heroicons/react/outline';
import { useState } from 'react';

const Input3 = ({ label, name, type, onChange, onBlur, placeholder, dataTestId, isValid }) => {
  return (
    <label htmlFor={name} className="block w-full mb--3">
      <div className="font-normal text-sm mb-1 ">{label}</div>
      <div className="rounded-lg flex justify-between items-center max-h-11 pr-4 border bg-white border-zinc-900 w-full ">
        <input
          type={type}
          name={name}
          className="py-2 focus:ring-0 text-sm border-b text-black focus:outline-none w-full p-4 bg-white rounded-lg"
          placeholder={placeholder}
          onChange={onChange}
          onBlur={onBlur}
          data-testid={dataTestId}
        />
        {isValid && (
          <div className="px-2 ">
            <CheckCircleIcon className="h-4 w-4 text-green-500" />
          </div>
        )}
      </div>
      {/* <input  
      type={passwordShown ? "text" : "password"}   
      name={name}  
      className="py-2 focus:ring-0 focus:outline-none border-b text-black text-sm w-full p-4 rounded-lg"  
      placeholder={placeholder}  
      onChange={onChange}  
      onBlur={onBlur}  
      data-testid={dataTestId}  
      /> */}
    </label>
  );
};

export default Input3;
