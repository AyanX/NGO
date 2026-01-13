import { memo, useCallback } from 'react';

const MessageItem = memo(function MessageItem({ message, isSelected, isDeleting, onClick }) {
  const handleClick = useCallback(() => {
    onClick(message);
  }, [message, onClick]);

  return (
    <div
      className={`message-item ${isSelected ? 'selected' : ''} ${isDeleting ? 'deleting' : ''}`}
      onClick={handleClick}
    >
      <div className="message-item-header">
        <div className="message-item-name">
          {!message.read && <span className="unread-indicator"></span>}
          {message.name}
        </div>
        <span className="message-item-date">{message.date}</span>
      </div>
      <div className="message-item-email">{message.email}</div>
      <div className={`message-item-subject ${!message.read ? 'unread' : ''}`}>
        {message.subject}
      </div>
    </div>
  );
}, (prevProps, nextProps) => {
  return (
    prevProps.message.id === nextProps.message.id &&
    prevProps.message.read === nextProps.message.read &&
    prevProps.isSelected === nextProps.isSelected &&
    prevProps.isDeleting === nextProps.isDeleting
  );
});

export default MessageItem;
