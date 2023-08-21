import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";
import defImg from "./defaultImg.jpg";
import Newscards from "./Newscards";
import CardsSkeleton from "../CardsSkeleton";

const Home = (props) => {
  let [articles, setArticles] = useState([]);

  const getNews = async () => {
    const options = {
      method: "POST",
      url: "https://newsnow.p.rapidapi.com/",
      headers: {
        "content-type": "application/json",
        "X-RapidAPI-Key": props.apiKey,
        "X-RapidAPI-Host": "newsnow.p.rapidapi.com",
      },
      data: {
        text: props.category,
        region: "wt-wt",
      },
    };

    try {
      props.setProgress(30);
      const response = await axios.request(options);
      props.setProgress(50);
      const res = response.data;
      props.setProgress(70);
      setArticles(res.news);
      props.setProgress(100);
    } catch (error) {}
  };

  useEffect(() => {
    getNews();
  }, []);

  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 place-items-center justify-center mt-10 gap-y-10 antialiased">
        {props.loading && <CardsSkeleton cards={9} />}
        {articles.map((news, i) => {
          return (
            <div
              key={news.url}
              className="mx-auto w-[300px] h-[450px] shadow-lg rounded-lg transition-all duration-300 ease-in-out overflow-y-hidden hover:shadow-xl"
            >
              <Newscards
                image={news.image}
                title={news.title}
                date={news.date}
                body={news.body}
                url={news.url}
              />
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Home;
