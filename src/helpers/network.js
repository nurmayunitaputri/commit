import axios from "axios";
export const callAPI = async (payload) => {
  const axiosInstance = axios.create({
    baseURL: process.env.NEXT_PUBLIC_BASE_URL,
    headers: {
      Authorization: localStorage.getItem("jwt")
        ? `Bearer ${localStorage.getItem("jwt")}`
        : "",
    },
  });
  try {
    const response = await axiosInstance(payload);
    return response;
  } catch (error) {
    Promise.reject(error);
  }
};
