import Header from "./Header";
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { Box, Container, Divider, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import getGeoJSONS from "../utils/api";
import { LeafletMap } from "./LocationResult";
import Footer from "./Footer";

const theme = createTheme();

export default function Map(){
    const [geoJson, setGeoJson] = useState<any>();

    useEffect(() => {
        
    const callApi = async () => {
        const apiResult = await getGeoJSONS();
        console.log(apiResult);
        return apiResult;
    }

    const assignApiState = async () => {
        const result = await callApi();
        console.log(result);
        await setGeoJson(result);
    }
    assignApiState();
    }, [])

    if(!geoJson){
        return(
            <div>
            <Header/>
                <div>
                <h1>Page is loading...</h1>
                </div>
            </div>
        )
    }

    return (
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
                >Leaflet Map</Typography>
                <br/>
                <Divider/>
                <br/>
                <Typography variant="h5" align="center" color="text.secondary" paragraph>
                Aquí puedes visualizar la última posición registrada por el dispositivo. En posteriores versiones,
                podrá filtrar por fecha y ubicación.
                </Typography>
            </Container>
            <Container sx={{pt: 3}} maxWidth="md">
                <Box border={3} borderRadius={1}>
                <LeafletMap data={geoJson![geoJson.length-1]}></LeafletMap>
                </Box>
            </Container>
        </Box>
        <Footer/>
        </ThemeProvider>
    )
}