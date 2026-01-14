import { useState, useMemo } from 'react';
import StatusTabs from '../StatusTabs/StatusTabs';
import VolunteerList from '../VolunteerList/VolunteerList';
import VolunteerDetails from '../VolunteerDetails/VolunteerDetails';
import { volunteersData } from '../data';
import './VolunteerDashboard.scss';
import { sectionHeading } from '../../utils/utils';

function VolunteerDashboard() {
  const [volunteers, setVolunteers] = useState(volunteersData);
  const [activeFilter, setActiveFilter] = useState('all');
  const [selectedVolunteer, setSelectedVolunteer] = useState(null);
  const [showDetails, setShowDetails] = useState(false);

  const filteredVolunteers = useMemo(() => {
    if (activeFilter === 'all') {
      return volunteers;
    }
    return volunteers.filter((v) => v.status === activeFilter);
  }, [volunteers, activeFilter]);

  const counts = useMemo(() => {
    const pending = volunteers.filter((v) => v.status === 'pending').length;
    const approved = volunteers.filter((v) => v.status === 'approved').length;
    const total = volunteers.length;
    return { pending, approved, total };
  }, [volunteers]);

  const handleSelectVolunteer = (volunteer) => {
    setSelectedVolunteer(volunteer);
    setShowDetails(true);
  };

  const handleBack = () => {
    setShowDetails(false);
  };

  const handleApprove = (id) => {
    setVolunteers((prev) =>
      prev.map((v) => (v.id === id ? { ...v, status: 'approved' } : v))
    );
    setSelectedVolunteer((prev) =>
      prev && prev.id === id ? { ...prev, status: 'approved' } : prev
    );
  };

  const handleReject = (id) => {
    setVolunteers((prev) =>
      prev.map((v) => (v.id === id ? { ...v, status: 'rejected' } : v))
    );
    setSelectedVolunteer((prev) =>
      prev && prev.id === id ? { ...prev, status: 'rejected' } : prev
    );
  };

  const handleDelete = (id) => {
    setVolunteers((prev) => prev.filter((v) => v.id !== id));
    if (selectedVolunteer && selectedVolunteer.id === id) {
      setSelectedVolunteer(null);
      setShowDetails(false);
    }
  };

  return (
    <>
        {sectionHeading("Volunteer Applications", `${counts.pending} pending • ${counts.approved} approved • ${counts.total} total  ` )}
    
    <div className="volunteer-dashboard">
      <div className={`dashboard-left ${showDetails ? 'hide-mobile' : ''}`}>
        <StatusTabs
          activeFilter={activeFilter}
          onFilterChange={setActiveFilter}
          counts={counts}
        />

        <VolunteerList
          volunteers={filteredVolunteers}
          selectedVolunteer={selectedVolunteer}
          onSelectVolunteer={handleSelectVolunteer}
        />
      </div>

      <div className={`dashboard-right ${showDetails ? 'show-mobile' : ''}`}>
        <VolunteerDetails
          volunteer={selectedVolunteer}
          onApprove={handleApprove}
          onReject={handleReject}
          onDelete={handleDelete}
          onBack={handleBack}
        />
      </div>
    </div></>
  );
}

export default VolunteerDashboard;
