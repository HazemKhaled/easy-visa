interface InputProps {
  type: string;
  id: string;
  name: string;
}

const Input: React.FC<InputProps> = ({ type, id, name }) => {
  return (
    <input
      className=' shadow-md rounded-lg w-[370px] h-[44px] p-4 focus:border-cyan-600 focus:outline-none focus:ring focus:ring-cyan-200 font-inter text-md font-normal leading-6 '
      type={type}
      id={id}
      name={name}
    />
  );
};

export default Input;
