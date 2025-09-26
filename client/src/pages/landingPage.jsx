import React, { useEffect, useState } from "react";
import NavBar from "../components/navBar.jsx";
import { FaRobot } from "react-icons/fa";
import Card from "../components/card.jsx";
import MainCard from "../components/mainCard.jsx";
import Button from "../components/button.jsx";

const LandingPage = () => {
  const sampleProducts = [
    {
      img: "vite.svg",
      title: "Electronics boAt Airdopes 131",
      price: 3432454.7765,
      id: 1,
      category: "Electronics",
    },
    {
      id: 2,
      img: "vite.svg",
      title: "Accessories Noise Buds VS102",
      price: 1299.99,
      category: "Accessories",
    },
    {
      id: 3,
      img: "vite.svg",
      title: "Clothes JBL Go 3 Portable Speaker",
      price: 2999.5,
      category: "Clothes",
    },
    {
      id: 4,
      img: "vite.svg",
      title:
        "Footwear JBL Go 565 Portable Speakerweqwe1412414rfrafafqeghfrjfwfasjdfbs12312312e141441241412312123124e55qrqrqfdafasdasdasdasdasdasdasdasdsadasasd12312312321321321",
      price: 2999.5,
      category: "Footwear",
    },
    {
      id: 5,
      img: "vite.svg",
      title: "Electronics JBL Go 565 Portable Speaker",
      price: 2999.5,
      category: "Electronics",
    },
    {
      id: 6,
      img: "vite.svg",
      title: "Accessories JBL Go 565 Portable Speaker",
      price: 2999.5,
      category: "Accessories",
    },
  ];

  const sampleMainCard = [
    {
      url: "vite.svg",
      title: "Image 1",
    },
    {
      url: "coca-cola-fanta-drink.jpg",
      title: "Image 2",
    },
    {
      url: "cola.jpeg",
      title: "Image 3",
    },
  ];

  const CategoryButtons = [
    {
      id: 0,
      label: "All",
    },
    {
      id: 1,
      label: "Electronics",
    },
    {
      id: 2,
      label: "Clothes",
    },
    {
      id: 3,
      label: "Footwear",
    },
    {
      id: 4,
      label: "Accessories",
    },
  ];

  const [filter, setFilter] = useState("All");

  const onClick = () => {
    setFilter(Label);
    console.log("Filter set to:", Label);
  };

  return (
    <div className="relative h-full bg-white">
      <NavBar />
      <div className="px-24 my-2">
        {/* Main Content */}
        <h1>Welcome to the Landing Page</h1>
        <MainCard img={sampleMainCard} />
        {/* Category Buttons */}
        <div className="flex gap-2 mt-2">
          {CategoryButtons.map((category) => (
            <Button
              key={category.id}
              Label={category.label}
              onClick={() => {
                setFilter(category.label);
                console.log("Filter set to:", category.label);
              }}
              isActive={filter === category.label}
            />
          ))}
        </div>
        {/* Product Grid */}
        <div className="mt-4 grid grid-cols-5 gap-y-3">
          {sampleProducts
            .filter(
              (product) => filter === "All" || product.category === filter
            )
            .map((product) => (
              <Card
                key={product.id}
                img={product.img}
                title={product.title}
                price={product.price}
              />
            ))}
        </div>
      </div>
      {/* Chatbot Feature */}
      <div className="fixed bottom-4 right-4 h-[50px] w-[50px] bg-primary rounded-full flex items-center justify-center">
        <FaRobot className="text-white text-3xl" />
      </div>
    </div>
  );
};

export default LandingPage;
