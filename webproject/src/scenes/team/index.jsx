import React, { useState, useEffect } from "react";
import { Box, Button, Typography, useTheme } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import { tokens } from "../../theme";
import axios from "axios";
import Header from "../../components/Header";
import { useNavigate } from 'react-router-dom';

const Team = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const navigate=useNavigate()
  const columns = [
    { field: "id", headerName: "ID" },
    { field: "title", headerName: "title", flex: 1 },
    { field: "startday", headerName: "startday", flex: 1 },
    { field: "duration", headerName: "Duration", type: "number" },
    { field: "description", headerName: "Location", flex: 1 },
    { field: "location", headerName: "Location", flex: 1 },
    { field: "price", headerName: "Price", type: "number" },
    { field: "status", headerName: "status", flex: 1},
    { field: "lat", headerName: "status", type: "number"},
    { field: "long", headerName: "long", type: "number"},
    { field: "places", headerName: "places", type: "number"},
    { field: "paipers", headerName: "paipers", flex: 1},
  ];

  const [packages, setPackages] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:3001/userProvider/getoffer/1');
        const packagesWithIds = response.data.map((pack, index) => ({ ...pack, id: index + 1 }));
        setPackages(packagesWithIds);
        console.log("response", response);
      } catch (error) {
        console.error("Error fetching packages:", error);
      }
    };
    fetchData(); 
  }, []); 

  return (
    <Box m="20px">
      <Header title="Offers" subtitle="Managing the Offers " />
      <Box
        m="40px 0 0 0"
        height="75vh"
        sx={{
          "& .MuiDataGrid-root": { border: "none" },
          "& .MuiDataGrid-cell": { borderBottom: "none" },
          "& .name-column--cell": { color: colors.greenAccent[300] },
          "& .MuiDataGrid-columnHeaders": {
            backgroundColor: colors.blueAccent[700],
            borderBottom: "none",
          },
          "& .MuiDataGrid-virtualScroller": {
            backgroundColor: colors.primary[400],
          },
          "& .MuiDataGrid-footerContainer": { borderTop: "none", backgroundColor: colors.blueAccent[700] },
          "& .MuiCheckbox-root": { color: `${colors.greenAccent[200]} !important` },
        }}
      >
        <Box position="relative" mb={2}>
          <Button type="submit" color="secondary" variant="contained" onClick={() => navigate('/Offerdetails')}> See offer Detail </Button>
        </Box>
        <DataGrid
          rows={packages}
          columns={columns}
          getRowId={(row) => row.id} 
        />
      </Box>
    </Box>
  );
};

export default Team;
