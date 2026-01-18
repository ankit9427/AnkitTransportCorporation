import React from "react";
import { useParams, Link } from "react-router-dom";
import { Container, Typography, Button, Grid, Paper, List, ListItem, ListItemText, CardMedia } from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { servicesData } from "./Services";
import "./ServiceDetail.css";

const ServiceDetail = () => {
  const { id } = useParams();
  const service = servicesData.find((s) => s.id === id);

  if (!service) {
    return (
      <Container>
        <Typography variant="h4">Service not found</Typography>
        <Button component={Link} to="/services" startIcon={<ArrowBackIcon />}>
          Back to Services
        </Button>
      </Container>
    );
  }

  return (
    <Container className="service-detail-section">
      <Button component={Link} to="/services" startIcon={<ArrowBackIcon />} style={{ marginBottom: '20px' }}>
        Back to Services
      </Button>
      <CardMedia
        component="img"
        height="300"
        image={service.image}
        alt={service.title}
        style={{ marginBottom: '20px', borderRadius: '8px' }}
      />
      <Typography variant="h3" gutterBottom>
        {service.title}
      </Typography>
      <Typography variant="subtitle1" paragraph>
        {service.fullDescription}
      </Typography>
      <Grid container spacing={4}>
        <Grid item xs={12} md={8}>
          <Paper elevation={3} style={{ padding: '20px' }}>
            <Typography variant="h5" gutterBottom>
              Key Features
            </Typography>
            <List>
              {service.features.map((feature, index) => (
                <ListItem key={index}>
                  <ListItemText primary={feature} />
                </ListItem>
              ))}
            </List>
          </Paper>
        </Grid>
        <Grid item xs={12} md={4}>
          <Paper elevation={3} style={{ padding: '20px' }}>
            <Typography variant="h5" gutterBottom>
              About This Service
            </Typography>
            <Typography variant="body2">
              {service.fullDescription}
            </Typography>
            <Button 
              variant="contained" 
              component={Link} 
              to="/contact" 
              sx={{ mt: 3, backgroundColor: '#C33764', width: '100%' }}
            >
              Get In Touch
            </Button>
          </Paper>
        </Grid>
      </Grid>
    </Container>
  );
};

export default ServiceDetail;