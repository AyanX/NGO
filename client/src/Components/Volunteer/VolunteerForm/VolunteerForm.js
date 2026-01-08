import { useState } from 'react';
import axios from 'axios';
import './VolunteerForm.scss';
import Wrapper from "../../../Assets/utils/Wrapper"
import { smallHeader } from '../../../Assets/utils/utils';
const VolunteerFormSection = () => {
  const countries = [
    'Kenya',
    'Uganda',
    'Tanzania',
    'Ethiopia',
    'Rwanda'
  ];

  const volunteerTypes = [
    'Community Service',
    'Environmental',
    'Education',
    'Healthcare',
    'Animal Welfare',
    "other"
  ];

  const [formData, setFormData] = useState({
    country: '',
    volunteerType: '',
    hours: '',
    phoneNumber: '',
    yearsOfService: ''
  });

  const [message, setMessage] = useState({ text: '', type: '' });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const validateForm = () => {
    return (
      formData.country &&
      formData.volunteerType &&
      formData.hours &&
      formData.phoneNumber &&
      formData.yearsOfService
    );
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateForm()) {
      setMessage({ text: 'Please fill in all fields', type: 'error' });
      setTimeout(() => setMessage({ text: '', type: '' }), 3000);
      return;
    }

    try {
      const response = await axios.post('http://localhost:5000', formData);

      if (response.status === 201) {
        setMessage({ text: 'Successfully submitted!', type: 'success' });
        setFormData({
          country: '',
          volunteerType: '',
          hours: '',
          phoneNumber: '',
          yearsOfService: ''
        });
      } else {
        setMessage({ text: 'Submission failed. Please try again.', type: 'error' });
      }
    } catch (error) {
      setMessage({ text: 'An error occurred. Please try again.', type: 'error' });
    }

    setTimeout(() => setMessage({ text: '', type: '' }), 3000);
  };

  return (
    
    <div className="volunteer-form-container">


    {
        smallHeader("Become a Volunteer","Join Us")
    }

      {message.text && (
        <div className={`message ${message.type}`}>
          {message.text}
        </div>
      )}

      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="country">Country</label>
          <select
            id="country"
            name="country"
            value={formData.country}
            onChange={handleChange}
            className="form-select"
          >
            <option value="">Select Country</option>
            {countries.map((country) => (
              <option key={country} value={country}>
                {country}
              </option>
            ))}
          </select>
        </div>

        <div className="form-group">
          <label htmlFor="volunteerType">Volunteer Type</label>
          <select
            id="volunteerType"
            name="volunteerType"
            value={formData.volunteerType}
            onChange={handleChange}
            className="form-select"
          >
            <option value="">Select Type</option>
            {volunteerTypes.map((type) => (
              <option key={type} value={type}>
                {type}
              </option>
            ))}
          </select>
        </div>

        <div className="form-group">
          <label htmlFor="hours">Hours</label>
          <input
            type="text"
            id="hours"
            name="hours"
            value={formData.hours}
            onChange={handleChange}
            placeholder="Hours per week"
            className="form-input"
          />
        </div>

        <div className="form-row">
          <div className="form-group">
            <label htmlFor="phoneNumber">Phone Number</label>
            <input
              type="text"
              id="phoneNumber"
              name="phoneNumber"
              value={formData.phoneNumber}
              onChange={handleChange}
              placeholder="Enter your phone number"
              className="form-input"
            />
          </div>

          <div className="form-group">
            <label htmlFor="yearsOfService">Years of Service</label>
            <input
              type="text"
              id="yearsOfService"
              name="yearsOfService"
              value={formData.yearsOfService}
              onChange={handleChange}
              placeholder="Years"
              className="form-input"
            />
          </div>
        </div>

        <button type="submit" className="submit-button">
          BECOME A VOLUNTEER
        </button>
      </form>
    </div>
  );
};


const VolunteerForm = ()=>{
    return <Wrapper component={<VolunteerFormSection/>}/>
}

export default VolunteerForm;
