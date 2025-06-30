import {
  ChatBubbleBottomCenterTextIcon,
  UserGroupIcon,
  UserIcon,
} from "@heroicons/react/24/solid";

import coachingImage from "/img/one-on-one-background.jpeg";
import kidsImage from "/img/kids-background.png";
import groupImage from "/img/group-background.png";

export const featuresData = [
  {
    color: "gray",
    title: "One on One Coaching",
    icon: UserIcon,
    backgroundImage: coachingImage,
    description:
      "Personalized training tailored to your skill level and goals. Improve technique, conditioning, and strategy with focused guidance from our expert trainers.",
    rate:"$4000/session, $30,000/10 sessions",
    schedule:"Mon-Fri: 8am - 5pm"
  },
  {
    color: "gray",
    title: "Kids Classes",
    icon: UserGroupIcon,
    backgroundImage: kidsImage,
    description:
      "Fun and structured classes designed for kids to develop discipline, confidence, and fitness while learning the fundamentals of martial arts",
    rate:"$4000/session, $30,000/10 sessions",
    schedule:"Sat: 10:30am - 11:30am"
  },
  {
    color: "gray",
    title: "Group Sessions",
    icon: UserGroupIcon,
    backgroundImage: groupImage,
    description:
      "Train alongside like-minded individuals in a open and high-energy environment. Perfect for all levels.",
    rate:"$4000/session, $30,000/10 sessions",
    schedule:"Sat: 8am - 9:30am/9:30 - 10:30"
  },
];

export default featuresData;
