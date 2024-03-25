import React, { useState } from "react";
import { tokens } from "../../theme";
import { Box, Grid, Typography, TextField, Button } from "@mui/material";
import { useNavigate } from 'react-router-dom';
import { useTheme } from "@mui/material";

const Form = () => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);
    const navigate = useNavigate();
    const [showInputs, setShowInputs] = useState(false); // State to manage input visibility

    const offers = [
        {
            title: "Special Offer 1",
            startDay: "March 15th, 2024",
            longitude: 40.7128,
            latitude: -74.006,
            description: "Hiking activites,Desert activites.",
            imageURL: "https://www.tunisienumerique.com/wp-content/uploads/2022/11/154090929857_content.jpg",
            Categories:"Sport",
            SubCategories:"Groupe"
        },
    ];

    const handleButtonClick = () => {
        setShowInputs(true);
    };

    return (
        <Grid
            container
            justifyContent="center"
            alignItems="center"
            spacing={5}
            style={{ minHeight: "100vh" }}
        >
            {offers.map((offer, index) => (
                <Grid item key={index}>
                    <Box
                        sx={{
                            width: 1100,
                            height: 800,
                            borderRadius: 2,
                            bgcolor: colors.primary[400],
                            cursor: 'pointer',
                            position: 'relative',
                        }}
                        
                    >
                        <Grid container spacing={2}>
                            <Grid item xs={6}>
                                <Typography
                                    variant="h5"
                                    fontWeight="600"
                                    color="#FFFFFF"
                                    textAlign="center"
                                    style={{ fontSize: '3vw', fontFamily: 'Arial, sans-serif' }}
                                >
                                    {offer.title}
                                </Typography>
                                <Typography
                                    variant="body2"
                                    fontWeight="400"
                                    color="#FFFFFF"
                                    textAlign="center"
                                    style={{ fontSize: '1.5vw', lineHeight: '2vw', fontFamily: 'Arial, sans-serif' }}
                                >
                                    <div style={{ marginBottom: '2vw' }}>
                                        Start Day: {offer.startDay}
                                    </div>
                                    <div style={{ marginBottom: '2vw' }}>
                                        Longitude: {offer.longitude}
                                    </div>
                                    <div style={{ marginBottom: '2vw' }}>
                                        Latitude: {offer.latitude}
                                    </div>
                                    <div style={{ marginBottom: '2vw' }}>
                                        Description: {offer.description}
                                    </div>
                                    <div style={{ marginBottom: '2vw' }}>
                                        Description: {offer.Categories}
                                    </div>
                                    <div style={{ marginBottom: '2vw' }}>
                                        Description: {offer.SubCategories}
                                    </div>
                                    {showInputs && (
                                        <>
                                            <TextField label="Start Day" variant="outlined" fullWidth />
                                            <TextField label="Description" variant="outlined" fullWidth />
                                        </>
                                    )}
                                    {!showInputs && (
                                        <Box>
                                            <Button variant="contained" color="secondary" onClick={() => navigate('/updateoffer')}>
                                                Update your Offer
                                            </Button>
                                            <Button variant="contained" color="secondary" onClick={() => navigate('/team')} sx={{ marginLeft: 1 }}>
                                                Delete your Offer
                                            </Button>
                                        </Box>
                                    )}
                                </Typography>
                            </Grid>
                            <Grid item xs={6}>
                                <Box
                                    sx={{
                                        width: '100%',
                                        height: '100%',
                                        borderRadius: '50%', // Make the image rounded
                                        overflow: 'hidden', // Hide the overflow content
                                    }}
                                >
                                    <img
                                        src={offer.imageURL}
                                        alt={offer.title}
                                        style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                                    />
                                </Box>
                            </Grid>
                        </Grid>
                    </Box>
                </Grid>
            ))}
        </Grid>
    );
};

export default Form;
