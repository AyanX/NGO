import VolunteerCard from '../VolunteerCard/VolunteerCard';
import './VolunteerList.scss';

function VolunteerList({ volunteers, selectedVolunteer, onSelectVolunteer }) {
  return (
    <div className="volunteer-list">
      {volunteers && volunteers.length > 0 ? (
        volunteers.map((volunteer) => (
          <VolunteerCard
            key={volunteer.id}
            volunteer={volunteer}
            isSelected={selectedVolunteer && selectedVolunteer?.id === volunteer.id}
            onClick={() => onSelectVolunteer(volunteer)}
          />
        ))
      ) : (
        <div className="empty-list">
          <p>No volunteers found</p>
        </div>
      )}
    </div>
  );
}

export default VolunteerList;
