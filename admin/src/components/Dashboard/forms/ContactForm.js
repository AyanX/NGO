import { useEffect, useState } from "react";
import { Save , Contact } from "lucide-react";
import { api } from "../../utils/api";
import "./Forms.scss";

const ContactForm = () => {



  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState({
    email: "-",
    phone: "-",
    location: "-",
  });

  useEffect(()=>{
    const fetchData = async () => {
      try {
        setLoading(true);
        const response = await api.get("/contacts");
        setForm(prev=>({...prev,...response.data}));
      }  
      catch (error) {
        console.error("Error fetching contact data:", error);
      }
      finally {
        setLoading(false);
      }};
    fetchData();
  },[])



  const handleSubmit = async () => {
    try {
      setLoading(true);
      await api.post("/contacts", form);
    }
    catch (error) {
      setLoading(false);
      return
    }
    
    finally {
      setLoading(false);
    }
  };

  return (
    <div className="form-card">
      <h3><Contact size={24} color="#f97316" /> Contact Information</h3>

      <label>Email Address</label>
      <input
        value={form.email}
        onChange={(e) => setForm({ ...form, email: e.target.value })}
      />

      <label>Phone Number</label>
      <input
        value={form.phone}
        onChange={(e) => setForm({ ...form, phone: e.target.value })}
      />

      <label>Location</label>
      <input
        value={form.location}
        onChange={(e) => setForm({ ...form, location: e.target.value })}
      />

      <button disabled={loading && form.email !== "-"} onClick={handleSubmit}>
        <Save />
        {loading && form.email !== "-" ? "Saving..." : "Save Contact Info"}
      </button>
    </div>
  );
};

export default ContactForm;
