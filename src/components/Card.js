import React, { useState } from "react";
import { FcLikePlaceholder } from "react-icons/fc";
import { FcLike } from "react-icons/fc";
import {toast} from "react-toastify";

const Card = (props) => {
  const [likeBtn, setLikeBtn] = useState(false)
  const title = props.title;
  const description = props.description;
  const image = props.image;

  function likeHandler(){
    if(likeBtn) {
      setLikeBtn(false)
      toast("unliked button")
      return;
    }
    toast("liked button")
    setLikeBtn(!likeBtn)
  }

  return (
    <div className="card">
      {/* <FcLike /> */}
      <div className="image">
        <img src={image} alt="" />
        {
          likeBtn? (
            <FcLike className="icon" onClick={likeHandler} />
          ) : (
            <FcLikePlaceholder className="icon" onClick={likeHandler} />
          )
        }
        {/* <FcLikePlaceholder className="icon" onClick={likeHandler} /> */}
      </div>
      <div className="details">
        <h2>{title}</h2>
        <p>{description}</p>
      </div>
    </div>
  );
};

export default Card;
