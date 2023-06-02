import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import MailIcon from "@mui/icons-material/Mail";
import Typography from "@mui/material/Typography";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { Container, Snackbar, Alert, AlertTitle } from "@mui/material";

const theme = createTheme();

export default function Form() {
  const form = useRef(null);

  const [open, setOpen] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_hid7rop",
        "template_e4h0pyg",
        form.current,
        "HY36OVbTtstdhpeyX"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    form.current.reset();
  };

  return (
    <Container>
      <section
        data-aos="fade-up"
        data-aos-offset="200"
        data-aos-delay="50"
        data-aos-duration="1000"
        data-aos-easing="ease-in-out"
        data-aos-once="true"
        id="contact"
      >
        <Box sx={{ paddingY: "2rem ", maxWidth: "100%" }}>
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
                    "url(https://res.cloudinary.com/dmatgvjjy/image/upload/v1684438151/martens/1_1_imnrxw.jpg)",
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
                    onSubmit={sendEmail}
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
                      onClick={() => setOpen(true)}
                    >
                      ENVIAR
                    </Button>
                    <Snackbar
                      open={open}
                      autoHideDuration={2000}
                      onClose={() => setOpen(false)}
                      sx={{ bottom: 0, alignItems: "center" }}
                    >
                      <Alert severity="success">
                        <AlertTitle>Enviado</AlertTitle>
                        Su mensaje ha sido enviado con éxito
                      </Alert>
                    </Snackbar>
                  </Box>
                </Box>
              </Grid>
            </Grid>
          </ThemeProvider>
        </Box>
      </section>
    </Container>
  );
}
