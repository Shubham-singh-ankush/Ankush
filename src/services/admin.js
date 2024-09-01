// src/services/admin.js
import api from './api';


export function getImageUrl(path) {
  // Optionally, use environment variable for the base URL
  const baseUrl = process.env.VUE_APP_BASE_URL || 'http://localhost:5173/';
  return `${baseUrl}${path}`;
}


export const adminLogin = async (credentials) => {
  return await api.post('/admin/login', credentials);
};

export const adminLogout = async () => {
  const token = localStorage.getItem('authToken');
  return await api.post('/admin/logout', {}, {
    headers: {
      'Authorization': `Bearer ${token}`,
    },
  });
};

export const sendResetLinkEmail = async (email) => {
  return await api.post('/admin/link', { email });
};

export const passwordUpdate = async (passwordData) => {
  return await api.post('/admin/password', passwordData);
};

export const handleHeaderSection = (data) => {
  return api.post('/admin/header-section', data, {
    headers: {
      'Content-Type': 'multipart/form-data'
    }
  });
};

export const getTabs = async () => {
  return await api.get('/admin/tabs');
};

export const addUpdateTabs = (data) => {
  return api.post('/admin/add-update-tabs', data, {
    headers: {
      'Content-Type': 'multipart/form-data'
    }
  });
};

export const deleteTabData = async (tabId) => {
  return await api.get(`/admin/delete-tab/${tabId}`);
};



export const getSubTabs = async () => {
  return await api.get('/admin/sub-tabs');
};
export const addUpdateSubTab = (data) => {
  return api.post('/admin/add-update-sub-tabs', data, {
    headers: {
      'Content-Type': 'multipart/form-data'
    }
  });
};

export const deleteSubTabData = async (subtabId) => {
  return await api.get(`/admin/delete-sub-tab/${subtabId}`);
};


export const getTabsData = async () => {
  return await api.get('/admin/get-tabs');
};

export const uploadImage = async (data) => {
  return api.post('/admin/upload-image', data, {
    headers: {
      'Content-Type': 'multipart/form-data'
    }
  });
};

export const uploadHeaderImage = async (data) => {
  return api.post('/admin/upload-header-image', data, {
    headers: {
      'Content-Type': 'multipart/form-data'
    }
  });
};
