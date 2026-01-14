import axios from 'axios';

const API_BASE_URL = 'http://localhost:5000/faqs';

const mockFAQs = [
  {
    id: 1,
    category: 'Volunteering',
    question: 'How can I volunteer with Urban Trickles?',
    answer: 'You can volunteer by filling out our volunteer application form on the Join Us page. Once submitted, our team will review your application and contact you within 3-5 business days with next steps.',
    status: 'published',
    date: '2024-01-10'
  },
  {
    id: 2,
    category: 'Programs',
    question: 'What programs does Urban Trickles offer?',
    answer: 'We offer several community programs including Medical Outreach, Skills Training & Education, Farmer Empowerment, and Clean Water Initiatives. Each program is designed to address specific needs in underserved communities.',
    status: 'published',
    date: '2024-01-09'
  },
  {
    id: 3,
    category: 'General',
    question: 'Where is Urban Trickles located?',
    answer: 'Our main office is located in downtown Portland. We also have satellite locations in several underserved communities throughout the region.',
    status: 'published',
    date: '2024-01-08'
  },
  {
    id: 4,
    category: 'Donations',
    question: 'How can I make a donation?',
    answer: 'You can make a donation through our website using our secure payment system. We accept credit cards, PayPal, and bank transfers.',
    status: 'published',
    date: '2024-01-07'
  },
  {
    id: 5,
    category: 'Programs',
    question: 'What is the Medical Outreach program?',
    answer: 'Our Medical Outreach program provides free health screenings, basic medical care, and health education to underserved communities.',
    status: 'published',
    date: '2024-01-06'
  },
  {
    id: 6,
    category: 'Volunteering',
    question: 'Do I need any special qualifications to volunteer?',
    answer: 'Most volunteer positions do not require special qualifications. However, some specialized programs may require specific skills or certifications.',
    status: 'draft',
    date: '2024-01-05'
  },
  {
    id: 7,
    category: 'General',
    question: 'How long has Urban Trickles been operating?',
    answer: 'Urban Trickles was founded in 2015 and has been serving communities for over 8 years.',
    status: 'published',
    date: '2024-01-04'
  },
  {
    id: 8,
    category: 'Donations',
    question: 'Are donations tax-deductible?',
    answer: 'Yes, Urban Trickles is a registered 501(c)(3) nonprofit organization. All donations are tax-deductible to the extent allowed by law.',
    status: 'draft',
    date: '2024-01-03'
  },
  {
    id: 9,
    category: 'Programs',
    question: 'How can I enroll in Skills Training programs?',
    answer: 'You can enroll by visiting our Programs page and filling out the enrollment form for the specific program you are interested in.',
    status: 'published',
    date: '2024-01-02'
  },
  {
    id: 10,
    category: 'Volunteering',
    question: 'What is the time commitment for volunteers?',
    answer: 'Time commitments vary by program. Most volunteer opportunities range from 2-4 hours per week, but we also have flexible options.',
    status: 'published',
    date: '2024-01-01'
  },
  {
    id: 11,
    category: 'General',
    question: 'How can I contact Urban Trickles?',
    answer: 'You can contact us via email at info@urbantrickles.org or by phone at (555) 123-4567.',
    status: 'draft',
    date: '2023-12-31'
  },
  {
    id: 12,
    category: 'Donations',
    question: 'What does my donation support?',
    answer: 'Your donation directly supports our community programs, including food distribution, medical care, education, and clean water initiatives.',
    status: 'published',
    date: '2023-12-30'
  }
];

let localFAQs = [...mockFAQs];

export const getAllFAQs = async () => {
  try {
    const response = await axios.get(API_BASE_URL);
    return response.data;
  } catch (error) {
    console.warn('Using mock data:', error.message);
    return localFAQs;
  }
};

export const createFAQ = async (faqData) => {
  try {
    const response = await axios.post(`${API_BASE_URL}/create`, faqData);
    return response.data;
  } catch (error) {
    console.warn('Using mock data:', error.message);
    const newFAQ = {
      ...faqData,
      id: Date.now(),
      date: new Date().toISOString().split('T')[0],
      status: 'draft'
    };
    localFAQs = [newFAQ, ...localFAQs];
    return newFAQ;
  }
};

export const updateFAQ = async (id, faqData) => {
  try {
    const response = await axios.put(`${API_BASE_URL}/update/${id}`, faqData);
    return response.data;
  } catch (error) {
    console.warn('Using mock data:', error.message);
    const index = localFAQs.findIndex(faq => faq.id === id);
    if (index !== -1) {
      localFAQs[index] = { ...localFAQs[index], ...faqData };
      return localFAQs[index];
    }
    throw new Error('FAQ not found');
  }
};

export const deleteFAQ = async (id) => {
  try {
    const response = await axios.delete(`${API_BASE_URL}/delete/${id}`);
    return response.data;
  } catch (error) {
    console.warn('Using mock data:', error.message);
    localFAQs = localFAQs.filter(faq => faq.id !== id);
    return { success: true, id };
  }
};

export const unpublishFAQ = async (id) => {
  try {
    const response = await axios.patch(`${API_BASE_URL}/unpublish/${id}`);
    return response.data;
  } catch (error) {
    console.warn('Using mock data:', error.message);
    const index = localFAQs.findIndex(faq => faq.id === id);
    if (index !== -1) {
      localFAQs[index] = { ...localFAQs[index], status: 'draft' };
      return localFAQs[index];
    }
    throw new Error('FAQ not found');
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
