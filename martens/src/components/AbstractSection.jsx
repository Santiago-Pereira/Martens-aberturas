import {  Box, Container,  Typography } from '@mui/material'


export default function AbstractSection() {
    return (
                <Container className="servicios" maxWidth="xl" sx={{textAlign:'center'}}>
                <Box>
                    <Typography variant="h3">Somos Fabricantes de aberturas.</Typography>
                    <Typography variant="h3">Realizamos trabajos a medida</Typography>
                    <Typography variant="body1">Cerramientos</Typography>
                    <Typography variant="body1">Puertas de ingresos automáticas</Typography>
                    <Typography variant="body1">Soluciones en chapas</Typography>
                    <Typography variant="body1">Escaleras</Typography>
                    <Typography variant="body1">Vidrios - espejos - vidrieras</Typography>
                    <Typography variant="body1">Trabajos en ciudad y campo</Typography>
                </Box>
            </Container>
    )

}