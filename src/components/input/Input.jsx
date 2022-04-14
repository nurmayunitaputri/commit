
const Input = ({ label, name, type, onChange, onBlur, placeholder, dataTestId }) => {
  return (
    <label htmlFor={name} className="block w-full mb-1">
      <div className="font-bold mb-1">{label}</div>
      <input type={type} name={name} className="rounded-lg p-2 text-sm  border  max-h-11 border-zinc-900 focus:outline-none  w-full"  placeholder={placeholder} onChange={onChange} onBlur={onBlur} data-testid={dataTestId} />
    </label>
  );
};

export default Input;
