import React, { useEffect, useState } from "react";
import Card from "@commons/card";
import axios from "axios";
import toast from "react-hot-toast";

const Articles = () => {
  const [data, setData] = useState<any>(null);

  const articlesData = async () => {
    await axios({
      method: "get",
      url: " https://5eed24da4cbc340016330f0d.mockapi.io/api/articles/",
    })
      .then(function (response) {
        setData(response.data);
      })
      .catch(function (err) {
        console.error(err);
      });
  };

  useEffect(() => {
    articlesData();
  }, []);

  return (
    <div className="mt-9">
      <div className="justify-between px-10 lg:px-20 lg:flex font-openSans">
        <div className="flex w-full gap-1 p-4 mb-4 bg-white rounded-lg shadow-md lg:block mt-14 lg:w-80 text-gray lg:h-80">
          <p className="py-3 text-sm uppercase font-openSans text-gray">
            Todos
          </p>
          <p className="py-3 text-sm uppercase font-openSans text-gray">
            Productos
          </p>
          <p className="py-3 text-sm uppercase font-openSans text-gray">
            Recetas
          </p>
          <p className="py-3 text-sm uppercase font-openSans text-gray">
            Consejos
          </p>
        </div>
        <div>
          <h1 className="flex items-center justify-center text-2xl font-extrabold md:text-5xl font-caveat">
            Nuestros artículos
          </h1>
          <div className="grid items-center justify-center grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3 ">
            {data?.map(
              (item: {
                title: string;
                content: string;
                image: string;
                id: string;
              }) => (
                <Card
                  key={item.id}
                  title={item.title}
                  description={item.content}
                  image={item.image}
                />
              )
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Articles;
