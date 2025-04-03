import React from "react";
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

export function Home() {
  return (
    <>
      <div className="relative flex h-screen content-center items-center justify-center pt-16 pb-32">
        <div className="absolute top-0 h-full w-full bg-[url('/img/test-background.jpg')] bg-cover bg-center" />
        <div className="absolute top-0 h-full w-full bg-black/60 bg-cover bg-center" />
        <div className="max-w-8xl container relative mx-auto">
          <div className="flex flex-wrap items-center">
            <div className="ml-auto mr-auto w-full px-4 text-center lg:w-8/12">
              <Typography
                variant="h1"
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
      <div style={{ marginBottom: '200px' }}></div>
      <section className="-mt-32 bg-white px-4 pb-20 pt-4">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {featuresData.map(({ color, title, icon, backgroundImage, description }) => (
              <FeatureCard
                key={title}
                color={color}
                title={title}
                backgroundImage={backgroundImage}
                icon={React.createElement(icon, {
                  className: "w-5 h-5 text-white",
                })}
                description={description}
              />
            ))}
          </div>
          <div className="mt-32 flex flex-wrap items-center">
            <div className="mx-auto -mt-8 w-full px-4 md:w-5/12">
              {/* <div className="mb-6 inline-flex h-16 w-16 items-center justify-center rounded-full bg-blue-gray-900 p-2 text-center shadow-lg">
                <FingerPrintIcon className="h-8 w-8 text-white " />
              </div> */}
              <Typography
                variant="h3"
                className="mb-3 font-bold"
                color="blue-gray"
              >
                Who we are and what we do
              </Typography>
              <br></br>
              <Typography className="mb-8 font-normal text-blue-gray-500">
              We’re Julien and Jamillah, founders of Negril Muay Thai. 
In August 2020, during the uncertainty of the pandemic, we left city life in London and moved to Jamaica, seeking a deeper connection with nature and a better environment to raise our two boys. We weren’t sure exactly what we would do, but one thing was clear—our passion for combat sports.
Both of us have trained and competed in boxing and Muay Thai. In the early years of our relationship, we were dedicated members of All Stars Boxing Gym in London. While I (Jamillah) remained in boxing, I went on to train and fight under the guidance of professional boxing trainer Earl Austin. Julien pursued Muay Thai, fighting under Team Tieu and competed in shows such as MTGP, Enfusion, Ringmaster, and several others as a K1 and Muay Thai fighter.Negril is known for its beautiful beaches, but it had no Muay Thai gyms—so we created one.  That’s how Negril Muay Thai was born. We truly believe our journey in the sport has led us here. Our gym has a special energy, opening up to lush greenery and the warm Caribbean breeze.We welcome students of all ages, from 5 to 70, helping them improve their skills and reach their goals.
We love the community we’ve built around Muay Thai, and bringing something new to the island has been both challenging and rewarding.Beyond that, our mission is to grow Muay Thai in Jamaica, start local competitions, and one day see some Jamaican champions rise.
              </Typography>
              {/* <Button variant="filled">read more</Button> */}
            </div>
            <div className="mx-auto mt-24 flex w-full justify-center px-4 md:w-4/12 lg:mt-0">
              <Card className="shadow-lg border shadow-gray-500/10 rounded-lg">
                <CardHeader floated={false} className="relative h-56">
                  {/* <img
                    alt="Card Image"
                    src="/img/teamwork.png"
                    className="h-full w-full"
                  /> */}
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
                {/* <div className="mx-auto mt-24 flex w-full justify-center px-4 md:w-4/12 lg:mt-0">
                  <iframe
                    src="https://www.instagram.com/p/CQkJU_CJ7uf/embed"
                    width="100%"
                    height="480"
                    frameBorder="0"
                    scrolling="no"
                    allowtransparency="true"
                    className="rounded-lg shadow-lg border shadow-gray-500/10"
                  ></iframe>
                </div> */}
              </Card>
            </div>
          </div>
        </div>
      </section>
      <section className="px-4 pt-20 pb-48">
        <div className="container mx-auto">
          <PageTitle section="" heading="Meet your trainers">
            Having been coaches for x years, blah, blah
          </PageTitle>
          <div className="mt-24 grid grid-cols-1 gap-12 gap-x-24 md:grid-cols-2 xl:grid-cols-4">
            {teamData.map(({ img, name, position, socials }) => (
              <TeamCard
                key={name}
                img={img}
                name={name}
                position={position}
                socials={
                  <div className="flex items-center gap-2">
                    {socials.map(({ color, name }) => (
                      <IconButton key={name} color={color} variant="text">
                        <i className={`fa-brands text-xl fa-${name}`} />
                      </IconButton>
                    ))}
                  </div>
                }
              />
            ))}
          </div>
        </div>
      </section>
      <section className="relative bg-white py-24 px-4">
        <div className="container mx-auto">
          <PageTitle section="Co-Working" heading="Build something">
            Put the potentially record low maximum sea ice extent tihs year down
            to low ice. According to the National Oceanic and Atmospheric
            Administration, Ted, Scambos.
          </PageTitle>
          <div className="mx-auto mt-20 mb-48 grid max-w-5xl grid-cols-1 gap-16 md:grid-cols-2 lg:grid-cols-3">
            {contactData.map(({ title, icon, description }) => (
              <Card
                key={title}
                color="transparent"
                shadow={false}
                className="text-center text-blue-gray-900"
              >
                <div className="mx-auto mb-6 grid h-14 w-14 place-items-center rounded-full bg-blue-gray-900 shadow-lg shadow-gray-500/20">
                  {React.createElement(icon, {
                    className: "w-5 h-5 text-white",
                  })}
                </div>
                <Typography variant="h5" color="blue-gray" className="mb-2">
                  {title}
                </Typography>
                <Typography className="font-normal text-blue-gray-500">
                  {description}
                </Typography>
              </Card>
            ))}
          </div>
          <PageTitle section="Contact Us" heading="Want to work with us?">
            Complete this form and we will get back to you in 24 hours.
          </PageTitle>
          <form className="mx-auto w-full mt-12 lg:w-5/12">
            <div className="mb-8 flex gap-8">
              <Input variant="outlined" size="lg" label="Full Name" />
              <Input variant="outlined" size="lg" label="Email Address" />
            </div>
            <Textarea variant="outlined" size="lg" label="Message" rows={8} />
            <Checkbox
              label={
                <Typography
                  variant="small"
                  color="gray"
                  className="flex items-center font-normal"
                >
                  I agree the
                  <a
                    href="#"
                    className="font-medium transition-colors hover:text-gray-900"
                  >
                    &nbsp;Terms and Conditions
                  </a>
                </Typography>
              }
              containerProps={{ className: "-ml-2.5" }}
            />
            <Button variant="gradient" size="lg" className="mt-8" fullWidth>
              Send Message
            </Button>
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
