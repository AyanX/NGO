import './VolunteerCard.scss';

function VolunteerCard({ volunteer, isSelected, onClick }) {
  const getStatusClass = (status) => {
    return `status-badge status-${status}`;
  };

  return (
    <div
      className={`volunteer-card ${isSelected ? 'selected' : ''}`}
      onClick={onClick}
    >
      <div className="volunteer-card-header">
        <h3 className="volunteer-name">{volunteer?.name}</h3>
        <span className={getStatusClass(volunteer?.status)}>
          {volunteer?.status}
        </span>
      </div>
      <p className="volunteer-email">{volunteer?.email}</p>
      <p className="volunteer-type">{volunteer?.type}</p>
      <p className="volunteer-date">{volunteer?.createdAt?.split(" ")[0]}</p>
    </div>
  );
}

export default VolunteerCard;
