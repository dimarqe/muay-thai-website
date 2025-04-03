import PropTypes from "prop-types";
import {
  Card,
  CardBody,
  Typography,
  IconButton,
} from "@material-tailwind/react";

export function FeatureCard({ color, icon, title, description, backgroundImage }) {
  return (
    <Card
      className="relative overflow-hidden rounded-lg shadow-lg shadow-gray-500/10"
      style={{ backgroundImage: `url(${backgroundImage})`, backgroundSize: "cover", backgroundPosition: "center" }}
    >
      <div className="absolute inset-0 bg-black/50"></div>
      <CardBody className="relative z-10 px-8 text-center text-white">
        <IconButton
          variant="gradient"
          size="lg"
          color={color}
          className="pointer-events-none mb-6 rounded-full"
        >
          {icon}
        </IconButton>
        <Typography variant="h5" className="mb-2" color="white">
          {title}
        </Typography>
        <Typography className="font-normal text-gray-200">
          {description}
        </Typography>
      </CardBody>
    </Card>
  );
}

FeatureCard.defaultProps = {
  color: "blue",
  backgroundImage: "", // Default to no background image
};

FeatureCard.propTypes = {
  color: PropTypes.oneOf([
    "blue-gray", "gray", "brown", "deep-orange", "orange", "amber", "yellow", "lime", "light-green", "green", "teal", "cyan", "light-blue", "blue", "indigo", "deep-purple", "purple", "pink", "red",
  ]),
  icon: PropTypes.node.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.node.isRequired,
  backgroundImage: PropTypes.string, // New prop for background image
};

FeatureCard.displayName = "/src/widgets/layout/feature-card.jsx";

export default FeatureCard;
