import React from "react";
import "./About.css";

function About() {
  return (
    <div className="about-container">
      {" "}
      {/* Added class for scoping */}
      <h2>About Us</h2>
      <p>
        Welcome to Ankit Transport Corporation! We are a leading transport and
        logistics provider dedicated to delivering top-notch services to our
        clients across the country. With years of experience in the industry, we
        understand the importance of timely and safe transportation solutions.
      </p>
      <h3>Our Mission</h3>
      <p>
        Our mission is to provide reliable, efficient, and affordable transport
        services while ensuring the highest level of customer satisfaction. We
        aim to connect businesses and communities through our comprehensive
        logistics solutions.
      </p>
      <h3>Our Services</h3>
      <p>
        At Ankit Transport Corporation, we offer a wide range of transport
        services, including:
      </p>
      <ul>
        <li>Freight Transportation</li>
        <li>Logistics Management</li>
        <li>Warehousing Solutions</li>
        <li>Supply Chain Management</li>
        <li>Specialized Transport for Hazardous Materials</li>
      </ul>
      <h3>Our Values</h3>
      <p>We believe in:</p>
      <ul>
        <li>
          <strong>Integrity:</strong> Upholding the highest ethical standards in
          our operations.
        </li>
        <li>
          <strong>Customer Focus:</strong> Placing our clients at the heart of
          everything we do.
        </li>
        <li>
          <strong>Innovation:</strong> Continuously improving our services
          through innovative solutions.
        </li>
        <li>
          <strong>Safety:</strong> Ensuring the safety of our employees,
          clients, and cargo at all times.
        </li>
      </ul>
      <h3>Our History</h3>
      <p>
        Established in 2010, Ankit Transport Corporation started as a small
        transport service provider and has since grown into a trusted partner
        for many businesses. Our commitment to excellence and customer service
        has allowed us to expand our fleet and service offerings over the years.
      </p>
      <h3>Contact Us</h3>
      <p>
        We invite you to learn more about our services and how we can assist
        you. Feel free to reach out to us via our{" "}
        <a href="/contact">Contact page</a> for any inquiries or to request a
        quote. Thank you for considering Ankit Transport Corporation as your
        logistics partner!
      </p>
    </div>
  );
}

export default About;
