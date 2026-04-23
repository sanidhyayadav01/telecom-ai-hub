import axios from "axios";

const BASE = "https://telecom-ai-backend.onrender.com";

export const aiChat = async (mode, message) => {
  const res = await axios.post(`${BASE}/api/ai/chat`, {
    mode,
    message,
  });
  return res.data;
};

export const askTutor = async (question) => {
  const res = await axios.post(`${BASE}/api/tutor/ask`, {
    question,
  });
  return res.data;
};

export const submitComplaint = async (text) => {
  const res = await axios.post(`${BASE}/api/complaint/submit`, {
    text,
  });
  return res.data;
};