"use client";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import IconButton from "@mui/material/IconButton";
import Link from "next/link";
const WhatsAppBtn = () => {
  return (
    <Link
      target="_blank"
      rel="noreferrer noopener"
      href="https://wa.me/+5492494588210"
      className="btn-wpp"
    >
      <IconButton>
        <WhatsAppIcon sx={{ color: "white", fontSize: "2rem" }} />
      </IconButton>
    </Link>
  );
};
export default WhatsAppBtn;
