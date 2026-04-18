import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Slider from "react-slick";
import Skeleton from "../UI/Skeleton";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const NewItems = () => {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [timeLeft, setTimeLeft] = useState({});

  const authorNamesByTitle = {
    "Pinky Ocean": "Monica Lucas",
    "Deep Sea Phantasy": "Nicholas Daniels",
    "Rainbow Style": "Monica Lucas",
    "Two Tigers": "Lori Hart",
    "The Truth": "Gayle Hicks",
    "Running Puppets": "Stacy Long",
    "USA Wordmation": "Mamie Barnett",
  };

  useEffect(() => {
    const fetchItems = async () => {
      try {
        const response = await fetch(
          "https://us-central1-nft-cloud-functions.cloudfunctions.net/newItems"
        );
       const data = await response.json();

console.log("first item:", data[0]); // 👈 حتماً این خط

setItems(data);

        setTimeout(() => {
          setLoading(false);
        }, 2000);
      } catch (error) {
        console.error(error);
        setLoading(false);
      }
    };

    fetchItems();
  }, []);

  useEffect(() => {
    if (!items.length) return;

    const updateCountdowns = () => {
      const updatedTimes = {};

      items.forEach((item) => {
        if (!item.expiryDate) {
          updatedTimes[item.id] = "Expired";
          return;
        }

        const endTime = Number(item.expiryDate);
        if (Number.isNaN(endTime)) {
          updatedTimes[item.id] = "Expired";
          return;
        }

        const now = Date.now();
        const diff = endTime - now;

        if (diff <= 0) {
          updatedTimes[item.id] = "Expired";
        } else {
          const totalSeconds = Math.floor(diff / 1000);
          const hours = Math.floor(totalSeconds / 3600);
          const minutes = Math.floor((totalSeconds % 3600) / 60);
          const seconds = totalSeconds % 60;

          updatedTimes[item.id] = `${hours}h ${minutes}m ${seconds}s`;
        }
      });

      setTimeLeft(updatedTimes);
    };

    updateCountdowns();
    const interval = setInterval(updateCountdowns, 1000);

    return () => clearInterval(interval);
  }, [items]);

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    arrows: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: { slidesToShow: 3 },
      },
      {
        breakpoint: 768,
        settings: { slidesToShow: 2 },
      },
      {
        breakpoint: 480,
        settings: { slidesToShow: 1 },
      },
    ],
  };

  if (loading) {
    return (
      <section id="section-items" className="no-bottom">
        <div className="container">
          <div className="col-lg-12">
            <div className="text-center">
              <h2>New Items</h2>
              <div className="small-border bg-color-2"></div>
            </div>
          </div>

          <div className="row">
            {new Array(4).fill(0).map((_, i) => (
              <div className="col-lg-3 col-md-6 col-sm-6 col-xs-12" key={i}>
                <Skeleton />
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="section-items" className="no-bottom">
      <div className="container">
        <div className="col-lg-12">
          <div className="text-center">
            <h2>New Items</h2>
            <div className="small-border bg-color-2"></div>
          </div>
        </div>

        <Slider {...settings}>
          {items.map((item) => (
            <div key={item.id}>
              <div className="nft__item">
                <div className="author_list_pp">
                  <Link
  to="/author"
  state={{
    item,
    authorId: item.authorId
  }}

                    data-bs-toggle="tooltip"
                    data-bs-placement="top"
                    >
                  
                    <img
                      className="lazy"
                      src={item.authorImage}
                      alt={item.title}
                    />
                    <i className="fa fa-check"></i>
                  </Link>
                </div>

                <div className="de_countdown">
                  {timeLeft[item.id] || "Loading..."}
                </div>

                <div className="nft__item_wrap">
                  <div className="nft__item_extra">
                    <div className="nft__item_buttons">
                      <button>Buy Now</button>
                      <div className="nft__item_share">
                        <h4>Share</h4>
                        <a href="" target="_blank" rel="noreferrer">
                          <i className="fa fa-facebook fa-lg"></i>
                        </a>
                        <a href="" target="_blank" rel="noreferrer">
                          <i className="fa fa-twitter fa-lg"></i>
                        </a>
                        <a href="">
                          <i className="fa fa-envelope fa-lg"></i>
                        </a>
                      </div>
                    </div>
                  </div>

                  <Link to="/item-details" state={{ item }}>
                    <img
                      src={item.nftImage}
                      className="lazy nft__item_preview"
                      alt={item.title}
                    />
                  </Link>
                </div>

                <div className="nft__item_info">
                  <Link to="/item-details" state={{ item }}>
                    <h4>{item.title}</h4>
                  </Link>
                  <div className="nft__item_price">{item.price} ETH</div>
                  <div className="nft__item_like">
                    <i className="fa fa-heart"></i>
                    <span>{item.likes}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default NewItems;