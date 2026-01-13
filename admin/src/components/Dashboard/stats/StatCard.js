import "./StatCard.scss";

const StatCard = ({ icon: Icon, title, value, subtitle, color }) => {
  return (
    <div className={`stat-card ${color}`}>
      <div className="stat-icon-value">
        <Icon size={26} />
        <span className="stat-value">{value}</span>
      </div>
      <div className="stat-info">
        <h4>{title}</h4>
        <p>{subtitle}</p>
      </div>
    </div>
  );
};

export default StatCard;
