import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import IconButton from "@mui/material/IconButton";
const WhatsAppBtn = () => {
  return (
    <a
      target="_blank"
      rel="noreferrer noopeper"
      href="https://wa.me/+5492494588210"
    >
      <IconButton className="btn-wpp">
        <WhatsAppIcon
          sx={{ color: "#ffff", fontSize: "2rem" }}
          className="shadow-btn"
        />
      </IconButton>
    </a>
  );
};
export default WhatsAppBtn;
