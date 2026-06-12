const ReviewCard = ({ review }) => {
  return (
    <>
      <div className="review-card">
        <div className="review-header">
          <span className="rating">
            {review.rating} <span className="star">★</span>
          </span>

          <span className="date">
            {new Date(review.reviewDate).toLocaleDateString()}
          </span>
        </div>

        {review.comment && (
          <p className="comment">
            {review.comment}
          </p>
        )}
      </div>

      <style>{`
        .review-card {
          padding: 12px 0;
          border-bottom: 1px solid #e5e7eb;
          display: flex;
          flex-direction: column;
          gap: 6px;
        }

        .review-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
        }

        .review-card .rating {
          font-size: 14px;
          font-weight: 500;
          color: #111827;
        }

        .star {
          color: #f59e0b;
          margin-left: 2px;
        }

        .date {
          font-size: 12px;
          color: #6b7280;
        }

        .comment {
          text-align: justify;
          margin: 0;
          font-size: 14px;
          color: #374151;
          line-height: 1.5;
        }
      `}</style>
    </>
  );
};

export default ReviewCard;
