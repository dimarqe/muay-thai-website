import {
  ChatBubbleBottomCenterTextIcon,
  UserGroupIcon,
  UserIcon,
} from "@heroicons/react/24/solid";

import coachingImage from "/public/img/one-on-one-background.jpeg";
import kidsImage from "/public/img/kids-background.png";
import groupImage from "/public/img/group-background.png";

export const featuresData = [
  {
    color: "gray",
    title: "One on One Coaching",
    icon: UserIcon,
    backgroundImage: coachingImage,
    description:
      "Personalized training tailored to your skill level and goals. Improve technique, conditioning, and strategy with focused guidance from our expert trainers.",
  },
  {
    color: "gray",
    title: "Kids Classes",
    icon: UserGroupIcon,
    backgroundImage: kidsImage,
    description:
      "Fun and structured classes designed for kids to develop discipline, confidence, and fitness while learning the fundamentals of martial arts",
  },
  {
    color: "gray",
    title: "Group Sessions",
    icon: UserGroupIcon,
    backgroundImage: groupImage,
    description:
      "Train alongside like-minded individuals in a open and high-energy environment. Perfect for all levels.",
  },
];

export default featuresData;
