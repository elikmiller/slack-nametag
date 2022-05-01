const ToggleSwitch = ({ labelText, ...inputProps }) => {
  return (
    <label
      htmlFor={inputProps.id}
      className="relative inline-flex items-center cursor-pointer"
    >
      <input {...inputProps} type="checkbox" className="sr-only peer" />
      <div className="w-11 h-6 bg-gray-200 rounded-full peer peer-focus:ring-2 peer-focus:ring-blue-300 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-500"></div>
      <span className="ml-3 text-black">{labelText}</span>
    </label>
  );
};

export default ToggleSwitch;
