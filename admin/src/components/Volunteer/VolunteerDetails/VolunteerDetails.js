import { Mail, Phone, MapPin, User, Star, Calendar, Briefcase, Trash2, Check, X, ArrowLeft, Users } from 'lucide-react';
import './VolunteerDetails.scss';

function VolunteerDetails({ volunteer, onApprove, onReject, onDelete, onBack }) {
  if (!volunteer) {
    return (
      <div className="volunteer-details empty">
        <div className="empty-state">
          <Users size={64} strokeWidth={1.5} />
          <h2>No Volunteer Selected</h2>
          <p>Select a volunteer from the list to view their application</p>
        </div>
      </div>
    );
  }

  const getStatusClass = (status) => {
    return `status-badge status-${status}`;
  };

  return (
    <div className="volunteer-details">
      {onBack && (
        <button className="mobile-back-button mobile-only" onClick={onBack}>
          <ArrowLeft size={20} />
          <span>Back</span>
        </button>
      )}

      <div className="details-header">
        <div className="header-content">
          <h2 className="volunteer-name">
            {volunteer.name}
            <span className={getStatusClass(volunteer.status)}>
              {volunteer.status.toUpperCase()}
            </span>
          </h2>
          <p className="applied-date">Applied on {volunteer.appliedDate}</p>
        </div>
        <button className="delete-button" onClick={() => onDelete && onDelete(volunteer.id)}>
          <Trash2 size={18} />
          <span>Delete</span>
        </button>
      </div>

      <div className="details-grid">
        <div className="detail-card">
          <div className="detail-icon">
            <Mail size={20} />
          </div>
          <div className="detail-content">
            <label>Email</label>
            <p>{volunteer.email}</p>
          </div>
        </div>

        <div className="detail-card">
          <div className="detail-icon">
            <Phone size={20} />
          </div>
          <div className="detail-content">
            <label>Phone</label>
            <p>{volunteer.phone}</p>
          </div>
        </div>

        <div className="detail-card">
          <div className="detail-icon">
            <MapPin size={20} />
          </div>
          <div className="detail-content">
            <label>Location</label>
            <p>{volunteer.location}</p>
          </div>
        </div>

        <div className="detail-card">
          <div className="detail-icon">
            <User size={20} />
          </div>
          <div className="detail-content">
            <label>Volunteer Type</label>
            <p>{volunteer.type}</p>
          </div>
        </div>

        <div className="detail-card">
          <div className="detail-icon">
            <Star size={20} />
          </div>
          <div className="detail-content">
            <label>Skills</label>
            <p>{volunteer.skills}</p>
          </div>
        </div>

        <div className="detail-card">
          <div className="detail-icon">
            <Calendar size={20} />
          </div>
          <div className="detail-content">
            <label>Availability</label>
            <p>{volunteer.availability}</p>
          </div>
        </div>

        <div className="detail-card detail-card-full">
          <div className="detail-icon">
            <Briefcase size={20} />
          </div>
          <div className="detail-content">
            <label>Experience</label>
            <p>{volunteer.experience}</p>
          </div>
        </div>
      </div>

      <div className="action-buttons">
        <button className="approve-button" onClick={() => onApprove && onApprove(volunteer.id)}>
          <Check size={20} />
          <span>Approve</span>
        </button>
        <button className="reject-button" onClick={() => onReject && onReject(volunteer.id)}>
          <X size={20} />
          <span>Reject</span>
        </button>
      </div>
    </div>
  );
}

export default VolunteerDetails;
