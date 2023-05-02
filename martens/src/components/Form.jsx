import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
// import FormControlLabel from '@mui/material/FormControlLabel';
// import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import MailIcon from '@mui/icons-material/Mail';
import Typography from '@mui/material/Typography';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import React, { useRef } from "react";
import emailjs from "@emailjs/browser";

// function Copyright(props) {
//   return (
//     <Typography variant="body2" color="text.secondary" align="center" {...props}>
//       {'Copyright © '}
//       <Link color="inherit" href="https://mui.com/">
//         Your Website
//       </Link>{' '}
//       {new Date().getFullYear()}
//       {'.'}
//     </Typography>
//   );
// }

const theme = createTheme();

export default function Form() {

  const form = useRef(null);

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        'YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', form.current, 'YOUR_PUBLIC_KEY'
      )
      .then(
        (result) => {
          console.log(result.text);
          alertMsj();
        },
        (error) => {
          console.log(error.text);
        }
      );
    form.current.reset();
    // const handleSubmit = (event) => {
    //   event.preventDefault();
    //   const data = new FormData(event.currentTarget);
    //   console.log({
    //     email: data.get('email'),
    //     password: data.get('password'),
    //   });
    // };
  }
  return (
    <ThemeProvider theme={theme}>
      <Grid container component="div" sx={{ height: '100vh' }}>
        <CssBaseline />
        <Grid
          item
          xs={false}
          sm={4}
          md={4}
          sx={{
            backgroundImage: 'url(https://source.unsplash.com/random)',
            backgroundRepeat: 'no-repeat',
            backgroundColor: (t) =>
              t.palette.mode === 'light' ? t.palette.grey[50] : t.palette.grey[900],
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />
        <Grid item xs={12} sm={8} md={8} component={Paper} elevation={6} square>
          <Box
            sx={{
              my: 8,
              mx: 4,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}
          >
            <Avatar sx={{ m: 1, bgcolor: 'darkblue' }}>
              <MailIcon />
            </Avatar>
            <Typography component="h3" variant="h5">
              Contactanos
            </Typography>
            <Box component="form" ref={form} noValidate onSubmit={sendEmail} sx={{ mt: 1 }}>
              <TextField
                margin="normal"
                required
                fullWidth
                id="user_name"
                label="Ingrese su nombre"
                type="text"
                name="user_name"
                autoComplete="name"
                autoFocus
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
                autoFocus
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
                defaultValue="Dejanos tu mensaje"
              />
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}

              >
                ENVIAR
              </Button>

              {/* <Copyright sx={{ mt: 5 }} />   */}
            </Box>
          </Box>
        </Grid>
      </Grid>
    </ThemeProvider>
  )
};
