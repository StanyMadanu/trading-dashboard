import axios from "axios";

const backEndCall = async (endpoint, options = {}) => {
  const response = await axios.post(
    `${process.env.REACT_APP_API_URL}${endpoint}`,
    {
      method: "POST", // Change this to POST or other methods as needed
      headers: {
        "Content-Type": "application/json",
        ...options.headers,
      },
      body: JSON.stringify(options.body),
      ...options,
    }
  );

  if (!response.ok) {
    const errorData = await response.json();
    throw new Error(errorData.message || "Something went wrong");
  }

  return response.json();
};

export default backEndCall;
