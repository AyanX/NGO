import { memo, useCallback } from 'react';
import { CheckCheck, Trash } from 'lucide-react';
const MessageDetail = memo(function MessageDetail({ message, onDelete, onMarkAsRead, onBack }) {
  const handleDelete = useCallback(() => {
    onDelete(message.id);
  }, [message.id, onDelete]);

  const handleMarkAsRead = useCallback(() => {
    onMarkAsRead(message.id, message.read);
  }, [message.id, message.read, onMarkAsRead]);

  return (
    <div className="message-detail">
      <div className="message-detail-header-mobile">
        <button className="back-button" onClick={onBack} aria-label="Go back">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
            <path d="M15 18L9 12L15 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </button>
        <h2>Message Details</h2>
      </div>

      <div className="message-detail-header">
        <div className="message-detail-info">
          <div className="message-detail-name-row">
            <h2>{message.name}</h2>
          </div>
          <p className="message-detail-email">{message.email}</p>
          <p className="message-detail-date">{message.date}</p>
        </div>
        <button className="delete-button" onClick={handleDelete}>
          <Trash size={20} />
        </button>
      </div>

      <div className="message-detail-content">
        <h3>{message.subject}</h3>
        <p>{message.message}</p>
      </div>

      <div className="message-detail-actions">
        <button className="mark-read-button" onClick={handleMarkAsRead}>
          <CheckCheck size={20} />
          Mark as {message.read ? 'Unread' : 'Read'}
        </button>
      </div>
    </div>
  );
});

export default MessageDetail;
