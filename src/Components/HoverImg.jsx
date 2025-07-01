import { useState } from "react";

const HoverImg = ({ normalImg, hover }) => {
  const [isHover, setIsHover] = useState(false);

  return (
    <div
      onMouseEnter={() => setIsHover(true)}
      onMouseLeave={() => setIsHover(false)}
    >
      <div
        className="bg-cover bg-center aspect-[3/4] duration-300 transition-all"
        style={{
          backgroundImage: isHover ? `url(${hover})` : `url(${normalImg})`,
        }}
      ></div>
    </div>
  );
};

export default HoverImg;
