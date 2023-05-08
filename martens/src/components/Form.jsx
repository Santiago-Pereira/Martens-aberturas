import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
// import FormControlLabel from '@mui/material/FormControlLabel';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import MailIcon from '@mui/icons-material/Mail';
import Typography from '@mui/material/Typography';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import { Container } from "@mui/material";
import Snackbar from '@mui/material/Snackbar';
import Stack from '@mui/material/Stack';

const theme = createTheme();


export default function Form() {
  const form = useRef(null);

  const [state, setState] = React.useState({
    open: false,
    vertical: 'top',
    horizontal: 'center',
  });
  const { vertical, horizontal, open } = state;

  const handleClick = (newState) => () => {
    setState({ open: true, ...newState });
  };

  const handleClose = () => {
    setState({ ...state, open: false });
  };
 
  const buttons = (
    <React.Fragment>
      <Button
        onClick={handleClick({
          vertical: 'bottom',
          horizontal: 'center',
        })}
      >
        Top-Center
      </Button>
      </React.Fragment>
       );

  const alertPopUp =()=>{
    return(
      <div>
      {buttons}
      <Snackbar
        anchorOrigin={{ vertical, horizontal }}
        open={open}
        onClose={handleClose}
        message="I love snacks"
        key={vertical + horizontal}
      />
    </div>
    )
  }

  // const sendEmail = (e) => {
  //   e.preventDefault();
  //   emailjs
  //     .sendForm(
  //       'service_hid7rop', 'template_e4h0pyg', form.current, 'HY36OVbTtstdhpeyX'
  //     )
  //     .then(
  //       (result) => {
  //         console.log(result.text);
          
  //       },
  //       (error) => {
  //         console.log(error.text);
  //       }
  //     );
  //   form.current.reset();
  //   alertPopUp()
  // };

  const send = (e) => {
    e.preventDefault();
    form.current.reset();
    alertPopUp()
  };
  return (
    <Box sx={{ backgroundColor: "lightgrey" ,padding:'2rem 0'}}>
      <Container>
        <ThemeProvider theme={theme}>
          <Grid container component="div">
            <CssBaseline />
            <Grid
              item
              xs={false}
              sm={false}
              md={5}
              sx={{
                backgroundImage:
                  "url(https://res.cloudinary.com/dmatgvjjy/image/upload/v1683062269/martens/burst-kUqqaRjJuw0-unsplash_pwanae.jpg)",
                backgroundRepeat: "no-repeat",
                backgroundColor: (t) =>
                  t.palette.mode === "light"
                    ? t.palette.grey[50]
                    : t.palette.grey[900],
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
              component={Paper}
              elevation={6}
            />
            <Grid
              item
              xs={12}
              sm={12}
              md={7}
              component={Paper}
              elevation={6}
              square
            >
              <Box
                sx={{
                  my: 8,
                  mx: 4,
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                }}
              >
                <Avatar sx={{ m: 1, bgcolor: "darkblue" }}>
                  <MailIcon />
                </Avatar>
                <Typography component="h3" variant="h5">
                  Contactanos
                </Typography>
                <Box
                  component="form"
                  ref={form}
                  noValidate
                  onSubmit={send}
                  sx={{ mt: 1 }}
                >
                  <TextField
                    margin="normal"
                    required
                    fullWidth
                    id="user_name"
                    label="Ingrese su nombre"
                    type="text"
                    name="user_name"
                    autoComplete="name"
               
                  />
                  <TextField
                    margin="normal"
                    required
                    fullWidth
                    name="user_tel"
                    label="Ingrese su teléfono"
                    type="tel"
                    id="user_tel"
                    autoComplete="current-tel"
                  />
                  <TextField
                    margin="normal"
                    required
                    fullWidth
                    id="user_email"
                    label="Ingrese su email"
                    name="user_email"
                    autoComplete="email"   
                  />
                  <TextField
                    margin="normal"
                    required
                    fullWidth
                    id="message"
                    label="Mensaje"
                    multiline
                    name="message"
                    rows={4}

                  />
                  <Button
                    type="submit"
                    fullWidth
                    variant="contained"
                    sx={{ mt: 3, mb: 2 }}
                  >
                    ENVIAR
                  </Button>
                </Box>
              </Box>
            </Grid>
          </Grid>
        </ThemeProvider>
      </Container>
    </Box>
  );
}

