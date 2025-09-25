import React from "react";

const Card = ({ img, title, price }) => {
  const charLimit = 115;

  // Function to truncate title if it exceeds character limit
  const truncateTitle = (title) => {
    if (title.length <= charLimit) {
      return title;
    } else {
      return title.slice(0, charLimit) + "...";
    }
  };

  // Format price as PHP currency
  const formattedPrice = new Intl.NumberFormat("en-PH", {
    style: "currency",
    currency: "PHP",
    minimumFractionDigits: 2,
  }).format(price);

  return (
    <div className="relative p-2 h-[340px] w-[250px] shadow-sm border border-gray-300">
      <div className="h-[60%] w-full bg-red-400">
        <img src={img} alt="Product Image" />
      </div>
      {/* Product Title */}
      <div className="h-[130px] break-all max-w-full">
        {truncateTitle(title)}
      </div>
      {/* Product Price */}
      <div className="absolute bottom-2">{formattedPrice}</div>
    </div>
  );
};

export default Card;
