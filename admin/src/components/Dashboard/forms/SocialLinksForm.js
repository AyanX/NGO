import { useState } from "react";
import { Facebook, Twitter, Instagram, Save,  Link  } from "lucide-react";
import { api } from "../../utils/api";
import "./Forms.scss";

const SocialLinksForm = () => {
  const [loading, setLoading] = useState(false);
  const [links, setLinks] = useState({
    facebook: "",
    twitter: "",
    instagram: "",
  });

  const submit = async () => {
    try {
      setLoading(true);
      await api.post("/social-links", links);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="form-card">
      <h3><Link   size={24} color="#f97316"  /> Social Media Links</h3>

      <label><Facebook  height={18} width={20}  className="icon-blue" /> Facebook</label>
      <input onChange={(e) => setLinks({ ...links, facebook: e.target.value })} />

      <label><Twitter  height={18} width={20} /> Twitter</label>
      <input onChange={(e) => setLinks({ ...links, twitter: e.target.value })} />

      <label><Instagram  height={18} width={20} color="pink"/> Instagram</label>
      <input onChange={(e) => setLinks({ ...links, instagram: e.target.value })} />

      <button disabled={loading} onClick={submit}>
        <Save />
        {loading ? "Saving..." : "Save Social Links"}
      </button>
    </div>
  );
};

export default SocialLinksForm;
