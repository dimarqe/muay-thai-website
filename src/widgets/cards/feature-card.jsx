import PropTypes from "prop-types";
import { useState } from "react";
import {
  Card,
  CardBody,
  Typography,
  IconButton,
} from "@material-tailwind/react";

export function FeatureCard({ color, icon, title, description, backgroundImage }) {
  const [isOpen, setIsOpen] = useState(false);

  const handleCardClick = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <div className="w-full">
      <Card
        onClick={handleCardClick}
        className="relative h-[320px] overflow-hidden rounded-lg shadow-lg shadow-gray-500/10 cursor-pointer transition-all duration-300 ease-out"
        style={{
          backgroundImage: `url(${backgroundImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        {/* Blur/Dark Overlay */}
        <div
          className={`absolute inset-0 transition-all duration-300 ease-out ${
            isOpen ? "bg-black/30" : "bg-black/50"
          }`}
        ></div>

        {/* Content on the image (always visible) */}
        <CardBody className="relative z-10 px-8 py-12 text-center text-white">
          <IconButton
            variant="gradient"
            size="lg"
            color={color}
            className="pointer-events-none mb-6 rounded-full transition-opacity duration-300 ease-out"
          >
            {icon}
          </IconButton>
          <Typography variant="h5" className="mb-2" color="white">
            {title}
          </Typography>
          <Typography className="font-normal text-gray-200 text-sm">
            {description}
          </Typography>
        </CardBody>
      </Card>

      {/* Dropdown Description Box (additional details or repeat of same) */}
      <div
        className={`transition-all duration-500 ease-out overflow-hidden ${
          isOpen ? "mt-4 max-h-[300px] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="rounded-lg bg-white p-6 text-gray-800 shadow-md min-h-[150px] transition-all duration-500 ease-out">
          <Typography variant="h6" className="mb-2">
            Rate
          </Typography>
          <Typography className="text-sm">{description}</Typography>
          <Typography variant="h6" className="mb-2">
            Schedule
          </Typography>
          <Typography className="text-sm">{description}</Typography>
        </div>
      </div>
    </div>
  );
}

FeatureCard.defaultProps = {
  color: "blue",
  backgroundImage: "",
};

FeatureCard.propTypes = {
  color: PropTypes.oneOf([
    "blue-gray", "gray", "brown", "deep-orange", "orange", "amber", "yellow", "lime", "light-green", "green", "teal", "cyan", "light-blue", "blue", "indigo", "deep-purple", "purple", "pink", "red",
  ]),
  icon: PropTypes.node.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.node.isRequired,
  backgroundImage: PropTypes.string,
};

FeatureCard.displayName = "/src/widgets/layout/feature-card.jsx";

export default FeatureCard;
