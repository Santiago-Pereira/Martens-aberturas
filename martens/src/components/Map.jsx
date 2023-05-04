import { Grid } from "@mui/material";

export default function Map() {
    return (
        <Grid sx={{ display: { xs: "none", sm: "block" } }}>
            <iframe style={{ width: "100%", height: "100vh" }} src="https://maps.google.com/maps?width=&amp;height=&amp;hl=en&amp;q=tandil%2C%20Primera%20Junta%20967+(T%C3%ADtulo)&amp;ie=UTF8&amp;t=&amp;z=17&amp;iwloc=B&amp;output=embed">
            </iframe>
        </Grid>
    )
}



