import ReviewCard from "./ReviewCard";

const ReviewList = ({ reviews }) => {
  if (reviews.length === 0) {
    return <p>No reviews yet.</p>;
  }

  return (
    <div>
      <h3>Reviews</h3>

      {reviews.map((review, index) => (
        <ReviewCard key={index} review={review} />
      ))}

      <style>{`
        h3 {
          font-size: 18px;
          font-weight: 500;
          color: #111827;
        }
      `}</style>
    </div>
  );
};

export default ReviewList;