import {  Box, Container,  Typography } from '@mui/material'


export default function AbstractSection() {
    return (
                <Container className="servicios" maxWidth="xl" >
                <Box sx={{color:'whitesmoke',textAlign:'center',display:'flex',flexDirection:"column", justifyContent:'center',alignItems:'center'}}>
                    <Typography variant="h4">Somos Fabricantes de aberturas.</Typography>
                    <Typography variant="h4" sx={{paddingBottom:"3rem"}}>Realizamos trabajos a medida</Typography>
                    <Typography variant="h6">Cerramientos</Typography>
                    <Typography variant="h6">Puertas de ingresos automáticas</Typography>
                    <Typography variant="h6">Soluciones en chapas</Typography>
                    <Typography variant="h6">Escaleras</Typography>
                    <Typography variant="h6">Vidrios - espejos - vidrieras</Typography>
                    <Typography variant="h6">Trabajos en ciudad y campo</Typography>
                </Box>
            </Container>
    )

}