import { useState } from "react";
import "./LikeButton.css";

function LikeButton() {
  const [isLiked, setIsLiked] = useState(false);
  const [likeCount, setLikeCount] = useState(0);
  const [isDisabled, setIsDisabled] = useState(false);
  //default value for the like is false, because it has zero likes initially, and for the likecount is 0.
  function handleClick() {
    //this is used to update the likes from the default value.
    setIsLiked(!isLiked);
    //this is to update the likecount that is; when it is clicked(liked), it should change from false to true then count+1, which translates to if liked is flase, add 1 to the count else, deduct 1.
    if (isLiked) {
      setLikeCount(likeCount - 1);
    } else {
      setLikeCount(likeCount + 1);
    }
    setIsDisabled(true);
    setTimeout(() => {
      setIsDisabled(false);
    }, 1000);
  }
  return (
    <div className="likeButton">
      <button
        onClick={handleClick}
        className={isLiked ? "liked" : "unliked"}
        disabled={isDisabled}
      >
        {isLiked ? "❤️ Liked" : "🤍 Like"}
      </button>
      <p>
        {likeCount} {likeCount === 1 ? "like" : "likes"}
      </p>
      <p>(Click the button to Toggle)</p>
    </div>
  );
}
export default LikeButton;
