import React, { useState } from "react";
import { Box, Button, TextField } from "@mui/material";
import * as yup from "yup";
import { useFormik } from "formik";

const PackageForm = () => {
  const [file, setFile] = useState("");

  const onSubmit = async (values) => {
    const offers = [];
    for (let i = 1; i <= 4; i++) {
      if (values[`offer${i}`]) {
        offers.push({ offer: values[`offer${i}`] });
      }
    }

    const formData = new FormData();
    formData.append("name", values.name);
    formData.append("location", values.location);
    formData.append("duration", values.duration);
    formData.append("price", values.price);
    formData.append("status", values.status);
    formData.append("places", values.places);
    if (file) {
      formData.append("image", file); // Assuming an 'image' field in the database
    }

    // Implement logic to call your createPackage function here
    // This might involve using libraries like Axios or Fetch API
    // ...

    console.log("Package created:", formData); // For development purposes
  };

  const validationSchema = yup.object().shape({
    name: yup.string().required("required"),
    location: yup.string().required("required"),
    duration: yup.number().required("required").positive("must be positive"),
    price: yup.number().required("required").positive("must be positive"),
    status: yup.string().required("required"),
    places: yup.number().required("required").positive("must be positive"),
  });

  const initialValues = {
    name: "",
    location: "",
    duration: 0,
    price: 0,
    status: "",
    places: 0,
    offer1: "",
    offer2: "",
    offer3: "",
    offer4: "",
  };

  return (
    <Box m="20px">
      <form onSubmit={useFormik(onSubmit, { initialValues, validationSchema }).handleSubmit}>
        <Box display="grid" gap="30px" gridTemplateColumns="repeat(2, 1fr)">
          <TextField
            fullWidth
            variant="filled"
            label="Package Name"
            name="name"
            required
          />
          <TextField
            fullWidth
            variant="filled"
            label="Location"
            name="location"
            required
          />
          <TextField
            fullWidth
            variant="filled"
            label="Duration (Days)"
            type="number"
            name="duration"
            required
          />
          <TextField
            fullWidth
            variant="filled"
            label="Price"
            type="number"
            name="price"
            required
          />
          <TextField fullWidth variant="filled" label="Status" name="status" required />
          <TextField
            fullWidth
            variant="filled"
            label="Available Places"
            type="number"
            name="places"
            required
          />
          {/* Offer Input Fields */}
          <TextField fullWidth variant="filled" label="Offer 1" name="offer1" />
          <TextField fullWidth variant="filled" label="Offer 2" name="offer2" />
          <TextField fullWidth variant="filled" label="Offer 3" name="offer3" />
          <TextField fullWidth variant="filled" label="Offer 4" name="offer4" />
        </Box>
        <Box mt="20px">
          <Button type="submit" color="secondary" variant="contained">
            Create Package
          </Button>
        </Box>
      </form>
    </Box>
  );
};

export default PackageForm;
