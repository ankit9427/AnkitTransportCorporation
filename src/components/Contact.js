import React, { useState } from "react";
import "./Contact.css";
import { Email, Phone, LocationOn } from "@mui/icons-material";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import {
  Button,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  TextField,
  MenuItem,
  Snackbar,
  Alert,
} from "@mui/material";

function Contact() {
  const [openModal, setOpenModal] = useState(false);
  const [isQuotation, setIsQuotation] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    email: "",
    phone: "",
    originZip: "",
    destinationZip: "",
    product: "",
    truckType: "9MT",
    message: "",
  });

  const [snackbarOpen, setSnackbarOpen] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState("");
  const [snackbarSeverity, setSnackbarSeverity] = useState("success");

  // const handleOpenMessage = () => {
  //   setIsQuotation(false);
  //   setOpenModal(true);
  //   resetForm();
  // };

  const handleOpenQuotation = () => {
    setIsQuotation(true);
    setOpenModal(true);
    resetForm();
  };

  const handleClose = () => {
    setOpenModal(false);
  };

  const resetForm = () => {
    setFormData({
      name: "",
      company: "",
      email: "",
      phone: "",
      originZip: "",
      destinationZip: "",
      product: "",
      truckType: "9MT",
      message: "",
    });
  };

  const handleChange = (event) => {
    const { id, value } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [id]: value,
    }));
  };

  const handleMessageSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await fetch("http://localhost:5000/api/send-message", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email, // Corrected to use formData.email
          message: formData.message,
        }),
      });

      if (response.ok) {
        setSnackbarMessage("Message sent successfully!");
        setSnackbarSeverity("success");
      } else {
        setSnackbarMessage("Failed to send message.");
        setSnackbarSeverity("error");
      }
    } catch (error) {
      console.error("Error:", error);
      setSnackbarMessage("An error occurred. Please try again.");
      setSnackbarSeverity("error");
    }
    setSnackbarOpen(true);
    handleClose();
  };

  const handleQuotationSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await fetch("http://localhost:5000/api/send-quotation", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: formData.name,
          company: formData.company,
          email: formData.email,
          phone: formData.phone,
          originZip: formData.originZip,
          destinationZip: formData.destinationZip,
          product: formData.product,
          truckType: formData.truckType,
          message: formData.message,
        }),
      });

      if (response.ok) {
        setSnackbarMessage("Quotation request sent successfully!");
        setSnackbarSeverity("success");
      } else {
        setSnackbarMessage("Failed to send quotation request.");
        setSnackbarSeverity("error");
      }
    } catch (error) {
      console.error("Error:", error);
      setSnackbarMessage("An error occurred. Please try again.");
      setSnackbarSeverity("error");
    }
    setSnackbarOpen(true);
    handleClose();
  };

  const handleSnackbarClose = () => {
    setSnackbarOpen(false);
  };

  const handleWhatsAppClick = () => {
    const phoneNumber = "919426821084"; // Your WhatsApp number with country code
    const message = "Hello, I am interested in your transport services. Can you please help me?";
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, "_blank");
  };

  return (
    <div className="contact-container">
      <h1>Contact Us</h1>
      <p>
        If you have any questions or feedback, feel free to reach out to us:
      </p>

      <div className="contact-info">
        <p>
          <Phone />
          <strong>Phone:</strong> <a href="tel:+919426821084">+91 9426821084</a>
        </p>
        <p>
          <Email />
          <strong>Email:</strong>{" "}
          <a href="mailto:ankittransportcorporation@gmail.com">
            ankittransportcorporation@gmail.com
          </a>
        </p>
        <p>
          <LocationOn />
          <strong>Address:</strong> 205, Gopinath Complex opposite Girnar
          Khushboo Plaza, Vapi
        </p>
      </div>

      {/* Quotation and Inquiry Section */}
      <div className="quotation-section">
        <h2>Looking for a Quotation?</h2>
        <Button
          variant="contained"
          onClick={handleOpenQuotation}
          sx={{ backgroundColor: "#C33764", marginRight: "1rem" }}
        >
          Get a Quotation
        </Button>
        <h2>Chat with us</h2>
        <Button
          variant="contained"
          onClick={handleWhatsAppClick}
          startIcon={<WhatsAppIcon />}
          sx={{ 
            backgroundColor: "#25D366", 
            "&:hover": {
              backgroundColor: "#1fa857"
            }
          }}
        >
          Chat on WhatsApp
        </Button>
      </div>

      {/* Contact Modal */}
      <Dialog open={openModal} onClose={handleClose}>
        <DialogTitle>
          {isQuotation ? "Get a Quotation" : "General Inquiry"}
        </DialogTitle>
        <DialogContent>
          <form
            onSubmit={isQuotation ? handleQuotationSubmit : handleMessageSubmit}
          >
            {isQuotation ? (
              <>
                <TextField
                  autoFocus
                  margin="dense"
                  id="name"
                  label="Your Name"
                  type="text"
                  fullWidth
                  required
                  value={formData.name}
                  onChange={handleChange}
                />
                <TextField
                  margin="dense"
                  id="company"
                  label="Company Name"
                  type="text"
                  fullWidth
                  required
                  value={formData.company}
                  onChange={handleChange}
                />
                <TextField
                  margin="dense"
                  id="email"
                  label="Your Email"
                  type="email"
                  fullWidth
                  required
                  value={formData.email}
                  onChange={handleChange}
                />
                <TextField
                  margin="dense"
                  id="phone"
                  label="Phone Number"
                  type="tel"
                  fullWidth
                  required
                  value={formData.phone}
                  onChange={handleChange}
                />
                <TextField
                  margin="dense"
                  id="originZip"
                  label="Origin Zip Code"
                  type="text"
                  fullWidth
                  required
                  value={formData.originZip}
                  onChange={handleChange}
                />
                <TextField
                  margin="dense"
                  id="destinationZip"
                  label="Destination Zip Code"
                  type="text"
                  fullWidth
                  required
                  value={formData.destinationZip}
                  onChange={handleChange}
                />
                <TextField
                  margin="dense"
                  id="product"
                  label="Product"
                  type="text"
                  fullWidth
                  required
                  value={formData.product}
                  onChange={handleChange}
                />
                <TextField
                  margin="dense"
                  id="truckType"
                  label="Truck Type"
                  select
                  fullWidth
                  required
                  value={formData.truckType}
                  onChange={handleChange}
                >
                  <MenuItem value="9MT">9MT</MenuItem>
                  <MenuItem value="12MT">12MT</MenuItem>
                  <MenuItem value="16MT">16MT</MenuItem>
                  <MenuItem value="20MT">20MT</MenuItem>
                </TextField>
                <TextField
                  margin="dense"
                  id="message"
                  label="Message"
                  type="text"
                  multiline
                  rows={4}
                  fullWidth
                  required
                  value={formData.message}
                  onChange={handleChange}
                />
              </>
            ) : (
              <>
                <TextField
                  autoFocus
                  margin="dense"
                  id="messageName"
                  label="Your Name"
                  type="text"
                  fullWidth
                  required
                  value={formData.name}
                  onChange={handleChange}
                />
                <TextField
                  margin="dense"
                  id="messageEmail"
                  label="Your Email"
                  type="email"
                  fullWidth
                  required
                  value={formData.email}
                  onChange={handleChange}
                />
                <TextField
                  margin="dense"
                  id="messageText"
                  label="Your Message"
                  type="text"
                  multiline
                  rows={4}
                  fullWidth
                  required
                  value={formData.message}
                  onChange={handleChange}
                />
              </>
            )}
            <DialogActions>
              <Button
                className="MuiButton-cancel"
                onClick={handleClose}
                color="secondary"
              >
                Cancel
              </Button>
              <Button className="MuiButton-send" type="submit" color="primary">
                Send
              </Button>
            </DialogActions>
          </form>
        </DialogContent>
      </Dialog>

      {/* Snackbar for notifications */}
      <Snackbar
        open={snackbarOpen}
        autoHideDuration={6000}
        onClose={handleSnackbarClose}
        anchorOrigin={{ vertical: "top", horizontal: "center" }}
      >
        <Alert
          onClose={handleSnackbarClose}
          severity={snackbarSeverity}
          sx={{ width: "100%" }}
        >
          {snackbarMessage}
        </Alert>
      </Snackbar>

      <div className="map-container">
        <h2>Find Us Here</h2>
        <p style={{ color: "white" }}>Visit us at our office for any urgent matters.</p>
        <div className="responsive-map">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d12092.715638962632!2d72.924939!3d20.369587!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be0ce485bc1d841%3A0x616833ecdf623c00!2sGirnar%20Khushboo%20Plaza!5e0!3m2!1sen!2sin!4v1234567890"
            allowFullScreen=""
            loading="lazy"
            title="Ankit Transport Corporation Location"
          ></iframe>
        </div>
      </div>
    </div>
  );
}

export default Contact;
