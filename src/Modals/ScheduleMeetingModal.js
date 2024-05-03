import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import CloseIcon from '@mui/icons-material/Close';
import { generateCallId } from '../utils/utils';
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
  backgroundColor:'#161925',
  color:'white',
  display:'flex',
  flexDirection:'column',
  gap:'1rem',
  borderRadius:'0.5rem',
  border:'none',
};


export default function ScheduleMeetingModal() {
  const {openScheduleMeetingModal,setOpenScheduleMeetingModal,setUpcomingMeetings} = React.useContext(ZoomContext);

  const dateTimeRef = React.useRef(null);
  const descRef = React.useRef(null);

  const handleClose = () => setOpenScheduleMeetingModal(false);

  const addIntoUpcomingMeetings = () => {
    const meetingId = generateCallId();
    const dateTime = dateTimeRef.current.value;
    const description = descRef.current.value;
    setUpcomingMeetings((prev) => {
        return [...prev, {meetingId: meetingId, dateTime: dateTime, decsription: description}]
    })
  }

  const handleStartMeetingClick = (e) => {
    e.preventDefault()
    handleClose() //close modal

    addIntoUpcomingMeetings()
  }

  return (
    <div>
      <Modal
        open={openScheduleMeetingModal}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <button onClick={()=>handleClose()} className='close-btn absolute right-2 top-2 text-gray-400 cursor-pointer'>
            <CloseIcon />
          </button>
          
          <Typography className='text-center' id="modal-modal-title" variant="h6" component="h2">
            Create Meeting
          </Typography>

          <form className='flex flex-col gap-4'>
            <label>Add a description</label>
            <textarea ref={descRef} className='bg-[#252a41] p-2 rounded-md h-20' placeholder='Write description...'></textarea>
            <label>Select Date and Time</label>
            <input ref={dateTimeRef} className='p-2 rounded-md text-black' type='datetime-local' />
            <button onClick={(e) => handleStartMeetingClick(e)} style={{backgroundColor:'#0E78F9'}} className='start-meeting text-white px-4 py-2 rounded-lg'>Schedule Meeting</button>
          </form>

        </Box>
      </Modal>
    </div>
  );
}


