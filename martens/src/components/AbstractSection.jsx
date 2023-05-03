import {  Box, Container,  Typography } from '@mui/material'


export default function AbstractSection() {
    return (
        <Box>
                    <Container className="servicios" maxWidth="xl">
                <div className="nuestrosServicios">
                    <Typography variant="h3">Somos Fabricantes de aberturas.</Typography>
                    <Typography variant="h3">Realizamos trabajos a medida</Typography>
                    <Typography variant="body1" className="d-block mb-3 ss">Cerramientos</Typography>
                    <Typography variant="body1" className="d-block mb-3 ss">Puertas de ingresos automáticas</Typography>
                    <Typography variant="body1" className="d-block mb-3 ss">Soluciones en chapas</Typography>
                    <Typography variant="body1" className="d-block mb-3 ss">Escaleras</Typography>
                    <Typography variant="body1" className="d-block mb-3 ss">Vidrios - espejos - vidrieras</Typography>
                    <Typography variant="body1" className="d-block mb-3 ss">Trabajos en ciudad y campo</Typography>
                </div>
            </Container>
        </Box>
    )

}