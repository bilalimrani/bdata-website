import AboutUs from "pages/AboutUs";
import Home from "pages/Home";
import Contact from "pages/ContactUs";

const routes = [
  {
    name: "Home",
    route: "/",
    component: <Home />,
  },
  {
    name: "About Us",
    route: "/about-us",
    component: <AboutUs />,
  },
  {
    name: "Contact",
    route: "/contact-us",
    component: <Contact />,
  },
  {
    name: "Press",
  },
  {
    name: "Industries",
  },
  {
    name: "Products",
  },
  {
    name: "Resources",
  },
  {
    name: "Case Studies",
  },
];

export default routes;
