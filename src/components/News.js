import React from "react";
import { Container, Typography, Grid, Card, CardContent, CardMedia } from "@mui/material";
import { motion } from "framer-motion";
import "./News.css";

const newsItems = [
  {
    id: 1,
    title: "Global Supply Chain Evolution in 2026",
    date: "January 15, 2026",
    summary: "The international logistics industry is witnessing a major shift towards autonomous vehicles and AI-powered route optimization. Major transport companies worldwide are investing heavily in these technologies.",
    image: require("../images/AdobeStock_865440375_Preview.jpeg"),
    category: "Global Trade",
  },
  {
    id: 2,
    title: "EU Enforces New Carbon Emissions Standards for Transport",
    date: "January 10, 2026",
    summary: "The European Union has implemented stricter carbon emission regulations for all international transport operators. Companies must reduce emissions by 55% by 2030 to maintain operational licenses.",
    image: require("../images/AdobeStock_600653050_Preview.jpeg"),
    category: "Regulations",
  },
  {
    id: 3,
    title: "Asia-Pacific Becomes Largest Logistics Hub",
    date: "January 5, 2026",
    summary: "According to international trade reports, the Asia-Pacific region has surpassed Europe and North America as the world's largest logistics and transport hub, driven by rapid growth in e-commerce.",
    image: require("../images/AdobeStock_759871558_Preview.jpeg"),
    category: "Market Trends",
  },
  {
    id: 4,
    title: "China-India Freight Corridor Opens New Routes",
    date: "December 20, 2025",
    summary: "A new high-speed freight corridor connecting China and India has been inaugurated, reducing transit time by 40% and boosting bilateral trade significantly.",
    image: require("../images/AdobeStock_470767689_Preview_Editorial_Use_Only.jpeg"),
    category: "Infrastructure",
  },
  {
    id: 5,
    title: "Port Authority Reports Record Container Traffic",
    date: "December 10, 2025",
    summary: "Major international ports including Singapore, Rotterdam, and Shanghai report record-breaking container volumes in 2025, reflecting strong global recovery in international trade.",
    image: require("../images/AdobeStock_865440375_Preview.jpeg"),
    category: "Shipping",
  },
  {
    id: 6,
    title: "International Road Transport Union Sets Safety Standards",
    date: "November 28, 2025",
    summary: "The International Road Transport Union has announced new global safety standards for long-haul transport, including mandatory fatigue monitoring systems and real-time health tracking.",
    image: require("../images/AdobeStock_600653050_Preview.jpeg"),
    category: "Safety",
  },
];

const News = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <Container className="news-section">
      <Typography variant="h3" align="center" gutterBottom>
        International Transport News
      </Typography>
      <Typography variant="subtitle1" align="center" paragraph>
        Stay updated with the latest global logistics, shipping, and transport industry news from around the world.
      </Typography>
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <Grid container spacing={4}>
          {newsItems.map((item) => (
            <Grid item key={item.id} xs={12} md={4}>
              <motion.div variants={itemVariants} whileHover={{ scale: 1.05 }}>
                <Card>
                  <CardMedia
                    component="img"
                    height="200"
                    image={item.image}
                    alt={item.title}
                  />
                  <CardContent>
                    <Typography variant="h6" gutterBottom>
                      {item.title}
                    </Typography>
                    <Typography variant="body2" color="text.secondary" gutterBottom>
                      {item.date}
                    </Typography>
                    <Typography variant="body2">
                      {item.summary}
                    </Typography>
                  </CardContent>
                </Card>
              </motion.div>
            </Grid>
          ))}
        </Grid>
      </motion.div>
    </Container>
  );
};

export default News;