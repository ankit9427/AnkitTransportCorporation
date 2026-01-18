import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Container, Typography, Button, Box, Card, CardContent, List, ListItem, ListItemIcon, ListItemText } from "@mui/material";
import { portfolioItems } from "./Portfolio";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import { motion } from "framer-motion";
import "./PortfolioDetail.css";

const PortfolioDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  
  const item = portfolioItems.find((p) => p.id === id);

  if (!item) {
    return (
      <Container className="portfolio-detail-section">
        <Box textAlign="center" py={5}>
          <Typography variant="h4" className="portfolio-title" gutterBottom>
            Portfolio Item Not Found
          </Typography>
          <Button
            startIcon={<ArrowBackIcon />}
            onClick={() => navigate("/portfolio")}
            className="back-button"
            variant="contained"
          >
            Back to Portfolio
          </Button>
        </Box>
      </Container>
    );
  }

  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  const listVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: { opacity: 1, x: 0 },
  };

  return (
    <motion.div
      className="portfolio-detail-section"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <Container>
        <Button
          startIcon={<ArrowBackIcon />}
          onClick={() => navigate("/portfolio")}
          className="back-button"
          variant="outlined"
          sx={{ mb: 3 }}
        >
          Back to Portfolio
        </Button>

        <Box className="detail-header" mb={4}>
          <Box className="icon-box">
            {item.icon}
          </Box>
          <Typography variant="h3" className="portfolio-title" gutterBottom>
            {item.title}
          </Typography>
        </Box>

        <Card className="detail-card" elevation={3} sx={{ mb: 4 }}>
          <CardContent>
            <Typography variant="h5" className="detail-subheading" gutterBottom>
              Overview
            </Typography>
            <Typography variant="body1" className="detail-text" paragraph>
              {item.fullDescription}
            </Typography>
          </CardContent>
        </Card>

        <Typography variant="h5" className="detail-subheading" gutterBottom>
          Key Highlights
        </Typography>
        <motion.div variants={listVariants} initial="hidden" animate="visible">
          <List className="highlights-list">
            {item.features.map((feature, index) => (
              <motion.div key={index} variants={itemVariants}>
                <ListItem className="list-item">
                  <ListItemIcon className="list-icon">
                    <CheckCircleIcon />
                  </ListItemIcon>
                  <ListItemText
                    primary={feature}
                    primaryTypographyProps={{ className: "list-text" }}
                  />
                </ListItem>
              </motion.div>
            ))}
          </List>
        </motion.div>

        <Box mt={5} display="flex" gap={2}>
          <Button
            startIcon={<ArrowBackIcon />}
            onClick={() => navigate("/portfolio")}
            className="back-button"
            variant="contained"
          >
            Back to Portfolio
          </Button>
          <Button
            href="/contact"
            className="contact-button"
            variant="contained"
          >
            Get In Touch
          </Button>
        </Box>
      </Container>
    </motion.div>
  );
};

export default PortfolioDetail;
