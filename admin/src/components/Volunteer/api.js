const API_BASE_URL = 'http://localhost:5000';

export const applicationAPI = {
  approve: async (id) => {
    const response = await fetch(`${API_BASE_URL}/approve/${id}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (!response.ok) {
      throw new Error(`Failed to approve application ${id}`);
    }

    return response.json();
  },

  reject: async (id) => {
    const response = await fetch(`${API_BASE_URL}/reject/${id}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (!response.ok) {
      throw new Error(`Failed to reject application ${id}`);
    }

    return response.json();
  },

  delete: async (id) => {
    const response = await fetch(`${API_BASE_URL}/delete/${id}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (!response.ok) {
      throw new Error(`Failed to delete application ${id}`);
    }

    return response.json();
  },
};
