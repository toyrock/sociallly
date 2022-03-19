import Avatar from "../../assets/avatar.jpg";
import "./Tweet.css";

export function Tweet({ id, content, setTweets }) {
  // handle tweet deletion
  const handleDelete = () => {
    setTweets((previousTweets) => {
      // return the new array or filtered tweets
      return previousTweets.filter((tweet) => {
        // a tweet is gonna stay in the array if its id is different from the the id of the curretn tweet
        return tweet.id !== id;
      });
    });
  };
  return (
    <div className="tweet">
      <img
        width={32}
        height={32}
        className="tweet__img"
        src={Avatar}
        alt="avatar_image"
      />
      <div className="tweet__input">
        <p>{content}</p>
        <div className="tweet__actions">
          <button>Edit</button>
          <button onClick={handleDelete}>Delete</button>
          <button>Read more</button>
        </div>
      </div>
    </div>
  );
}
