import { useState, useCallback, useMemo } from "react";
import ApplicationList from "./List/ApplicationList";
import ApplicationDetail from "./Details/ApplicationDetail";
import { applicationAPI } from "./api";
import { mockApplications } from "./fakedData";
import "./VolunteerApplications.scss";
import { sectionHeading } from "../utils/utils";

const VolunteerApplications = () => {
  const [applications, setApplications] = useState(mockApplications);
  const [selectedId, setSelectedId] = useState(null);
  const [activeFilter, setActiveFilter] = useState("all");
  const [isLoading, setIsLoading] = useState(false);

  const selectedApplication = useMemo(() => {
    return applications.find((app) => app.id === selectedId) || null;
  }, [applications, selectedId]);

  const handleSelectApplication = useCallback((id) => {
    setSelectedId(id);
  }, []);

  const handleBack = useCallback(() => {
    setSelectedId(null);
  }, []);

  const updateApplicationStatus = useCallback((id, status) => {
    setApplications((prevApps) =>
      prevApps.map((app) => (app.id === id ? { ...app, status } : app))
    );
  }, []);

  const removeApplication = useCallback((id) => {
    setApplications((prevApps) => prevApps.filter((app) => app.id !== id));
    setSelectedId(null);
  }, []);

  const handleApprove = useCallback(
    async (id) => {
      if (isLoading) return;

      try {
        setIsLoading(true);
        await applicationAPI.approve(id);
        updateApplicationStatus(id, "approved");
      } catch (error) {
        console.error("Failed to approve application:", error);
        alert("Failed to approve application. Please try again.");
      } finally {
        setIsLoading(false);
      }
    },
    [isLoading, updateApplicationStatus]
  );

  const handleReject = useCallback(
    async (id) => {
      if (isLoading) return;

      try {
        setIsLoading(true);
        await applicationAPI.reject(id);
        updateApplicationStatus(id, "rejected");
      } catch (error) {
        console.error("Failed to reject application:", error);
        alert("Failed to reject application. Please try again.");
      } finally {
        setIsLoading(false);
      }
    },
    [isLoading, updateApplicationStatus]
  );

  const handleDelete = useCallback(
    async (id) => {
      if (isLoading) return;

      const confirmed = window.confirm(
        "Are you sure you want to delete this application?"
      );
      if (!confirmed) return;

      try {
        setIsLoading(true);
        await applicationAPI.delete(id);
        removeApplication(id);
      } catch (error) {
        console.error("Failed to delete application:", error);
        alert("Failed to delete application. Please try again.");
      } finally {
        setIsLoading(false);
      }
    },
    [isLoading, removeApplication]
  );

  const filterCounts = useMemo(() => {
    return {
      all: applications.length,
      pending: applications.filter((app) => app.status === "pending").length,
      approved: applications.filter((app) => app.status === "approved").length,
      rejected: applications.filter((app) => app.status === "rejected").length,
    };
  }, [applications]);

  return (
    <div className="volunteer-applications">
      <div className="volunteer-heading-section">
      {sectionHeading(
        "Volunteer Applications",
        `${filterCounts.pending} pending • ${filterCounts.approved} approved • ${filterCounts.all} total`
      )}
        <div className="filter-tabs">
          <button
            className={`filter-tab ${activeFilter === "all" ? "active" : ""}`}
            onClick={() => setActiveFilter("all")}
          >
            All
          </button>
          <button
            className={`filter-tab ${
              activeFilter === "pending" ? "active" : ""
            }`}
            onClick={() => setActiveFilter("pending")}
          >
            Pending ({filterCounts.pending})
          </button>
          <button
            className={`filter-tab ${
              activeFilter === "approved" ? "active" : ""
            }`}
            onClick={() => setActiveFilter("approved")}
          >
            Approved
          </button>
          <button
            className={`filter-tab ${
              activeFilter === "rejected" ? "active" : ""
            }`}
            onClick={() => setActiveFilter("rejected")}
          >
            Rejected
          </button>
        </div>
      </div>

      <div
        className={`content-container ${selectedId ? "detail-visible" : ""}`}
      >
        <ApplicationList
          applications={applications}
          selectedId={selectedId}
          onSelectApplication={handleSelectApplication}
          activeFilter={activeFilter}
        />

        <ApplicationDetail
          application={selectedApplication}
          onApprove={handleApprove}
          onReject={handleReject}
          onDelete={handleDelete}
          onBack={handleBack}
        />
      </div>

      {isLoading && (
        <div className="loading-overlay">
          <div className="spinner"></div>
        </div>
      )}
    </div>
  );
};

export default VolunteerApplications;
