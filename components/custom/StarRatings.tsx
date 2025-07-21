import { GoStar, GoStarFill } from "react-icons/go";

interface StarRatingProps {
  rating: number;
  outOf?: number;
  size?: number;
}

const StarRating = ({ rating, outOf = 5, size = 24 }: StarRatingProps) => {
  const stars = [];

  for (let i = 1; i <= outOf; i++) {
    if (i <= Math.floor(rating)) {
      stars?.push(
        <GoStarFill key={i} size={size} className="text-light-brown" />
      );
    } else if (i - rating < 1 && i - rating > 0) {
      stars.push(<GoStar key={i} size={size} className="text-light-brown" />);
    } else {
      stars.push(<GoStar key={i} size={size} className="text-light-brown" />);
    }
  }

  return <div className="flex items-center gap-1">{stars}</div>;
};

export default StarRating;
