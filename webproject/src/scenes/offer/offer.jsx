import React,{useState} from "react";
import axios from 'axios';
import { Box, Button, TextField } from "@mui/material";
import { Formik } from "formik";
import * as yup from "yup";
import useMediaQuery from "@mui/material/useMediaQuery";
import Header from "../../components/Header";
import DriveFolderUploadOutlinedIcon from "@mui/icons-material/DriveFolderUploadOutlined";
import { Select, MenuItem } from "@mui/material";
import { ToastContainer, toast,Zoom } from 'react-toastify';
import { InputAdornment } from "@mui/material";
import { useNavigate } from 'react-router-dom';
import 'react-toastify/dist/ReactToastify.css';
const Form = () => {
const isNonMobile = useMediaQuery("(min-width:600px)");
const [file, setFile] = useState("");
const[title,setTitle]=useState("");
const [startday,setStarday]=useState("");
const [description,setDescription]=useState("");
const [duration,setDuration]=useState(0);
const[location,setLocation]=useState("");
const[lat,setLat]=useState(0);
const[long,setLong]=useState(0);
const[paipers,setPaipers]=useState("");
const[places,setPlaces]=useState(0);
const[price,setPrice]=useState(0);
const navigate=useNavigate()
const successNot = () => {
  toast.success('🦄 Your Notification is sent successfully!', {
    position: "top-center",
    autoClose: 3000,
    hideProgressBar: true,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "colored",
    transition: Bounce,
  });
}
const add =()=>{
  const obj ={
      title:title,
      startday:startday,
      description:description,
      duration:duration,
      location:location,
      lat:lat,
      long:long,
      paipers:paipers,
      places:places,
      price:price,
  }
  axios.post("http://localhost:3001/userProvider/createoffer",obj)
  .then (()=>{successNot()})
  .catch ((error)=>{console.log(error)})
}
  return (
    <Box m="20px">
      <Header title="CREATE OFFER" subtitle="Create a New Offer" />
      <ToastContainer transition={Zoom} autoClose={8000} />
      <div className="left" style={{ flex: 1, textAlign: "center" }}>
    <img
  src={
    file
      ? URL.createObjectURL(file)
      : "https://icon-library.com/images/no-image-icon/no-image-icon-0.jpg"
  }
  alt=""
  style={{
    width: "100px",
    height: "100px",
    borderRadius: "50%",
    objectFit: "cover",
    marginLeft:"-950px",
  }}
/>

          </div>
          <div className="right" style={{ flex: 2 }}>
  <form style={{ display: "flex", flexWrap: "wrap", gap: "30px", justifyContent: "space-around" }}>
    <div className="formInput" style={{ width: "40%" }}>
      <label htmlFor="file" style={{ display: "flex", gap: "10px",marginLeft:"-300px" }}>
        Image: <DriveFolderUploadOutlinedIcon className="icon" style={{ cursor: "pointer" ,marginLeft:"-300px"}} />
      </label>
      <input
        type="file"
        id="file"
        onChange={(e) => setFile(e.target.files[0])}
        style={{ width: "100%", padding: "5px", border: "none", borderBottom: "1px solid gray" ,marginLeft:"-300px"}}
      />
    </div>
  </form>
</div>

      <Formik
        initialValues={initialValues}
        validationSchema={checkoutSchema}
      >
        {({
          errors,
          touched,
          handleBlur,
          handleSubmit,
        }) => (
          <form onSubmit={handleSubmit} style={{ marginTop: "20px" }}>
                        <Box
                            display="grid"
                            gap="30px"
                            gridTemplateColumns="repeat(4, minmax(0, 1fr))"
                            sx={{
                                "& > div": { gridColumn: isNonMobile ? undefined : "span 4" },
                            }}
                        >
                            <TextField
                                fullWidth
                                variant="filled"
                                type="text"
                                label="Title"
                                onBlur={handleBlur}
                                onChange={(e) => { setTitle(e.target.value) }}
                                value={title}
                                name="Title"
                                error={!!touched.firstName && !!errors.firstName}
                                helperText={touched.firstName && errors.firstName}
                                sx={{ gridColumn: "span 2" }}
                            />
                            <TextField
                                fullWidth
                                variant="filled"
                                type="text"
                                label="Starday"
                                onBlur={handleBlur}
                                onChange={(e) => { setStarday(e.target.value) }}
                                name="Starday"
                                error={!!touched.lastName && !!errors.lastName}
                                helperText={touched.lastName && errors.lastName}
                                sx={{ gridColumn: "span 2" }}
                            />
              <TextField
                fullWidth
                variant="filled"
                type="text"
                label="Description"
                onBlur={handleBlur}
                onChange={(e)=>{setDescription(e.target.value)}}
                value={description}
                name="Description"
                error={!!touched.email && !!errors.email}
                helperText={touched.email && errors.email}
                sx={{ gridColumn: "span 4" }}
              />
              <TextField
                fullWidth
                variant="filled"
                type="text"
                label="Duration"
                onBlur={handleBlur}
                onChange={(e)=>{setDuration(e.target.value)}}
                name="Duration"
                error={!!touched.contact && !!errors.contact}
                helperText={touched.contact && errors.contact}
                sx={{ gridColumn: "span 4" }}
              />
              <TextField
                fullWidth
                variant="filled"
                type="text"
                label="Location"
                onBlur={handleBlur}
                onChange={(e)=>{setLocation(e.target.value)}}
                name="Location"
                error={!!touched.address1 && !!errors.address1}
                helperText={touched.address1 && errors.address1}
                sx={{ gridColumn: "span 4" }}
                onc
              />
<TextField
  fullWidth
  variant="filled"
  type="text"
  label="Cordinates"
  onBlur={handleBlur}
  onChange={(e) => { setLocation(e.target.value) }}
  name="Location"
  error={!!touched.address1 && !!errors.address1}
  helperText={touched.address1 && errors.address1}
  sx={{ gridColumn: "span 4" }}
  InputProps={{
    endAdornment: (
      <InputAdornment position="end">
        <Button onClick={() => navigate("/Map")} variant="contained">Map</Button>
      </InputAdornment>
    )
  }}
/>
              <TextField
                fullWidth
                variant="filled"
                type="text"
                label="Paipers"
                onBlur={handleBlur}
                onChange={(e)=>{setPaipers(e.target.value)}}
                name="Paipers"
                error={!!touched.address1 && !!errors.address1}
                helperText={touched.address1 && errors.address1}
                sx={{ gridColumn: "span 4" }}
                onc
              />
              <TextField
                fullWidth
                variant="filled"
                type="text"
                label="Places"
                onBlur={handleBlur}
                onChange={(e)=>{setPlaces(e.target.value)}}
                name="Places"
                error={!!touched.address1 && !!errors.address1}
                helperText={touched.address1 && errors.address1}
                sx={{ gridColumn: "span 4" }}
                onc
              />
              <TextField
                fullWidth
                variant="filled"
                type="text"
                label="Price"
                onBlur={handleBlur}
                onChange={(e)=>{setPrice(e.target.value)}}
                name="Price"
                error={!!touched.address1 && !!errors.address1}
                helperText={touched.address1 && errors.address1}
                sx={{ gridColumn: "span 4" }}
                onc
              />
            </Box>
            <Select
  fullWidth
  onBlur={handleBlur}
  name="maincategory"
  error={!!touched.maincategory && !!errors.maincategory}
  sx={{ gridColumn: "span 4" }}
>
  <MenuItem value={1}>Sport</MenuItem>
  <MenuItem value={2}> Music</MenuItem>
  <MenuItem value={2}> Art</MenuItem>
  <MenuItem value={2}> Food</MenuItem>
</Select>
<Select
  fullWidth
  onBlur={handleBlur}
  name="maincategory"
  error={!!touched.maincategory && !!errors.maincategory}
  sx={{ gridColumn: "span 2" }}
>
  <MenuItem value={1}>SOLO</MenuItem>
  <MenuItem value={2}>Couple</MenuItem>
  <MenuItem value={2}>Group</MenuItem>
</Select>

            <Box display="flex" justifyContent="end" mt="20px">
              <Button type="submit" color="secondary" variant="contained"
              onClick={()=>{navigate('/team')}}>
                Create New offer
              </Button>
            </Box>
          </form>
        )}
      </Formik>
    </Box>
  );
};

const phoneRegExp =
  /^((\+[1-9]{1,4}[ -]?)|(\([0-9]{2,3}\)[ -]?)|([0-9]{2,4})[ -]?)*?[0-9]{3,4}[ -]?[0-9]{3,4}$/;
const checkoutSchema = yup.object().shape({
  title: yup.string().required("required"),
  startday: yup.string().required("required"),
  duration: yup.string().required("required"),
  location: yup.string().required("required"),
  lat: yup.string().required("required"),
  long: yup.string().required("required"),
  paipers: yup.string().required("required"),
  places: yup.string().required("required"),
});
const initialValues = {
  title: "",
  startday: "",
  duration: "",
  location: "",
  lat: "",
  long:"",
  paipers:"",
  places:""
};

export default Form;
