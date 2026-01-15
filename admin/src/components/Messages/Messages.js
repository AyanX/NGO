import { useState, useMemo, useCallback, useEffect } from "react";
import MessageList from "./List/MessageLIst";
import MessageDetail from "./MessageDetail/MessageDetail";
import "./Messages.scss";
import { sectionHeading } from "../utils/utils";
import { useMessages } from "../utils/useMessagesHook";

function Messages() {
  const { data, loading, error } = useMessages();

  const [messages, setMessages] = useState([]);
  const [selectedId, setSelectedId] = useState(null);
  const [filter, setFilter] = useState("all");
  const [deletingIds, setDeletingIds] = useState(new Set());
  const [mobileView, setMobileView] = useState(null);

  const { filteredMessages, unreadCount, totalCount } = useMemo(() => {
    const filtered =
      messages &&
      messages.filter((msg) => {
        const isRead = msg.read === true || msg.read === 1;
        if (filter === "unread") return !isRead;
        if (filter === "read") return isRead;
        return true;
      });

    const unread = messages.filter((msg) => msg.read === false).length;

    return {
      filteredMessages: filtered,
      unreadCount: unread,
      totalCount: messages.length,
    };
  }, [messages, filter]);

  const selectedMessage = useMemo(() => {
    return messages.find((msg) => msg.id === selectedId);
  }, [messages, selectedId]);

  const handleMessageClick = useCallback(async (message) => {
    setSelectedId(message.id);
    setMobileView("detail");

    if (!message.read) {
      try {
        await fetch(`http://localhost:5000/messages/read/${message.id}`, {
          method: "PATCH",
        });

        setMessages((prev) =>
          prev.map((msg) =>
            msg.id === message.id ? { ...msg, read: true } : msg
          )
        );
      } catch (error) {
        console.error("Error marking message as read:", error);
      }
    }
  }, []);

  const handleDelete = useCallback(
    async (id) => {
      setDeletingIds((prev) => new Set(prev).add(id));

      try {
        await fetch(`http://localhost:5000/messages/delete/${id}`, {
          method: "PATCH",
        });

        setTimeout(() => {
          setMessages((prev) => prev.filter((msg) => msg.id !== id));
          setDeletingIds((prev) => {
            const next = new Set(prev);
            next.delete(id);
            return next;
          });

          if (selectedId === id) {
            setSelectedId(null);
            setMobileView(null);
          }
        }, 300);
      } catch (error) {
        console.error("Error deleting message:", error);
        setDeletingIds((prev) => {
          const next = new Set(prev);
          next.delete(id);
          return next;
        });
      }
    },
    [selectedId]
  );

  const handleMarkAsRead = useCallback(async (id, currentReadState) => {
    const newReadState = !currentReadState;

    try {
      await fetch(`http://localhost:5000/messages/read/${id}`, {
        method: "PATCH",
      });

      setMessages((prev) =>
        prev.map((msg) =>
          msg.id === id ? { ...msg, read: newReadState } : msg
        )
      );
    } catch (error) {
      console.error("Error toggling read state:", error);
    }
  }, []);

  const handleBack = useCallback(() => {
    setMobileView(null);
    setSelectedId(null);
  }, []);

  const subHeading = `${unreadCount} unread message${
    unreadCount !== 1 ? "s" : ""
  } • ${totalCount} total`;

  useEffect(() => {
    if (!data) return;

    const normalized = data.map((msg) => ({
      ...msg,
      read: Boolean(msg.read),
      date: msg.createdAt?.split(" ")[0],
    }));

    setMessages(normalized);
  }, [data]);

  if (error) {
    return <div>Error loading messages...</div>;
  }

  if (loading) {
    return <div>Loading messages...</div>;
  }

  return (
    <div style={{height:"100%", }}>
      <div className="messages-intro">
        {sectionHeading("Messages", subHeading)}
        <div className="filter-buttons">
          <button
            className={`filter-btn ${filter === "all" ? "active" : ""}`}
            onClick={() => setFilter("all")}
          >
            All
          </button>
          <button
            className={`filter-btn ${filter === "unread" ? "active" : ""}`}
            onClick={() => setFilter("unread")}
          >
            Unread ({unreadCount})
          </button>
          <button
            className={`filter-btn ${filter === "read" ? "active" : ""}`}
            onClick={() => setFilter("read")}
          >
            Read
          </button>
        </div>
      </div>
      <div className="messages-container">
        <div
          className={`messages-list-section ${
            mobileView === "detail" ? "mobile-hidden" : ""
          }`}
        >
          <MessageList
            messages={filteredMessages}
            selectedId={selectedId}
            onMessageClick={handleMessageClick}
            deletingIds={deletingIds}
          />
        </div>

        <div
          className={`messages-detail-section ${
            mobileView === "detail" ? "mobile-visible" : ""
          }`}
        >
          {selectedMessage ? (
            <MessageDetail
              message={selectedMessage}
              onDelete={handleDelete}
              onMarkAsRead={handleMarkAsRead}
              onBack={handleBack}
            />
          ) : (
            <div className="no-message-selected">
              <p>Select a message to view details</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Messages;
