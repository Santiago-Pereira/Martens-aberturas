import { Container, Grid, Typography } from '@mui/material'
import Grid2 from '@mui/material/Unstable_Grid2/Grid2'
import React from 'react'

export default function AboutUsSection() {
    return (
            <Container sx={{backgroundColor:'red'}}>
                <Grid2 container spacing={2} >
                        <Grid2 xs={12} md={6} sx={{padding:'2rem'}}>
                            <img
                                src={
                                    "https://res.cloudinary.com/dmatgvjjy/image/upload/v1682810418/martens/Captura_desde_2023-04-29_20-20-09_ehbz5y.png"
                                }
                                alt="martens-historia"
                                loading='lazy'
                                width={400}
                            />
                        </Grid2>
                        <Grid2 xs={12} md={6}>
        <Typography variant="body1" color="initial">Bienvenidos a Martens Todo en Aberturas, una empresa familiar con más de 30 años de experiencia en la ciudad de Tandil. 
        Desde nuestros comienzos nos hemos dedicado a la fabricación, venta e instalación de todo tipo de aberturas para hogares, comercios y edificios.
      
        En Martens Todo en Aberturas, nuestra prioridad es satisfacer las necesidades y deseos de nuestros clientes, brindándoles soluciones a medida para cada proyecto. Desde ventanas y puertas de aluminio, hasta aberturas de madera maciza de alta calidad, ofrecemos una amplia variedad de productos y diseños para adaptarnos a cualquier estilo y presupuesto.
        En resumen, en Martens Todo en Aberturas somos una empresa familiar comprometida con la excelencia en todo lo que hacemos. Si estás buscando aberturas de calidad, con un servicio personalizado y una atención al detalle excepcional, no dudes en contactarnos. ¡Estaremos encantados de ayudarte en todo lo que necesites!</Typography>    
                        </Grid2>
                </Grid2>
            </Container>
    )
}
