const MyMessage = ({ message }) => {
    if(message?.attachment?.length > 0) {
        return (
            <img
                src={message.attachments[0].file}
                alt="message-attachment"
                className="message-image"
                style={{ flaot: 'right' }}
            />
        )
    }
    return (
        <div className="message" style={{ float: 'right', marginRight: '18px', color: '#111111', backgroundColor: '#8cfd7e', border: '1px solid grey', borderRadius: '5px' }}>
            {message.text}
        </div>
    );
}

export default MyMessage;