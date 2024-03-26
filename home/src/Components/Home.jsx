import React from "react";
import { styled } from "@mui/system";
import { Button, Typography, Container, Grid, Paper } from "@mui/material";
import { PlayArrow, PersonAdd } from "@mui/icons-material";
import img from "./asset/img.png";
import NavBar from "./NavBar";
import img1 from "./asset/image1.png";
import img2 from "./asset/image2.png";
import img3 from "./asset/image3.png";
import img4 from "./asset/image4.png";

const CenteredContainer = styled(Container)({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  minHeight: "100vh",
});

const StyledTypography = styled(Typography)({
  fontWeight: "bold",
  fontSize: "2rem",
  color: "#1976d2",
  fontFamily: "Lato",
  textAlign: "center",
});

const ImageContainer = styled("div")({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
});

const StyledPaper = styled(Paper)({
  padding: "40px",
});

const ButtonContainer = styled(Grid)({
  padding: "20px 0",
});

const CircleContainer = styled(Grid)({
  marginTop: "100px",
  display: "flex",
  flexWrap: "wrap",
  justifyContent: "center",
});

const CircleWrapper = styled("div")({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  margin: "100px",
});

const Circle = styled("div")({
  width: "350px",
  height: "350px",
  borderRadius: "50%",
  background: "#888ED9",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  marginBottom: "120px",
  color: "#fff",
  position: "relative",
});

const CircleText = styled("div")({
  textAlign: "center",
  fontWeight: "bold",
  fontSize: "2rem",
  color: "#1976d2",
  fontFamily: "Lato",
});

const IconWithText = ({ icon, text }) => (
  <>
    {icon}
    <span style={{ marginLeft: "10px" }}>{text}</span>
  </>
);

const Homepage = () => {
  return (
    <div>
      <NavBar />
      <div style={{ marginTop: "100px" }}>
        {" "}
        {/* Add space between Navbar and content */}
        <CenteredContainer maxWidth="lg">
          <Grid container spacing={3}>
            <Grid item xs={12} sm={6}>
              <ImageContainer>
                <img
                  src={`${img}`}
                  alt="App Image"
                  style={{ maxWidth: "100%", height: "auto" }}
                />
              </ImageContainer>
            </Grid>
            <Grid item xs={12} sm={6}>
              <StyledPaper>
                <StyledTypography variant="h6" gutterBottom>
                  Opportunities Don't Happen. You Create Them So Go Sign Up
                </StyledTypography>
                <Typography variant="body1" paragraph>
                  Your app description goes here. Explain what your app does and
                  why users should sign up or watch the video.
                </Typography>
              </StyledPaper>
              <ButtonContainer container spacing={2} justifyContent="center">
                <Grid item>
                  <Button
                    variant="contained"
                    color="primary"
                    startIcon={<PlayArrow />}
                  >
                    Watch Video
                  </Button>
                </Grid>
                <Grid item>
                  <Button
                    variant="contained"
                    color="secondary"
                    startIcon={<PersonAdd />}
                  >
                    Sign Up
                  </Button>
                </Grid>
              </ButtonContainer>
            </Grid>
          </Grid>
          <StyledTypography
            variant="h4"
            gutterBottom
            style={{
              marginBottom: "1px",
              marginTop: "100px",
              fontSize: "3rem",
            }}
          >
            Discover Our Application
          </StyledTypography>
          <CircleContainer container>
            <Grid item xs={12} sm={6}>
              <CircleWrapper>
                <Circle>
                  <img
                    src={`${img1}`}
                    alt="App 1"
                    style={{ maxWidth: "80%", height: "auto" }}
                  />
                </Circle>
                <CircleText>
                  {" "}
                  This is our home page here you can select your state and with
                  who are u going to discover our package{" "}
                </CircleText>
              </CircleWrapper>
            </Grid>
            <Grid item xs={12} sm={6}>
              <CircleWrapper>
                <Circle>
                  <img
                    src={`${img2}`}
                    alt="App 2"
                    style={{ maxWidth: "80%", height: "auto" }}
                  />
                </Circle>
                <CircleText>
                  Here you can find your activity location{" "}
                </CircleText>
              </CircleWrapper>
            </Grid>
            <Grid item xs={12} sm={6}>
              <CircleWrapper>
                <Circle>
                  <img
                    src={`${img4}`}
                    alt="App 3"
                    style={{ maxWidth: "80%", height: "auto" }}
                  />
                </Circle>
                <CircleText>
                  Here u can make your choice as needed you can filter with the
                  distance and the type pf the activity{" "}
                </CircleText>
              </CircleWrapper>
            </Grid>
            <Grid item xs={12} sm={6}>
              <CircleWrapper>
                <Circle>
                  <img
                    src={`${img3}`}
                    alt="App 4"
                    style={{ maxWidth: "80%", height: "auto" }}
                  />
                </Circle>
                <CircleText>
                  Here you can dicover how many days and you can know the
                  weather{" "}
                </CircleText>
              </CircleWrapper>
            </Grid>
          </CircleContainer>
        </CenteredContainer>
      </div>
    </div>
  );
};

export default Homepage;
