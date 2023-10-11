type StarRatingProps = {
  rating: number;
  count: number;
};

const StarRating = ({ rating, count }: StarRatingProps) => {
  const normalizedRating = Math.min(Math.max(rating, 1), 5);
  return (
    <div className="flex items-center">
      {[1, 2, 3, 4, 5].map((i) => (
        <span
          key={i}
          className={`text-2xl ${
            i <= normalizedRating ? "text-yellow-500" : "text-gray-300"
          }`}
        >
          ★
        </span>
      ))}

      <span className="ml-2 text-slate-700 text-sm">{`(${count})`}</span>
    </div>
  );
};

export default StarRating;
