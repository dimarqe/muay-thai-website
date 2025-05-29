import PropTypes from "prop-types";
import { Typography, IconButton } from "@material-tailwind/react";

const year = new Date().getFullYear();

export function Footer() {
  return (
    <footer className="relative px-4 pt-8 pb-6">
      
        <hr className="my-6 border-gray-300" />
        <div className="flex flex-wrap items-center justify-center md:justify-between">
          <div className="mx-auto w-full px-4 text-center">
            <Typography
              variant="small"
              className="font-normal text-blue-gray-500"
            >
              <>
                Copyright © {year} Negril Muay Thai by{" "}
                <a
                  href="https://www.linkedin.com/in/dimitri-russell-649a74198"
                  target="_blank"
                  className="text-blue-gray-500 transition-colors hover:text-blue-500"
                >
                  Dimitri Russell
                </a>
                {" "}and{" "}
                <a
                  href="https://www.linkedin.com/in/reinaldo-pino-352350190"
                  target="_blank"
                  className="text-blue-gray-500 transition-colors hover:text-blue-500"
                >
                  Reinaldo Pino
                </a>
                .
              </>
            </Typography>
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
