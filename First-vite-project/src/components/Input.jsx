import { styled } from "styled-components"; 

const Input = ({ contact, icon, placeholder }) => {
  return (
    <div className="relative mb-8">
      <p className="text-old-silver text-sm font-semibold font-montserat mt-5">
        {contact}
      </p>
      <div className="relative">
        <input
          className="border-2 border-old-silver rounded-lg w-full h-[55px] px-3 md:px-12"
          type="text"
          placeholder={placeholder}
        />
        <Icon className={icon}></Icon>
      </div>
    </div>
  );
};

export default Input;

const Icon = styled.i`
  color: #828282;
  position: absolute;
  top: 50%;
  left: 10px;
  transform: translate(-50%, -50%);
`;
