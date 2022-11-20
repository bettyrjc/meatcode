import React, { useEffect, useState } from "react";
import Card from "@commons/card";
import axios from "axios";
import { HiArrowNarrowRight } from "react-icons/hi";

const ListButton = ({ setFilter, filter, name }: any) => {
  const filterBy = name === "Todos" ? "*" : name;
  return (
    <div className="flex items-center justify-between">
      <button
        className={`py-3 text-sm uppercase font-openSans text-gray ${
          (filter === name || (filter === "*" && name === "Todos")) &&
          "text-yellow"
        }`}
        onClick={() => setFilter(filterBy)}
      >
        {name}
      </button>
      {(filter === name || (filter === "*" && name === "Todos")) && (
        <HiArrowNarrowRight className="text-yellow" />
      )}
    </div>
  );
};
const Articles = () => {
  const [data, setData] = useState<any>(null);
  const [filter, setFilter] = useState<any>("*");

  const articlesData = async (params?: string) => {
    await axios({
      method: "get",
      url: `https://5eed24da4cbc340016330f0d.mockapi.io/api/articles/?filter=${params}`,
    })
      .then(function (response) {
        setData(response.data);
      })
      .catch(function (err) {
        console.error(err);
      });
  };

  useEffect(() => {
    articlesData(filter);
  }, [filter]);

  return (
    <div className="mt-9">
      <div className="justify-between px-10 lg:px-20 lg:flex font-openSans">
        <div className="flex w-full gap-1 p-4 mb-4 bg-white rounded-lg shadow-md lg:block mt-14 lg:w-80 text-gray lg:h-80">
          <ListButton name="Todos" filter={filter} setFilter={setFilter} />
          <ListButton name="Productos" filter={filter} setFilter={setFilter} />
          <ListButton name="Recetas" filter={filter} setFilter={setFilter} />
          <ListButton name="Consejos" filter={filter} setFilter={setFilter} />
        </div>
        <div>
          <h2 className="flex items-center justify-center text-2xl font-extrabold md:text-5xl font-caveat">
            Nuestros artículos
          </h2>
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
