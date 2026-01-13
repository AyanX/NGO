import { useState, useMemo, useCallback } from "react";
import MessageList from "./List/MessageLIst";
import MessageDetail from "./MessageDetail/MessageDetail";
import "./Messages.scss";
import { sectionHeading } from "../utils/utils";

const INITIAL_MESSAGES = [
  {
    id: 1,
    name: "Sarah Johnson",
    email: "sarah.j@email.com",
    subject: "Partnership Proposal",
    message:
      "Hello, I represent a tech company interested in partnering with Urban Trickles to provide digital literacy training to communities. We have experience working with NGOs and would love to discuss how we can collaborate to empower more people through technology education.",
    read: false,
    date: "2024-01-15",
  },
  {
    id: 2,
    name: "Michael Chen",
    email: "mchen@company.com",
    subject: "Donation Information",
    message:
      "I would like to make a contribution to support your programs. Could you please provide information about donation options and how the funds are utilized? I am particularly interested in supporting educational initiatives.",
    read: false,
    date: "2024-01-14",
  },
  {
    id: 3,
    name: "Emily Rodriguez",
    email: "emily.r@gmail.com",
    subject: "Volunteer Opportunity",
    message:
      "I am a registered nurse with 5 years of experience and I would love to volunteer for your medical outreach programs. I have weekends available and can commit to at least 6 months. Please let me know how I can get involved.",
    read: true,
    date: "2024-01-13",
  },
  {
    id: 4,
    name: "David Omondi",
    email: "domondi@email.co.ke",
    subject: "General Inquiry",
    message:
      "I came across your organization and I am impressed by the work you do. I would like to learn more about your current projects and how I might be able to contribute either through volunteering or partnerships.",
    read: false,
    date: "2024-01-12",
  },
  {
    id: 5,
    name: "Lisa Thompson",
    email: "lisa.thompson@foundation.org",
    subject: "Grant Opportunity",
    message:
      "Our foundation is offering grants for community development projects. Based on your organization's mission, I believe you would be a strong candidate. The application deadline is next month. Would you be interested in discussing this further?",
    read: true,
    date: "2024-01-11",
  },
  {
    id: 6,
    name: "James Park",
    email: "jpark@tech.com",
    subject: "Workshop Collaboration",
    message:
      "We are planning a technology workshop series and would love to collaborate with your organization. We can provide equipment and trainers. Let us know if this aligns with your goals.",
    read: true,
    date: "2024-01-10",
  },
  {
    id: 7,
    name: "Maria Garcia",
    email: "maria.garcia@edu.org",
    subject: "Student Internship Program",
    message:
      "Our university is looking for internship placements for social work students. Would your organization be open to hosting interns? They would need supervision but can contribute significantly to your projects.",
    read: true,
    date: "2024-01-09",
  },
  {
    id: 8,
    name: "Ahmed Hassan",
    email: "a.hassan@mail.com",
    subject: "Resource Sharing",
    message:
      "I work with a similar organization in another region. I think we could benefit from sharing resources and best practices. Would you be interested in setting up a call to explore collaboration opportunities?",
    read: false,
    date: "2024-01-08",
  },
];

function Messages() {
  const [messages, setMessages] = useState(INITIAL_MESSAGES);
  const [selectedId, setSelectedId] = useState(null);
  const [filter, setFilter] = useState("all");
  const [deletingIds, setDeletingIds] = useState(new Set());
  const [mobileView, setMobileView] = useState(null);

  const { filteredMessages, unreadCount, totalCount } = useMemo(() => {
    const filtered = messages.filter((msg) => {
      if (filter === "unread") return !msg.read;
      if (filter === "read") return msg.read;
      return true;
    });

    const unread = messages.filter((msg) => !msg.read).length;

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

  return (
    <>
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
    </>
  );
}

export default Messages;
