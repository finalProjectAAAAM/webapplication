import React, { useState } from "react";
import { tokens } from "../../theme";
import { Box, ThemeProvider, Grid, Typography } from "@mui/material";
import { useNavigate } from 'react-router-dom';
import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@mui/material";

const Form = () => {
  const isNonMobile = useMediaQuery("(min-width:600px)");
  const [file, setFile] = useState("");
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const navigate = useNavigate(); 
  
  return (
    <ThemeProvider
      theme={{
        palette: {
          primary: {
            main: '#007FFF',
            dark: '#0066CC',
          },
        },
      }}
    >
      <Grid
        container
        justifyContent="center"
        alignItems="center"
        spacing={20}
        style={{ minHeight: "100vh" }}
      >
        <Grid item>
          <Box
            sx={{
              width: 100,
              height: 100,
              borderRadius: 1,
              bgcolor: colors.primary[400],
              cursor: 'pointer',
            }}
            onClick={() => navigate('/Offer')} 
          >
            <Typography
              variant="h5"
              fontWeight="600"
              color={colors.grey[100]}
              textAlign="center"
            >
              Add offer
            </Typography>
          </Box>
        </Grid>
        <Grid item>
          <Box
            sx={{
              width: 100,
              height: 100,
              borderRadius: 1,
              bgcolor: colors.primary[400],
              cursor: 'pointer',
            }}
            onClick={() => navigate('/pack')} 
          >
            <Typography
              variant="h5"
              fontWeight="600"
              color={colors.grey[100]}
              textAlign="center"
            >
              Add Packages
            </Typography>
          </Box>
        </Grid>
        
      </Grid>
    </ThemeProvider>
  );
};

export default Form;
