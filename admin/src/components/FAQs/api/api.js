import axios from 'axios';

const API_BASE_URL = process.env.REACT_APP_API_URL + '/faqs';



export const getAllFAQs = async () => {
  try {
    const response = await axios.get(API_BASE_URL);
    return {data : response.data , err : null};
  } catch (error) {
    return {err : "an error occurred while fetching FAQs", data : null}
  }
};

export const createFAQ = async (faqData) => {
  try {
    const response = await axios.post(`${API_BASE_URL}`, faqData);
    return response.data.data;
  } catch (error) {
    return 
  }
};

export const updateFAQ = async (id, faqData) => {
  try {
    const response = await axios.patch(`${API_BASE_URL}/update/${id}`, faqData);
    return response.data.data;
  } catch (error) {
    return
  }
};

export const deleteFAQ = async (id) => {
  try {
    const response = await axios.delete(`${API_BASE_URL}/delete/${id}`);
    return response.data;
  } catch (error) {
    return
  }
};

export const unpublishFAQ = async (id) => {
  try {
    if(!id) return;
    const response = await axios.patch(`${API_BASE_URL}/unpublish/${id}`);
    return response.data.data;
  } catch (error) {
    return
  }
};

export const categories = [
  'General',
  'Volunteering',
  'Programs',
  'Donations',
  'Events',
  'Partnerships'
];
