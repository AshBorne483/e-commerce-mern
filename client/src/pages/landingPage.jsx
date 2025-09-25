import React, { useEffect } from "react";
import NavBar from "../components/navBar.jsx";
import { FaRobot } from "react-icons/fa";
import Card from "../components/card.jsx";
import MainCard from "../components/mainCard.jsx";

const LandingPage = () => {
  const sampleProducts = [
    {
      img: "vite.svg",
      title: "boAt Airdopes 131",
      price: 3432454.7765,
      id: 1,
    },
    {
      id: 2,
      img: "vite.svg",
      title: "Noise Buds VS102",
      price: 1299.99,
    },
    {
      id: 3,
      img: "vite.svg",
      title: "JBL Go 3 Portable Speaker",
      price: 2999.5,
    },
    {
      id: 4,
      img: "vite.svg",
      title:
        "JBL Go 565 Portable Speakerweqwe1412414rfrafafqeghfrjfwfasjdfbs12312312e141441241412312123124e55qrqrqfdafasdasdasdasdasdasdasdasdsadasasd12312312321321321",
      price: 2999.5,
    },
    {
      id: 5,
      img: "vite.svg",
      title: "JBL Go 565 Portable Speaker",
      price: 2999.5,
    },
    {
      id: 6,
      img: "vite.svg",
      title: "JBL Go 565 Portable Speaker",
      price: 2999.5,
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

  return (
    <div className="relative h-screen">
      <NavBar />
      <div className="px-24 my-2">
        {/* Main Content */}
        <h1>Welcome to the Landing Page</h1>
        <MainCard img={sampleMainCard} />
        {/* Product Grid */}
        <div className="mt-4 grid grid-cols-5 gap-y-3">
          {sampleProducts.map((product) => (
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
