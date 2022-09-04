const Notifications = ({ message }) => {

  const styles = {
    backgroundColor: 'lightGray',
    display: 'flex',
    width: '80%',
    height: '80px',
    borderRadius: '5px',
    border: '2px solid green',
    color: 'green',
    alignItems: 'center',
    justifyContent: 'center'
  }

  if (message === null) {
    return null;
  }


  return (
    <div style={message.type === 'error' ? { ...styles, color: 'red' } : styles}>
      <h1 class="notificationClass">{message.message}</h1>
    </div >
  )
}

export default Notifications;
