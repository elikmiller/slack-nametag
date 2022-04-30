import useMediaQuery from "../hooks/useMediaQuery";

const CenteredLayout = ({ children }) => {
  const isPrint = useMediaQuery("print");

  if (isPrint) {
    return children;
  }

  return (
    <div className="w-100 flex flex-col justify-center items-center">
      {children}
    </div>
  );
};

export default CenteredLayout;
