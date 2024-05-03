export function generateCallId(length = 12) {
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let result = '';
  
    for (let i = 0; i < length; i++) {
      const randomIndex = Math.floor(Math.random() * characters.length);
      result += characters.charAt(randomIndex);
    }
  
    return result;
}

export const getCurrentDate = () => {
  const currentDate = new Date();

  const day = currentDate.getDate().toString().padStart(2, '0'); 
  const month = (currentDate.getMonth() + 1).toString().padStart(2, '0'); 
  const year = currentDate.getFullYear();

  const formattedDate = `${day}/${month}/${year}`;

  return formattedDate
}

export const getCurrentTime = () => {
  const currentDate = new Date();
  let hours = currentDate.getHours();
  const minutes = currentDate.getMinutes().toString().padStart(2, '0'); // Add leading zero if needed
  const seconds = currentDate.getSeconds().toString().padStart(2, '0'); // Add leading zero if needed

  const ampm = hours >= 12 ? 'PM' : 'AM';
  hours %= 12;
  hours = hours || 12; 

  const formattedTime = `${hours}:${minutes}:${seconds} ${ampm}`;

  return formattedTime
}