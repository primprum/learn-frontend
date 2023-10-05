import LikeButton from "./LikeButton";

function Thumbnail({ thumbnail, title, description }) {
  return (
    <div className="thumbnail-image">
      <img src={thumbnail} alt="image-1" />
      <a href={thumbnail}>
        <h3>{title}</h3>
      </a>
      <p>{description}</p>
      <LikeButton />
      <br />
    </div>
  );
}

export default Thumbnail;
