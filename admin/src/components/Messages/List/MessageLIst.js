import { memo } from 'react';
import MessageItem from '../Item/Item';

const MessageList = memo(function MessageList({ messages, selectedId, onMessageClick, deletingIds }) {
  return (
    <div className="message-list">
      {messages.map(message => (
        <MessageItem
          key={message.id}
          message={message}
          isSelected={selectedId === message.id}
          isDeleting={deletingIds.has(message.id)}
          onClick={onMessageClick}
        />
      ))}
    </div>
  );
});

export default MessageList;
