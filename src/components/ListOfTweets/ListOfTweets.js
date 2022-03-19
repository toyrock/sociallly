import { Tweet } from "../Tweet/Tweet";

export function ListOfTweets({ tweets, setTweets }) {
  return (
    <div>
      {tweets.map((tweet) => {
        return <Tweet key={tweet.id} id={tweet.id} content={tweet.content} setTweets={setTweets} />;
      })}
    </div>
  );
}
