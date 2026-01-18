import React from "react";
import { Link } from "react-router-dom";
import { Avatar, Card, CardContent, Typography, Grid } from "@mui/material";
import Slider from "react-slick";
import ArrowBack from "@mui/icons-material/ArrowBack";
import ArrowForward from "@mui/icons-material/ArrowForward";
import "./Home.css";

// Sample dynamic testimonials data
const testimonials = [
  {
    name: "Jane Doe",
    text: "Ankit Transport Corporation has consistently delivered our products on time and in excellent condition. Their customer service is top-notch!",
    avatar: "https://via.placeholder.com/60",
  },
  {
    name: "John Smith",
    text: "We rely on Ankit Transport for all our shipping needs. Their technology keeps us informed every step of the way.",
    avatar: "https://via.placeholder.com/60",
  },
  {
    name: "Alice Johnson",
    text: "The team at Ankit Transport is professional and reliable. I couldn't ask for a better partner in logistics.",
    avatar: "https://via.placeholder.com/60",
  },
  {
    name: "Bob Brown",
    text: "Ankit Transport always goes the extra mile. Highly recommended for anyone in need of transportation services!",
    avatar: "https://via.placeholder.com/60",
  },
];

const images = [
  require("../images/AdobeStock_865440375_Preview.jpeg"),
  require("../images/AdobeStock_600653050_Preview.jpeg"),
  require("../images/AdobeStock_759871558_Preview.jpeg"),
  require("../images/AdobeStock_470767689_Preview_Editorial_Use_Only.jpeg"),
];

const CustomNextArrow = (props) => (
  <div className="arrow next" onClick={props.onClick}>
    <ArrowForward />
  </div>
);

const CustomPrevArrow = (props) => (
  <div className="arrow prev" onClick={props.onClick}>
    <ArrowBack />
  </div>
);

function Home() {
  const carouselSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    nextArrow: <CustomNextArrow />,
    prevArrow: <CustomPrevArrow />,
  };

  return (
    <div className="home-container">
      <section className="hero">
        <Slider {...carouselSettings}>
          {images.map((image, index) => (
            <div key={index}>
              <img
                src={image}
                alt={`Slide ${index + 1}`}
                style={{ width: "100%", height: "600px", objectFit: "cover" }}
              />
            </div>
          ))}
        </Slider>
      </section>

      {/* Move content section below the carousel */}
      <div className="content">
        <h1>Ankit Transport Corporation</h1>
        <p>Your trusted partner in logistics and transportation services.</p>
        <Link to="/services" className="cta-btn">
          Explore Our Services
        </Link>
      </div>

      <section className="additional-content">
        <h2>About Us</h2>
        <p>
          Ankit Transport Corporation has been a leading provider of logistics
          and transportation services for over a decade. Our mission is to
          deliver exceptional service and ensure the safe transportation of
          goods across the country. We pride ourselves on our commitment to
          customer satisfaction and operational excellence.
        </p>
        <p>
          Our team consists of experienced professionals who are dedicated to
          providing reliable solutions tailored to your needs. We utilize the
          latest technology to optimize our operations, ensuring efficiency and
          transparency throughout the logistics process.
        </p>

        <h2>Our Services</h2>
        <p>
          We offer a wide range of services tailored to meet the diverse needs
          of our clients:
        </p>
        <ul>
          <li>Full Truckload (FTL) Services</li>
          <li>Less Than Truckload (LTL) Services</li>
          <li>Intermodal Transportation</li>
          <li>Expedited Freight Services</li>
          <li>Cross-Docking Services</li>
          <li>Warehousing and Distribution</li>
          <li>Supply Chain Management</li>
          <li>Dedicated Fleet Services</li>
        </ul>

        <h2>Client Testimonials</h2>
        <Grid container spacing={3}>
          {testimonials.map((testimonial, index) => (
            <Grid item xs={12} sm={6} md={6} key={index}>
              <Card
                className="testimonial-card"
                style={{
                  background:
                    "linear-gradient(45deg, #C33764 30%, #1D2671 90%)",
                }}
              >
                <CardContent style={{ textAlign: "center" }}>
                  <Avatar
                    alt={testimonial.name}
                    src={testimonial.avatar}
                    className="testimonial-avatar"
                  />

                  <Typography
                    variant="h6"
                    component="h3"
                    sx={{ color: "#fff" }}
                  >
                    {testimonial.name}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    "{testimonial.text}"
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>

        <h2>Our Clients</h2>
        <p>
          We are proud to serve a wide range of clients, from small businesses
          to large corporations. Our clients include:
        </p>
        <ul>
          <li>Retailers</li>
          <li>Manufacturers</li>
          <li>Wholesalers</li>
          <li>E-commerce platforms</li>
          <li>Government agencies</li>
          <li>Pharmaceutical companies</li>
          <li>Automotive manufacturers</li>
          <li>Food and beverage distributors</li>
        </ul>

        <h2>Frequently Asked Questions (FAQ)</h2>
        <div>
          <h3>1. What areas do you service?</h3>
          <p>
            We provide services across the entire country, including major urban
            centers and rural areas. No destination is too far for us.
          </p>

          <h3>2. How can I track my shipment?</h3>
          <p>
            You can track your shipment in real-time using our online tracking
            system or by contacting our customer service team, who will be happy
            to assist you.
          </p>

          <h3>3. What is your pricing structure?</h3>
          <p>
            We offer competitive pricing with transparent rates. Please contact
            us for a customized quote based on your specific transportation
            needs.
          </p>

          <h3>4. What types of cargo do you transport?</h3>
          <p>
            We transport a wide variety of cargo, including but not limited to:
            electronics, retail goods, perishables, hazardous materials, and
            oversized loads. We have the necessary permits and equipment to
            handle diverse cargo types.
          </p>

          <h3>5. Do you offer insurance for shipments?</h3>
          <p>
            Yes, we offer comprehensive cargo insurance options to give you
            peace of mind while your goods are in transit. Speak with our team
            for more details.
          </p>
        </div>

        <h2>Safety Standards</h2>
        <p>
          Safety is our top priority. We adhere to stringent safety protocols to
          ensure that all shipments are handled in compliance with industry
          regulations. Our vehicles are regularly maintained, and our drivers
          are trained in safe driving practices to protect your cargo. We also
          conduct thorough background checks on all our drivers to ensure the
          highest level of professionalism and safety.
        </p>

        <h2>Contact Us</h2>
        <p>
          For inquiries, quotes, or to learn more about our services, please
          visit our <Link to="/contact">Contact Us</Link>. We look forward to
          serving you! You can also reach us at:
        </p>
      </section>

      {/* Scroll to Top Button */}
      <button className="scroll-to-top" onClick={() => window.scrollTo(0, 0)}>
        ↑
      </button>
    </div>
  );
}

export default Home;
