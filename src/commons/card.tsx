import React from "react";
import Image from "next/image";

type CardProps = {
  title: string;
  description: string;
  image: string;
};
const Card = ({ title, description, image }: CardProps) => {
  const styles = {
    borderTopLeftRadius: "0.375rem",
    borderTopRightRadius: "0.375rem",
  };
  return (
    <div className="gap-6 mt-4 rounded-md shadow-md w-72">
      <Image src={image} width="288" height="200" alt="cream" style={styles} />
      <div className="p-6">
        <h2 className="mb-2 text-lg font-extrabold text-black cursor-pointer hover:text-yellow ">
          {title}
        </h2>
        <p className="text-black font-openSans">{description}</p>
      </div>
    </div>
  );
};
export default Card;
