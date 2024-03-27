import React from "react";
import {
  Box,
  Container,
  Grid,
  Typography,
  TextField,
  Button,
  Stack,
} from "@mui/material";
import { motion } from "framer-motion";
import ContactMailIcon from "@mui/icons-material/ContactMail";
import SendIcon from "@mui/icons-material/Send";
import FacebookIcon from "@mui/icons-material/Facebook";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import NavBar from "./NavBar";
import styled from "@emotion/styled";
import axios from "axios";
import { useState } from "react";

const StyledTypography = styled(Typography)({
  fontWeight: "bold",
  fontSize: "2.5rem",
  color: "#1976d2",
  fontFamily: "Roboto",
});

const StyledTypography1 = styled(Typography)({
  marginRight: "60px",
  color: "#1a237e",
  "&:hover": {
    backgroundColor: "rgba(25, 118, 210, 0.1)",
  },
});

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        "http://localhost:3001/api/admin/contactAdmin",
        formData
      );
      console.log(response.data);

      setFormData({
        name: "",
        email: "",
        message: "",
      });
    } catch (error) {
      console.error("Error sending message:", error);
    }
  };
//save
  return (
    <div>
      <NavBar />
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <Container
          maxWidth="lg"
          sx={{
            paddingTop: "60px",
            paddingBottom: "120px",
          }}
        >
          <Grid container spacing={4} justifyContent="center">
            <Grid item xs={12}>
              <StyledTypography sx={{ textAlign: "center" }}>
                Send Us a Message
              </StyledTypography>
            </Grid>
            <Grid item xs={6} md={6}>
              <StyledContactInfoBox>
                <StyledTypography1
                  variant="h5"
                  sx={{ color: "#1976d2", textAlign: "center" }}
                >
                  Contact Information
                </StyledTypography1>
                <StyledTypography1 sx={{ color: "#1976d2" }}>
                  John Doe
                </StyledTypography1>
                <StyledTypography1 sx={{ color: "#1976d2" }}>
                  john.doe@example.com
                </StyledTypography1>
                <StyledTypography1 sx={{ color: "#1976d2" }}>
                  123-456-7890
                </StyledTypography1>
                <Stack
                  direction="column"
                  spacing={1}
                  sx={{ color: "black", mt: 2 }}
                >
                  <FacebookIcon sx={{ color: "#1976d2" }} />
                  <a
                    href="https://www.facebook.com/your-profile"
                    style={{ color: "#1976d2", textDecoration: "none" }}
                  >
                    Visit Facebook Page
                  </a>
                  <WhatsAppIcon sx={{ color: "green" }} />
                  <a
                    href="https://wa.me/your-phone-number"
                    style={{ color: "#1976d2", textDecoration: "none" }}
                  >
                    WhatsApp Chat
                  </a>
                  <LinkedInIcon sx={{ color: "#1976d2" }} />
                  <a
                    href="https://www.linkedin.com/in/your-profile"
                    style={{ color: "#1976d2", textDecoration: "none" }}
                  >
                    LinkedIn Profile
                  </a>
                </Stack>

                <StyledTypography1
                  variant="body1"
                  sx={{ color: "#1976d2", mt: 2 }}
                >
                  Have any questions? Feel free to send us a message.
                </StyledTypography1>
              </StyledContactInfoBox>
            </Grid>
            <Grid item xs={6} md={6}>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1 }}
              >
                <StyledBox>
                  <Stack spacing={2}>
                    <TextField
                      label="Name"
                      variant="outlined"
                      fullWidth
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      InputProps={{
                        startAdornment: (
                          <ContactMailIcon style={{ marginRight: 8 }} />
                        ),
                      }}
                    />
                    <TextField
                      label="Email"
                      variant="outlined"
                      fullWidth
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      InputProps={{
                        startAdornment: (
                          <ContactMailIcon style={{ marginRight: 8 }} />
                        ),
                      }}
                    />
                    <TextField
                      label="Message"
                      variant="outlined"
                      multiline
                      rows={4}
                      fullWidth
                      name="message"
                      required
                      value={formData.message}
                      onChange={handleChange}
                    />
                    <StyledButton
                      variant="contained"
                      endIcon={<SendIcon />}
                      size="large"
                      onClick={handleSubmit}
                    >
                      Send Message
                    </StyledButton>
                  </Stack>
                  <Box mt={2}></Box>
                </StyledBox>
              </motion.div>
            </Grid>
          </Grid>
        </Container>
      </motion.div>
    </div>
  );
};

const StyledBox = styled(Box)({
  padding: "30px",
  borderRadius: "20px",
  boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.1)",
  background: "#f9f9f9",
  maxWidth: "500px",
  margin: "0 auto",
  border: "2px solid #ddd",
  height: "100%",
});

const StyledContactInfoBox = styled(Box)({
  padding: "30px",
  borderRadius: "20px",
  boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.1)",
  background: "#f9f9f9",
  border: "2px solid #ddd",
  maxWidth: "500px",
  margin: "0 auto",
  height: "85%",
});

const StyledButton = styled(Button)({
  color: "white",
  backgroundColor: "#1976d2",
  "&:hover": {
    backgroundColor: "#1565c0",
  },
});

export default ContactUs;
