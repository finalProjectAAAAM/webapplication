import React from "react";
import { styled } from "@mui/system";
import { Typography, Link } from "@mui/material";

const FooterContainer = styled('footer')({
  backgroundColor: '#000',
  color: '#fff',
  padding: '20px',
  textAlign: 'center',
});

const QRCodeImage = styled('img')({
  width: '100px', // Adjust size as needed
  height: '100px', // Adjust size as needed
});

const Footer = () => {
  return (
    <FooterContainer>
      <Typography variant="body1">
        Connect with us:
      </Typography>
      {/* Example QR code image, replace with your actual QR code image */}
      <QRCodeImage src="https://cdn.ttgtmedia.com/rms/misc/qr_code_barcode.jpg" alt="QR Code" />
      <Typography variant="body2">
        Explore with us and discover new horizons! Plan your next adventure with our tourism app. From breathtaking landscapes to vibrant cultures, we've got you covered. Whether you're a solo traveler, a family on vacation, or a group of friends seeking adventure, our app provides personalized recommendations and convenient tools to make your journey unforgettable.
      </Typography>
      <Typography variant="body2">
        Start your journey today and download our app:
      </Typography>
      <Link href="https://example.com" target="_blank" rel="noopener noreferrer">
        <Typography variant="body2">
          Download on the App Store
        </Typography>
      </Link>
      <Link href="https://example.com" target="_blank" rel="noopener noreferrer">
        <Typography variant="body2">
          Get it on Google Play
        </Typography>
      </Link>
      <Typography variant="body2">
        Connect with us on social media for the latest updates and travel inspiration:
      </Typography>
      <Typography variant="body2">
        Facebook | Instagram | Twitter
      </Typography>
      <Typography variant="body2">
        © {new Date().getFullYear()} TourismApp. All rights reserved.
      </Typography>
    </FooterContainer>
  );
};

export default Footer;
