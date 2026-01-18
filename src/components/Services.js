import React from "react";
import { Link } from "react-router-dom";
import { Grid, Card, CardContent, CardMedia, Typography, Container, Button } from "@mui/material";
import { motion } from "framer-motion";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import "./Services.css";

export const servicesData = [
  {
    id: "local-transport",
    title: "Local Transport",
    description: "Efficient and fast transportation within the city limits. Same-day delivery options available.",
    fullDescription: "Efficient and fast transportation within the city limits. Our local transport services are designed to meet the demands of businesses and individuals alike.",
    features: [
      "Same-day delivery options available to ensure prompt service.",
      "Fleet of vehicles suited for all types of cargo, from small packages to large shipments.",
      "Real-time tracking for peace of mind and enhanced transparency.",
      "Flexible scheduling, including weekends and holidays, to accommodate your needs.",
    ],
    image: require("../images/AdobeStock_600653050_Preview.jpeg"),
  },
  {
    id: "long-distance-transport",
    title: "Long Distance Transport",
    description: "Reliable long-distance logistics across the nation with dedicated routes.",
    fullDescription: "Reliable long-distance logistics across the nation. We understand the importance of timely deliveries, no matter the distance.",
    features: [
      "Dedicated routes ensuring timely delivery, even during peak seasons.",
      "Full-service logistics management, including planning, execution, and monitoring.",
      "Special rates for bulk shipments to maximize your savings.",
      "Comprehensive tracking system providing updates at every stage of the journey.",
    ],
    image: require("../images/AdobeStock_865440375_Preview.jpeg"),
  },
  {
    id: "goods-handling",
    title: "Goods Handling",
    description: "Specialized handling for fragile and high-value goods with expert professionals.",
    fullDescription: "Specialized handling for fragile and high-value goods. Our trained professionals prioritize the safety and security of your items.",
    features: [
      "Expert staff trained in safe handling procedures for delicate items.",
      "Insurance options available to protect your valuable shipments.",
      "Custom packaging solutions to ensure safety during transport.",
      "Temperature-controlled transportation for perishable and sensitive goods.",
    ],
    image: require("../images/AdobeStock_759871558_Preview.jpeg"),
  },
  {
    id: "custom-solutions",
    title: "Custom Solutions",
    description: "Customized transport services tailored to your specific business needs.",
    fullDescription: "Customized transport services tailored to your needs. We work closely with you to develop the best logistics strategy for your business.",
    features: [
      "Consultation to design your logistics plan based on specific requirements.",
      "Flexible scheduling to meet your timeline, whether it's urgent or long-term.",
      "Scalable solutions that can grow with your business as demand changes.",
      "Collaboration with other service providers to create an integrated logistics solution.",
    ],
    image: require("../images/AdobeStock_470767689_Preview_Editorial_Use_Only.jpeg"),
  },
  {
    id: "express-shipping",
    title: "Express Shipping",
    description: "Fast shipping options for urgent deliveries with guaranteed next-day delivery.",
    fullDescription: "Fast shipping options for urgent deliveries. Our express shipping service ensures that your time-sensitive shipments arrive on schedule.",
    features: [
      "Guaranteed next-day delivery for urgent packages.",
      "Priority handling for time-sensitive shipments, minimizing delays.",
      "24/7 customer support to assist with urgent requests and updates.",
      "Detailed delivery notifications to keep you informed.",
    ],
    image: require("../images/AdobeStock_600653050_Preview.jpeg"),
  },
  {
    id: "warehousing-solutions",
    title: "Warehousing Solutions",
    description: "Secure storage facilities with temperature-controlled options and inventory management.",
    fullDescription: "Secure storage facilities for your goods. Our warehousing solutions provide a safe and efficient way to manage your inventory.",
    features: [
      "Temperature-controlled storage available for sensitive items.",
      "Inventory management services to keep track of your stock effortlessly.",
      "Flexible leasing options tailored to your storage needs, whether short or long-term.",
      "Regular inventory audits to ensure accuracy and transparency.",
    ],
    image: require("../images/AdobeStock_865440375_Preview.jpeg"),
  },
  {
    id: "international-shipping",
    title: "International Shipping",
    description: "Comprehensive global shipping solutions with customs clearance and documentation.",
    fullDescription: "Comprehensive international shipping solutions for businesses expanding their reach. We handle customs clearance and documentation for seamless global transport.",
    features: [
      "Expert guidance on customs regulations and documentation requirements.",
      "Competitive rates for international shipments across various modes of transport.",
      "Real-time tracking and updates on your shipment status.",
      "Partnerships with trusted global carriers to ensure reliable delivery.",
    ],
    image: require("../images/AdobeStock_759871558_Preview.jpeg"),
  },
  {
    id: "project-logistics",
    title: "Project Logistics",
    description: "Specialized logistics for large-scale projects including construction and events.",
    fullDescription: "Specialized logistics for large-scale projects, including construction, events, and exhibitions. We manage every aspect of your logistics needs.",
    features: [
      "Comprehensive planning and coordination for complex logistics challenges.",
      "Expertise in handling oversized and heavy equipment transportation.",
      "Collaboration with project managers to ensure seamless integration.",
      "Post-project evaluations to improve future logistics strategies.",
    ],
    image: require("../images/AdobeStock_470767689_Preview_Editorial_Use_Only.jpeg"),
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

function Services() {
  return (
    <Container className="services-section">
      <Typography variant="h3" align="center" gutterBottom>
        Our Services
      </Typography>
      <Typography variant="subtitle1" align="center" paragraph>
        Explore our comprehensive range of transport and logistics services tailored to meet your business needs.
      </Typography>
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <Grid container spacing={4}>
          {servicesData.map((service) => (
            <Grid item key={service.id} xs={12} sm={6} md={4}>
              <motion.div variants={itemVariants}>
                <Link to={`/services/${service.id}`} style={{ textDecoration: "none" }}>
                  <Card
                    sx={{
                      height: "100%",
                      display: "flex",
                      flexDirection: "column",
                      cursor: "pointer",
                      transition: "all 0.3s ease",
                      "&:hover": {
                        transform: "translateY(-10px)",
                        boxShadow: "0 12px 30px rgba(0, 0, 0, 0.2)",
                      },
                    }}
                  >
                    <CardMedia
                      component="img"
                      height="200"
                      image={service.image}
                      alt={service.title}
                    />
                    <CardContent sx={{ flexGrow: 1, display: "flex", flexDirection: "column" }}>
                      <Typography variant="h6" gutterBottom>
                        {service.title}
                      </Typography>
                      <Typography variant="body2" sx={{ flexGrow: 1, mb: 2 }}>
                        {service.description}
                      </Typography>
                      <Button
                        endIcon={<ArrowForwardIcon />}
                        sx={{
                          alignSelf: "flex-start",
                          color: "#C33764",
                          "&:hover": {
                            backgroundColor: "rgba(195, 55, 100, 0.1)",
                          },
                        }}
                      >
                        View Details
                      </Button>
                    </CardContent>
                  </Card>
                </Link>
              </motion.div>
            </Grid>
          ))}
        </Grid>
      </motion.div>
    </Container>
  );
}

export default Services;
