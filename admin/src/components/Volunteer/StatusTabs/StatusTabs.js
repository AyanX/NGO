import './StatusTabs.scss';

function StatusTabs({ activeFilter, onFilterChange, counts }) {
  const tabs = [
    { id: 'all', label: 'All' },
    { id: 'pending', label: `Pending (${counts?.pending})` },
    { id: 'approved', label: 'Approved' },
    { id: 'rejected', label: 'Rejected' },
  ];

  return (
    <div className="status-tabs">
      {tabs.map((tab) => (
        <button
          key={tab?.id}
          className={`status-tab ${activeFilter === tab?.id ? 'active' : ''}`}
          onClick={() => onFilterChange(tab?.id)}
        >
          {tab?.label}
        </button>
      ))}
    </div>
  );
}

export default StatusTabs;
