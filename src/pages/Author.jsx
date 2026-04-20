import React, { useEffect, useState } from "react";
import AuthorBanner from "../images/author_banner.jpg";
import { Link, useLocation, useParams } from "react-router-dom";

const Author = () => {
  const { id } = useParams();
  const location = useLocation();

  const authorId = id || location.state?.authorId || null;

  const [authorData, setAuthorData] = useState(null);
  const [nfts, setNfts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchAuthor = async () => {
      try {
        if (!authorId) {
          setLoading(false);
          return;
        }

        setLoading(true);

        const res = await fetch(
          `https://us-central1-nft-cloud-functions.cloudfunctions.net/authors?author=${authorId}`
        );
        const data = await res.json();

        setAuthorData(data);
        setNfts(data?.nftCollection || []);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };

    fetchAuthor();
  }, [authorId]);

  if (loading) {
    return (
      <div id="wrapper">
        <div className="no-bottom no-top" id="content">
          <section
            id="profile_banner"
            className="text-light"
            style={{ background: `url(${AuthorBanner}) top` }}
          ></section>

          <section>
            <div className="container">
              <h3>Loading...</h3>
            </div>
          </section>
        </div>
      </div>
    );
  }

  if (!authorId || !authorData) {
    return (
      <div id="wrapper">
        <div className="no-bottom no-top" id="content">
          <section
            id="profile_banner"
            className="text-light"
            style={{ background: `url(${AuthorBanner}) top` }}
          ></section>

          <section>
            <div className="container">
              <h3>Author not found</h3>
            </div>
          </section>
        </div>
      </div>
    );
  }

  return (
    <div id="wrapper">
      <div className="no-bottom no-top" id="content">
        <section
          id="profile_banner"
          className="text-light"
          style={{ background: `url(${AuthorBanner}) top` }}
        ></section>

        <section>
          <div className="container">
            <div className="row">
              <div className="col-md-12">
                <div className="d_profile de-flex">
                  <div className="de-flex-col">
                    <div className="profile_avatar">
                      <img
                        src={authorData.authorImage}
                        alt={authorData.authorName}
                      />
                      <i className="fa fa-check"></i>

                      <div className="profile_name">
                        <h4>
                          {authorData.authorName}
                          <span className="profile_username">
                            @{authorData.tag}
                          </span>

                          <span className="profile_wallet">
                            {authorData.address}
                          </span>

                          <button>Copy</button>
                        </h4>
                      </div>
                    </div>
                  </div>

                  <div className="profile_follow de-flex">
                    <div className="de-flex-col">
                      <div className="profile_follower">
                        {authorData.followers} followers
                      </div>
                      <Link to="#" className="btn-main">
                        Follow
                      </Link>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-md-12">
                <div className="row">
                  {nfts.map((nft, index) => (
                    <div
                      className="col-lg-3 col-md-6 col-sm-6 col-xs-12"
                      key={index}
                    >
                      <div className="nft__item">
                        <div className="author_list_pp">
                          <Link to={`/author/${authorId}`}>
                            <img
                              className="lazy"
                              src={authorData.authorImage}
                              alt={authorData.authorName}
                            />
                            <i className="fa fa-check"></i>
                          </Link>
                        </div>

                        <div className="nft__item_wrap">
                          <img
                            src={nft.nftImage}
                            className="lazy nft__item_preview"
                            alt={nft.title}
                          />
                        </div>

                        <div className="nft__item_info">
                          <h4>{nft.title}</h4>
                          <div className="nft__item_price">{nft.price} ETH</div>
                          <div className="nft__item_like">
                            <i className="fa fa-heart"></i>
                            <span>{nft.likes}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Author;