const INPUT_BASE = [
  "outline-none",
  "border-2",
  "border-gray-300",
  "hover:border-blue-300",
  "focus:border-blue-500",
  "w-full",
  "py-2",
  "px-2",
  "text-gray-700",
  "rounded",
];

const Input = (inputProps) => {
  return <input className={INPUT_BASE.join(" ")} {...inputProps} />;
};

export default Input;
