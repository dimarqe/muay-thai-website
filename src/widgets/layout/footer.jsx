import PropTypes from "prop-types";
import { Typography } from "@material-tailwind/react";
import { FaInstagram, FaAirbnb } from "react-icons/fa";
import { HiLocationMarker } from "react-icons/hi";

const year = new Date().getFullYear();

export function Footer() {
  return (
    <footer className="relative px-4 pt-8 pb-6">
      <hr className="my-6 border-gray-300" />
      <div className="flex flex-wrap items-center justify-center md:justify-between">
        <div className="mx-auto w-full px-4 text-center">
          <Typography variant="small" className="font-normal text-blue-gray-500">
            <>
              Copyright © {year} Negril Muay Thai by{" "}
              <a
                href="https://www.linkedin.com/in/dimitri-russell-649a74198"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-gray-500 transition-colors hover:text-blue-500"
              >
                Dimitri Russell
              </a>{" "}
              and{" "}
              <a
                href="https://www.linkedin.com/in/reinaldo-pino-352350190"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-gray-500 transition-colors hover:text-blue-500"
              >
                Reinaldo Pino
              </a>
              .
            </>
          </Typography>

          {/* Location */}
          <div className="mt-6 flex justify-center">
            <a
              href="https://maps.app.goo.gl/Zw1AG2NmvQR4Vt2y7"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-blue-gray-500 hover:text-blue-500 transition-colors"
            >
              <HiLocationMarker className="text-xl" />
              <span>Located on Beaver Avenue, Westcliff Estates, Negril</span>
            </a>
          </div>

          {/* Social Links */}
          <div className="mt-6 flex flex-col items-center gap-2 text-blue-gray-500">
            <a
              href="https://www.instagram.com/negril_muay_thai/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 hover:text-pink-500 transition-colors"
            >
              <FaInstagram className="text-xl" />
              <span>Follow us on Instagram</span>
            </a>
            <a
              href="https://www.airbnb.com/rooms/1182258218618829969"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 hover:text-red-500 transition-colors"
            >
              <FaAirbnb className="text-xl" />
              <span>Book on Airbnb</span>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

Footer.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  socials: PropTypes.arrayOf(PropTypes.object),
  menus: PropTypes.arrayOf(PropTypes.object),
  copyright: PropTypes.node,
};

Footer.displayName = "/src/widgets/layout/footer.jsx";

export default Footer;
