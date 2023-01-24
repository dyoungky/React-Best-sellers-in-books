import StarRating from "./StarRating";

const Book = (props) => {
  const { img, title, author, number } = props;

  return (
    <article className="book">
      <span className="number">{`#${number + 1}`}</span>
      <img src={img} alt={title} />
      <StarRating></StarRating>
      <h2>{title}</h2>
      <h4>{author}</h4>
    </article>
  );
};

export default Book;
