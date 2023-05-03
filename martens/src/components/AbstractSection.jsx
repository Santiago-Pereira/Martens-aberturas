import {  Container,  Typography } from '@mui/material'


export default function AbstractSection() {
    return (
        <div>
            <Container id="oportunidades" className="mb-5" maxWidth="xl">
                {/* Llamo al componente FeaturedItemListContainer y le paso parámetros que luego se leen como props.greeting y props.dataSrc.  */}
            </Container>
            <Container className="servicios" maxWidth="xl">
                <div className="nuestrosServicios">
                    <Typography variant="h3">Fabricamos aberturas. Trabajos a medida</Typography>
                    <Typography variant="body1" className="d-block mb-3 ss">Cerramientos</Typography>
                    <Typography variant="body1" className="d-block mb-3 ss">Puertas de ingresos automáticas</Typography>
                    <Typography variant="body1" className="d-block mb-3 ss">Soluciones en chapas</Typography>
                    <Typography variant="body1" className="d-block mb-3 ss">Escaleras</Typography>
                    <Typography variant="body1" className="d-block mb-3 ss">Vidrios - espejos - vidrieras</Typography>
                    <Typography variant="body1" className="d-block mb-3 ss">Trabajos en ciudad y campo</Typography>
                </div>
            </Container>
        </div>
    )

}