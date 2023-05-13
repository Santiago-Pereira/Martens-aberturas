import Modal from "@mui/material/Modal";
import { Box } from "@mui/material";
import ProductsCard from "/ProductsCard";
import { useState } from "react";

const ModalStyles = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

function CardsModal({ product }) {
  const [ModalOpen, setModalOpen] = useState(false);
  const handleModalOpen = () => setModalOpen(true);
  const handleModalClose = () => setModalOpen(false);
  <ProductsCard handle={handleModalOpen} />;
  return (
    <>
      <Modal
        open={ModalOpen}
        onClose={handleModalClose}
        aria-labelledby="modal-modal-image"
      >
        <Box sx={ModalStyles}>
          <img
            src={product.image}
            loading="lazy"
            alt="producto img"
            id="modal-modal-image"
          />
        </Box>
      </Modal>
    </>
  );
}

export default CardsModal;
