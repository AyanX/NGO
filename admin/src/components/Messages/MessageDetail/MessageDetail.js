import { memo, useCallback } from 'react';
import { Trash } from 'lucide-react';
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
        <h3>Subject: {message.subject}</h3>
        <p>{message.message}</p>
      </div>

      <div className="message-detail-actions">
        <button className="reply-button">
          <svg width="20" height="20" viewBox="0 0 20 20" fill="currentColor">
            <path d="M9.5 4.5L4 10l5.5 5.5M4.5 10h11"/>
          </svg>
          Reply
        </button>
        <button className="mark-read-button" onClick={handleMarkAsRead}>
          <svg width="20" height="20" viewBox="0 0 20 20" fill="currentColor">
            <path d="M2 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V4zm2-1a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1H4zm9.854 4.854l-5 5a.5.5 0 0 1-.708 0l-2-2a.5.5 0 0 1 .708-.708L8.5 11.793l4.646-4.647a.5.5 0 0 1 .708.708z"/>
          </svg>
          Mark as {message.read ? 'Unread' : 'Read'}
        </button>
      </div>
    </div>
  );
});

export default MessageDetail;
