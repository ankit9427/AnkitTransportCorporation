import React from "react";
import { Grid, Typography, Paper, Container, Link } from "@mui/material";
import { Link as RouterLink } from "react-router-dom";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import BusinessCenterIcon from "@mui/icons-material/BusinessCenter";
import TimelineIcon from "@mui/icons-material/Timeline";
import VerifiedIcon from "@mui/icons-material/Verified";
import SupportAgentIcon from "@mui/icons-material/SupportAgent";
import PeopleIcon from "@mui/icons-material/People";
import { motion } from "framer-motion";
import "./Portfolio.css";

const portfolioItems = [
  {
    id: "reliable-transport",
    icon: <LocalShippingIcon className="icon" />,
    title: "Reliable Transport Solutions",
    description: "Safe, timely, and efficient transport services across the country with GPS tracking and insured shipments.",
    fullDescription: "Our reliable transport solutions ensure your goods reach their destination on time, every time. With a fleet of modern vehicles and experienced drivers, we handle everything from small packages to large shipments. Our GPS tracking system provides real-time updates, and all shipments are fully insured for complete peace of mind.",
    features: ["Real-time GPS tracking", "Fully insured shipments", "24-48 hour delivery", "150+ vehicle fleet", "98% customer satisfaction"],
  },
  {
    id: "corporate-logistics",
    icon: <BusinessCenterIcon className="icon" />,
    title: "Corporate Logistics",
    description: "End-to-end logistics solutions for businesses to optimize supply chains and streamline operations.",
    fullDescription: "Streamline your business operations with our comprehensive logistics solutions. We manage inventory, warehousing, and distribution to reduce costs and improve efficiency. Our corporate clients benefit from supply chain optimization, real-time analytics, and custom warehousing solutions tailored to their needs.",
    features: ["Supply chain optimization", "Real-time analytics", "Custom warehousing", "ERP integration", "Reduced logistics costs by 25%"],
  },
  {
    id: "experience",
    icon: <TimelineIcon className="icon" />,
    title: "Over 25 Years of Experience",
    description: "A trusted name in the transport industry for over two decades with a proven track record.",
    fullDescription: "With over 25 years in the transport industry, we've built an unmatched reputation for excellence. Our long-standing relationships with clients and deep expertise in logistics guarantee top-notch service. We've successfully served over 50,000 customers and earned 5 industry excellence awards for our consistent performance.",
    features: ["Founded in 1999", "50,000+ customers served", "5 industry excellence awards", "Proven track record", "Deep industry expertise"],
  },
  {
    id: "certifications",
    icon: <VerifiedIcon className="icon" />,
    title: "Industry Certifications",
    description: "Certified by key industry standards including ISO 9001, DOT, and FMCSA approvals.",
    fullDescription: "Our comprehensive certifications ensure compliance with the highest safety and quality standards. We hold ISO 9001 certification, full DOT approvals, and FMCSA compliance. Every year we pass all audits with flying colors, maintaining a 100% compliance record that you can trust.",
    features: ["ISO 9001 certified", "DOT approved", "FMCSA compliant", "100% audit pass rate", "Annual compliance verification"],
  },
  {
    id: "support",
    icon: <SupportAgentIcon className="icon" />,
    title: "24/7 Customer Support",
    description: "Round-the-clock customer support with response time under 5 minutes across multiple channels.",
    fullDescription: "Our 24/7 support team is always ready to help with any inquiry or issue. Whether it's tracking a shipment, resolving a problem, or planning a new delivery, we're just a call away. Available through phone, email, and chat with multilingual support in English, Spanish, and Hindi.",
    features: ["Instant <5 minute response time", "Multilingual support", "Phone, email, and chat", "Dedicated account managers", "24/7 availability"],
  },
  {
    id: "team",
    icon: <PeopleIcon className="icon" />,
    title: "Experienced Team",
    description: "500+ trained professionals with average 10 years experience ensuring smooth operations.",
    fullDescription: "Our team of 500+ professionals includes logistics experts, experienced drivers, and support staff. Each member is trained to handle complex challenges with ease. We invest 200+ hours per year in training per employee to keep our team at the forefront of industry standards.",
    features: ["500+ trained professionals", "Average 10 years experience", "200+ training hours/year/employee", "Expert team collaboration", "Complex challenge expertise"],
  },
];

export { portfolioItems };

const Portfolio = () => {
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

  return (
    <Container className="portfolio-section">
      <Typography
        className="section-title"
        variant="h3"
        align="center"
        gutterBottom
      >
        Our Portfolio
      </Typography>
      <Typography
        className="section-subtitle"
        variant="subtitle1"
        align="center"
        paragraph
      >
        Explore our range of strengths and see why Ankit Transport Corporation is
        a leader in the logistics and transport industry.
      </Typography>
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <Grid container spacing={4} justifyContent="center">
          {portfolioItems.map((item, index) => (
            <Grid item key={index} xs={12} sm={6} md={4} className="MuiGrid-item">
              <motion.div variants={itemVariants} whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Link component={RouterLink} to={`/portfolio/${item.id}`} style={{ textDecoration: 'none' }}>
                  <Paper className="paper" elevation={3} style={{ cursor: 'pointer' }}>
                    {item.icon}
                    <Typography className="service-title" variant="h6">
                      {item.title}
                    </Typography>
                    <Typography className="service-description" variant="body2">
                      {item.description}
                    </Typography>
                  </Paper>
                </Link>
              </motion.div>
            </Grid>
          ))}
        </Grid>
      </motion.div>
    </Container>
  );
};

export default Portfolio;
