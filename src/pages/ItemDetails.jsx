import React, { useEffect } from "react";
import EthImage from "../images/ethereum.svg";
import JimmyImage from "../images/jimmy-wright.jpg";
import NicholasImage from "../images/nicholas-daniels.jpg";
import { Link, useLocation } from "react-router-dom";

const creatorImages = {
  "Deep Sea Phantasy": "https://nft-place.web.app/static/media/author-12.2c9959c4700359b29013.jpg",
  "Rainbow Style": "https://i.pravatar.cc/150?img=22",
  "Two Tigers": "https://i.pravatar.cc/150?img=33",
};

const fakeDetailsByTitle = {
  Abstraction: {
    displayId: 432,
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
  "Deep Sea Phantasy": {
    displayId: 432,
    views: 324,
    likes: 99,
    ownerName: "Nicholas Daniels",
    creatorName: "Franklin Greer",
    price: "0.17",
    description:
      "illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.",
  },
  "Rainbow Style": {
  displayId: 321,
  views: 486,
  likes: 52,
  ownerName: "Monica Lucas",
  creatorName: "Jimmy Wright",
  creatorImage: JimmyImage,
  price: "0.34",
  description:
    "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.",
},

"Two Tigers": {
  displayId: 654,
  views: 715,
  likes: 84,
  ownerName: "Lori Hart",
  creatorName: "Nicholas Daniels",
  creatorImage: NicholasImage,
  price: "0.45",
  description:
    "Totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.",
},

"The Truth": {
  displayId: 287,
  views: 391,
  likes: 41,
  ownerName: "Gayle Hicks",
  creatorName: "Jimmy Wright",
  creatorImage: JimmyImage,
  price: "0.22",
  description:
    "Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos.",
},

"Running Puppets": {
  displayId: 845,
  views: 902,
  likes: 113,
  ownerName: "Stacy Long",
  creatorName: "Nicholas Daniels",
  creatorImage: NicholasImage,
  price: "0.58",
  description:
    "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit.",
},

"USA Wordmation": {
  displayId: 519,
  views: 638,
  likes: 76,
  ownerName: "Mamie Barnett",
  creatorName: "Jimmy Wright",
  creatorImage: JimmyImage,
  price: "0.39",
  description:
    "Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur.",
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

  const creatorImage =
  details.creatorImage ||
  creatorImages[item.title] ||
  item.authorImage;

  return (
    <div id="wrapper">
      <div className="no-bottom no-top" id="content">
        <section className="mt90 sm-mt-0">
          <div className="container">
            <div className="row">
              <div className="col-md-6 text-center">
                <img
                  src={item.nftImage}
                  className="img-fluid img-rounded mb-sm-30 nft-image"
                  alt={item.title}
                />
              </div>

              <div className="col-md-6">
                <div className="item_info">
                  <h2>
                    {item.title} #{details.displayId}
                  </h2>

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

                  <div className="de_tab tab_simple">
                    <div className="de_tab_content">
                      <h6>Creator</h6>
                      <div className="item_author">
                        <div className="author_list_pp">
                          <Link to="/author">
                            <img
                              className="lazy"
                              src={creatorImage}
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