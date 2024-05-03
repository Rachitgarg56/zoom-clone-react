import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import CloseIcon from '@mui/icons-material/Close';
import { useNavigate } from 'react-router-dom';
import { ZoomContext } from '../App';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  boxShadow: 24,
  p: 4,
  backgroundColor:'#1c1f2e',
  color:'white',
  display:'flex',
  flexDirection:'column',
  gap:'1rem',
  borderRadius:'0.5rem',
  border:'none',
};


export default function JoinMeetingModal() {
  const {openJoinMeetingModal,setOpenJoinMeetingModal} = React.useContext(ZoomContext);

  const inputRef = React.useRef(null);

  const handleClose = () => setOpenJoinMeetingModal(false);

  const navigate = useNavigate();

  const isValidInput = () => {
    const input = inputRef.current.value;
    if (input !== '') return true
    return false
  }
  
  const handleJoinMeetingClick = async () => {
    const input = inputRef.current.value;

    if (isValidInput()) {
      navigate(`/meeting/${input}`)
      handleClose()
    } else {
      alert('Incorrect meeting link')
    }

  }

  return (
    <div>
      <Modal
        open={openJoinMeetingModal}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <button onClick={()=>handleClose()} className='close-btn absolute right-2 top-2 text-gray-400 cursor-pointer'>
            <CloseIcon />
          </button>
          
          <Typography className='text-center' id="modal-modal-title" variant="h6" component="h2">
            Paste Meeting Link
          </Typography>

          <input ref={inputRef} type='text' placeholder='Meeting Link...' className='meeting-link-input text-black px-4 py-2 rounded-lg' />

          <button onClick={handleJoinMeetingClick} style={{backgroundColor:'#0E78F9'}} className='start-meeting text-white px-4 py-2 rounded-lg'>Join Meeting</button>
        </Box>
      </Modal>
    </div>
  );
}

