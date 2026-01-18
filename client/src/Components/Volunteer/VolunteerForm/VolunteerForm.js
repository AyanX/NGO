import { memo } from "react";
import { useVolunteerForm } from "./useVolunteerForm";
import "./VolunteerForm.scss";
import Wrapper from "../../../Assets/utils/Wrapper";
import { smallHeader } from "../../../Assets/utils/utils";

const VolunteerForm2 = () => {
  const { formData, loading, error, success, handleChange, submitForm } =
    useVolunteerForm();

  if (!formData) return null;

  return (
    <section className="volunteer-wrapper" id="volunteer">
      <div className="volunteer-form">
      {smallHeader("Volunteer With Us", "Get Involved")}
        {error && <p className="error">{error}</p>}
        {success && (
          <p className="success">Thank you! Your application was submitted.</p>
        )}

        <form
          className="form-grid"
          onSubmit={(e) => {
            e.preventDefault();
            submitForm();
          }}
        >
          {/* Left Column */}
          <div className="column">
            <input
              name="name"
              placeholder="Full Name"
              value={formData.name}
              onChange={handleChange}
              required
            />
            <input
              name="email"
              placeholder="Email Address"
              value={formData.email}
              onChange={handleChange}
              required
            />
            <input
              name="phone"
              placeholder="Phone Number"
              value={formData.phone}
              onChange={handleChange}
              required
            />
            <input
              name="location"
              placeholder="Location (e.g. Nairobi, Kenya)"
              value={formData.location}
              onChange={handleChange}
              required
            />
            <input
              name="age"
              type="number"
              placeholder="Age"
              value={formData.age}
              onChange={handleChange}
              required
            />
             <select
              name="category"
              value={formData.category}
              onChange={handleChange}
              required
            >
              <option value="">Select Volunteer Area</option>
              <option value="Education">Education</option>
              <option value="Health">Health</option>
              <option value="Technology">Technology</option>
              <option value="Community">Community</option>
              <option value="Other">Other</option>
            </select>
          </div>

          {/* Right Column */}
          <div className="column">
           

            <input
              name="availability"
              placeholder="Availability (e.g. Weekends)"
              value={formData.availability}
              onChange={handleChange}
              required
            />

            <textarea
              name="motivation"
              placeholder="Why do you want to volunteer?"
              value={formData.motivation}
              onChange={handleChange}
              required
            />

            <input
              name="languages"
              placeholder="Languages spoken (optional)"
              value={formData.languages}
              onChange={handleChange}
            />

            <label className="checkbox">
              <input
                type="checkbox"
                name="confirmAccuracy"
                checked={formData.confirmAccuracy}
                onChange={handleChange}
                required
              />
              I confirm the information provided is accurate
            </label>

            <label className="checkbox">
              <input
                type="checkbox"
                name="agreeConduct"
                checked={formData.agreeConduct}
                onChange={handleChange}
                required
              />
              I agree to the volunteer code of conduct
            </label>
          </div>

          <div className="volunteerform-btn">
            <button type="submit" disabled={loading}>
              {loading ? "Submitting..." : "Submit"}
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

const VolunteerForm = () => {
  return <Wrapper component={<VolunteerForm2 />} />;
};

export default memo(VolunteerForm);
