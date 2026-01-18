import { PuffLoader } from "react-spinners";

const Loader = ({ size, height }) => {
  return (
    <div
    className="loader-container"
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: height || "80vh",
        width: "100%",
      }}
    >
      <PuffLoader size={size || 60} color="#36d7b7" />
    </div>
  );
};

export default Loader;
