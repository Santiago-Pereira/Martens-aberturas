import { Grid } from "@mui/material";

export default function Map() {
    return (
        <section
data-aos="fade-up"
data-aos-offset="200"
data-aos-delay="50"
data-aos-duration="1000"
data-aos-easing="ease-in-out"
data-aos-once="true"
>

        <Grid sx={{ display: { xs: "none", sm: "block" } }}>
          <Grid sx={{ display: 'flex',flexDirection:'row',alignItems:'center',justifyContent:'center' }}>
            <iframe style={{ width: "80%", height: "50vh" , padding:'0px 0px', margin:'5rem' ,border:'none', borderRadius:'3px'}} src="https://maps.google.com/maps?width=&amp;height=&amp;hl=en&amp;q=tandil%2C%20Primera%20Junta%20967+(T%C3%ADtulo)&amp;ie=UTF8&amp;t=&amp;z=17&amp;iwloc=B&amp;output=embed">
            </iframe>
        </Grid>
        </Grid>
</section>
    )
}



