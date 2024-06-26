import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import CloseIcon from '@mui/icons-material/Close';
import { useNavigate } from 'react-router-dom';
import { generateCallId } from '../utils/utils';
import { ZoomContext } from '../App';
import { getCurrentDate, getCurrentTime } from '../utils/utils'

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

// let meetingId;

export default function NewMeetingModal() {
  const {openNewMeetingModal,setOpenNewMeetingModal,setPreviousMeetings} = React.useContext(ZoomContext);

  const handleClose = () => setOpenNewMeetingModal(false);

  const navigate = useNavigate();

  const addIntoPreviousMeetings = () => {

    const currentDate = getCurrentDate();
    const currentTime = getCurrentTime();

    setPreviousMeetings((prev) => {
      return [...prev, {date: currentDate, time: currentTime}]
    })
  }

  const handleStartMeetingClick = () => {
    handleClose() //close modal
    const meetingId = generateCallId();
    navigate(`/meeting/${meetingId}`) //navigate to newMeeting Page

    addIntoPreviousMeetings()
  }

  return (
    <div>
      <Modal
        open={openNewMeetingModal}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <button onClick={()=>handleClose()} className='close-btn absolute right-2 top-2 text-gray-400 cursor-pointer'>
            <CloseIcon />
          </button>
          
          <Typography className='text-center' id="modal-modal-title" variant="h6" component="h2">
            Start an Instant Meeting
          </Typography>

          <button onClick={handleStartMeetingClick} style={{backgroundColor:'#0E78F9'}} className='start-meeting text-white px-4 py-2 rounded-lg'>Start Meeting</button>
        </Box>
      </Modal>
    </div>
  );
}

// export {meetingId}

