import { useMemo } from "react";
import "./ApplicationList.scss";

const ApplicationList = ({
  applications,
  selectedId,
  onSelectApplication,
  activeFilter,
}) => {
  const filteredApplications = useMemo(() => {
    if (activeFilter === "all") {
      return applications;
    }
    return applications.filter((app) => app.status === activeFilter);
  }, [applications, activeFilter]);

  return (
    <div className="application-list">

      <div className="application-items">
        {filteredApplications.map((application) => (
          <div
            key={application.id}
            className={`application-item ${
              selectedId === application.id ? "selected" : ""
            }`}
            onClick={() => onSelectApplication(application.id)}
          >
            <div className="item-header">
              <h3>{application.name}</h3>
              <span className={`status-badge ${application.status}`}>
                {application.status}
              </span>
            </div>
            <div className="item-details">
              <p className="email">{application.email}</p>
              <p className="type">{application.type}</p>
              <p className="date">{application.appliedDate}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ApplicationList;
