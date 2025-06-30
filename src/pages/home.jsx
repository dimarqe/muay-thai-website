import React, { useRef, useState } from "react";
import {
  Card,
  CardBody,
  CardHeader,
  Typography,
  Button,
  IconButton,
  Input,
  Textarea,
  Checkbox,
} from "@material-tailwind/react";
import { FingerPrintIcon, UsersIcon } from "@heroicons/react/24/solid";
import { PageTitle, Footer } from "@/widgets/layout";
import { FeatureCard, TeamCard } from "@/widgets/cards";
import { featuresData, teamData, contactData } from "@/data";
import flag from "/img/jamaican-flag.jpg";

// ✅ Import EmailJS
import emailjs from "@emailjs/browser";

export function Home() {
  // ✅ EmailJS form and state refs
  const form = useRef();
  const [messageSent, setMessageSent] = useState(false);

  // ✅ Function to handle sending email
  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm("service_yolcaol", "template_xmccr6i", form.current, "rvtHrEXDV0kz4Y6bx")
      .then(
        () => {
          setMessageSent(true);
          form.current.reset();
        },
        (error) => {
          console.error("Email send error:", error);
          alert("Something went wrong. Please try again.");
        }
      );
  };

  return (
    <>
      {/* HERO SECTION */}
      <div id="home" className="relative flex h-screen content-center items-center justify-center pt-16 pb-32">
        <div className="absolute top-0 h-full w-full object-cover bg-[url('/img/test-background.jpg')] bg-cover bg-center" />
        <img
          src={flag}
          alt="Jamaican Flag"
          className="absolute top-0 left-0 w-full h-full object-cover opacity-25"
        />
        <div className="absolute top-0 h-full w-full bg-black/60 bg-cover bg-center" />
        <div className="max-w-8xl container relative mx-auto">
          <div className="flex flex-wrap items-center">
            <div className="ml-auto mr-auto w-full px-4 text-center lg:w-8/12">
              <Typography
                variant="h2"
                color="white"
                className="mb-6 font-black"
              >
                "Discipline, Resilience, and Heart"
              </Typography>
              <Typography variant="lead" color="white" className="opacity-80">
                More than just a sport, it’s a way of life.
              </Typography>
            </div>
          </div>
        </div>
      </div>

      {/* CLASSES SECTION */}
      <div style={{ marginBottom: '200px' }}></div>
      <section id="classes" className="-mt-32 bg-white px-4 pb-20 pt-4">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {featuresData.map(({ color, title, icon, backgroundImage, description, rate, schedule }) => (
              <FeatureCard
                key={title}
                color={color}
                title={title}
                backgroundImage={backgroundImage}
                icon={React.createElement(icon, {
                  className: "w-5 h-5 text-white",
                })}
                description={description}
                rate={rate}
                schedule={schedule}
              />
            ))}
          </div>

          {/* ABOUT US */}
          <div id="about" />
          <div className="mt-32 flex flex-wrap items-center">
            <div className="mx-auto -mt-8 w-full px-4 md:w-5/12">
              <Typography
                variant="h3"
                className="mb-3 font-bold"
                color="blue-gray"
              >
                Who we are and what we do
              </Typography>
              <br />
              <Typography className="mb-8 font-normal text-blue-gray-500">
                We’re Julien and Jamillah, founders of Negril Muay Thai. We left London in August 2020 during the uncertainties of the pandemic, to seek a better environment in Jamaica for our family. With a shared passion for combat sports—Julien in Muay Thai and Jamillah in boxing—an opportunity presented itself to bring Muay Thai to Negril, a place known for its beaches but lacking a gym for the sport. By drawing on our shared experience training and competing in London, we built a welcoming space that embraces students of all ages. Our mission extends beyond training; the aim is to grow Muay Thai in Jamaica, start local competitions, and one day see Jamaican champions emerge.
              </Typography>
            </div>
            <div className="mx-auto mt-24 flex w-full justify-center px-4 md:w-4/12 lg:mt-0">
              <Card className="shadow-lg border shadow-gray-500/10 rounded-lg">
                <CardHeader floated={false} className="relative h-56">
                  <iframe
                    src="https://www.instagram.com/p/CPmiN2WJr2I/embed"
                    width="100%"
                    height="480"
                    frameBorder="0"
                    scrolling="no"
                    allowtransparency="true"
                    className="rounded-lg shadow-lg border shadow-gray-500/10"
                  ></iframe>
                </CardHeader>
                <CardBody>
                  <Typography className="font-normal text-blue-gray-500">
                    Check out our instagram to see more of us and our students
                  </Typography>
                </CardBody>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* TRAINERS SECTION */}
      <section id="trainers" className="px-4 pt-20 pb-48">
        <div className="container mx-auto">
          <PageTitle section="" heading="Meet your trainers">
            With a combined martial arts experience of over 30 years.
          </PageTitle>
          <div className="mt-24 grid grid-cols-1 gap-12 gap-x-24 md:grid-cols-2 xl:grid-cols-2">
            {teamData.map(({ img, name, position, socials, description }) => (
              <TeamCard
                key={name}
                img={img}
                name={name}
                position={position}
                description={description}
              />
            ))}
          </div>
        </div>
      </section>

      {/* CONTACT SECTION */}
      <section id="contact" className="relative bg-white py-24 px-4">
        <div className="container mx-auto">
          <PageTitle section="" heading="Want to train with us?">
            Contact us at (876) 854-0866 or fill out the form below — we’ll get back to you within 24 hours. A 5–7 day retreat is coming up soon, so register your interest today!
          </PageTitle>

          {/* ✅ Updated form with emailjs */}
          <form ref={form} onSubmit={sendEmail} className="mx-auto w-full mt-12 lg:w-5/12">
            <div className="mb-8 flex gap-8">
              <Input name="user_name" variant="outlined" size="lg" label="Full Name" required />
              <Input name="user_email" variant="outlined" size="lg" label="Email Address" required />
            </div>
            <Textarea name="message" variant="outlined" size="lg" label="Message" rows={8} required />
            <Checkbox
              required
              label={
                <Typography
                  variant="small"
                  color="gray"
                  className="flex items-center font-normal"
                >
                  I agree to the Terms and Conditions
                  <a href="" className="font-medium transition-colors hover:text-gray-900">
                    &nbsp;
                  </a>
                </Typography>
              }
              containerProps={{ className: "-ml-2.5" }}
            />
            <Button type="submit" variant="gradient" size="lg" className="mt-8" fullWidth>
              Send Message
            </Button>
            {messageSent && (
              <Typography color="green" className="mt-4 text-center">
                Thank you! Your message has been sent.
              </Typography>
            )}
          </form>
        </div>
      </section>

      <div className="bg-white">
        <Footer />
      </div>
    </>
  );
}

export default Home;
