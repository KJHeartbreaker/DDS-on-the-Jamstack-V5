import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import PortableText from '../portableText';
import SwipeableTextMobileStepper from '../Carousel/Carousel';
import Figure from '../Figure/Figure';
import { CopySide, MediaSide, ModalLayout } from './Modal.styles';
import { grid } from '@mui/system';

const style = {
  position: 'absolute' as 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: '50%',
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
  display: 'grid',
  gridTemplateColumns: '40% 1fr',
};

export default function BasicModal({ equipment }) {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const { title, tagline, images } = equipment


  return (
    <div>
      <Button onClick={handleOpen}>Read More...</Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <CopySide>
            {title && <h2>{title}</h2>}
            {tagline && <PortableText blocks={tagline.portableTextBlock} />}
          </CopySide>
          <MediaSide>
            {images.length > 1 ? (
              <SwipeableTextMobileStepper images={images} />
            ) : <Figure
              asset={images[0].asset}
              alt={images[0].alt}
              {...images[0]}
            />}
          </MediaSide>
        </Box>
      </Modal>
    </div>
  );
}
