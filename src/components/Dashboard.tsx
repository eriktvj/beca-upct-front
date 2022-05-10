import Header from "./Header"
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { Box, Container, Divider, Typography } from "@mui/material";
import Footer from "./Footer";

const theme = createTheme();

export default function Dashboard(){
    return(
        <ThemeProvider theme={theme}>
        <Header/>
        <Box sx={{bgcolor: 'background.paper', pt: 8, pb: 6}}>
            <Container maxWidth="sm">
                <Typography
                    component="h1"
                    variant="h2"
                    align="center"
                    color="text.primary"
                    gutterBottom
                >Bienvenido</Typography>
                <br/>
                <Divider/>
                <br/>
                <Typography variant="h5" align="justify" color="text.secondary" paragraph>
                Bienvenido al Dashboard del proyecto. Este proyecto está relacionado a una beca de investigación
                de la Universidad Politécnica de Cartagena, dirigida por el Dr. Alejandro Santos Martínez Sala, y
                realizada por el docente Erik García Hoyberg. De momento, puede utilizar el menú desplegable para ver
                la última posición tomada de los dispositivos, así como todos los resultados tomados. Próximamente,
                se añadirá la funcionalidad de denominar una región geográfica a la cual se conoce como "GeoFence",
                que servirá para notificar al usuario cuando se encuentré en ella y escaneé por BLE un dispositivo.
                </Typography>
            </Container>
        </Box>
        <Footer/>
        </ThemeProvider>
    )
}