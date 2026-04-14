import React, { useEffect } from "react";
import EthImage from "../images/ethereum.svg";
import AuthorImage from "../images/author_thumbnail.jpg";
import JimmyImage from "../images/jimmy-wright.jpg";
import NicholasImage from "../images/nicholas-daniels.jpg";
import { Link, useLocation } from "react-router-dom";

const fakeDetailsByTitle = {
  Abstraction: {
    displayId: 942,
    views: 623,
    likes: 68,
    ownerName: "Monica Lucas",
    creatorName: "Jimmy Wright",
    creatorImage: JimmyImage,
    price: "0.29",
    description:
      "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium...",
  },
  Patternlicious: {
    displayId: 942,
    views: 656,
    likes: 68,
    ownerName: "Lori Hart",
    creatorName: "Jimmy Wright",
    creatorImage: JimmyImage,
    price: "0.29",
    description:
      "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium...",
  },
  Skecthify: {
    displayId: 942,
    views: 886,
    likes: 68,
    ownerName: "Gayle Hicks",
    creatorName: "Jimmy Wright",
    creatorImage: JimmyImage,
    price: "0.29",
    description:
      "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium...",
  },
  Cartoonism: {
    displayId: 942,
    views: 468,
    likes: 234,
    ownerName: "Stacy Long",
    creatorName: "Nicholas Daniels",
    creatorImage: NicholasImage,
    price: "0.29",
    description:
      "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium...",
  },
  Virtuland: {
    displayId: 942,
    views: 249,
    likes: 82,
    ownerName: "Mamie Barnett",
    creatorName: "Jimmy Wright",
    creatorImage: JimmyImage,
    price: "0.29",
    description:
      "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium...",
  },
  Papercut: {
    displayId: 942,
    views: 569,
    likes: 72,
    ownerName: "Jimmy Wright",
    creatorName: "Nicholas Daniels",
    creatorImage: NicholasImage,
    price: "0.29",
    description:
      "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium...",
  },
};

const ItemDetails = () => {
  const location = useLocation();
  const item = location.state?.item;

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  if (!item) {
    return (
      <div id="wrapper">
        <div className="container">
          <h2>Item not found</h2>
        </div>
      </div>
    );
  }

  const details = fakeDetailsByTitle[item.title] || {
    displayId: 942,
    views: 500,
    likes: 50,
    ownerName: "Monica Lucas",
    creatorName: "Jimmy Wright",
    creatorImage: JimmyImage,
    price: "0.29",
    description:
      "Sed ut perspiciatis unde omnis iste natus error sit voluptatem...",
  };

  return (
    <div id="wrapper">
      <div className="no-bottom no-top" id="content">
        <section className="mt90 sm-mt-0">
          <div className="container">
            <div className="row">

              {/* 🔥 IMAGE */}
              <div className="col-md-6 text-center">
                <img
                  src={item.nftImage}
                  className="img-fluid img-rounded mb-sm-30 nft-image"
                  alt={item.title}
                />
              </div>

              {/* 🔥 DETAILS */}
              <div className="col-md-6">
                <div className="item_info">

                  <h2>
                    {item.title} #{details.displayId}
                  </h2>

                  {/* 👁 views + ❤️ likes */}
                  <div className="item_info_counts">
                    <div className="item_info_views">
                      <i className="fa fa-eye"></i>
                      {details.views}
                    </div>
                    <div className="item_info_like">
                      <i className="fa fa-heart"></i>
                      {details.likes}
                    </div>
                  </div>

                  <p>{details.description}</p>

                  {/* 👤 OWNER */}
                  <div className="d-flex flex-row">
                    <div className="mr40">
                      <h6>Owner</h6>
                      <div className="item_author">
                        <div className="author_list_pp">
                          <Link to="/author">
                            <img
                              className="lazy"
                              src={item.authorImage}
                              alt={details.ownerName}
                            />
                            <i className="fa fa-check"></i>
                          </Link>
                        </div>
                        <div className="author_list_info">
                          <Link to="/author">{details.ownerName}</Link>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* 👨‍🎨 CREATOR */}
                  <div className="de_tab tab_simple">
                    <div className="de_tab_content">
                      <h6>Creator</h6>
                      <div className="item_author">
                        <div className="author_list_pp">
                          <Link to="/author">
                            <img
                              className="lazy"
                              src={details.creatorImage}
                              alt={details.creatorName}
                            />
                            <i className="fa fa-check"></i>
                          </Link>
                        </div>
                        <div className="author_list_info">
                          <Link to="/author">{details.creatorName}</Link>
                        </div>
                      </div>
                    </div>

                    <div className="spacer-40"></div>

                    {/* 💰 PRICE */}
                    <h6>Price</h6>
                    <div className="nft-item-price">
                      <img src={EthImage} alt="" />
                      <span>{details.price}</span>
                    </div>
                  </div>

                </div>
              </div>

            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default ItemDetails;