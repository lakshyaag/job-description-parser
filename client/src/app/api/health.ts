import { API_URL } from "@/lib/utils";

export const health = async () => {
  try {
    const response = await fetch(`${API_URL}/health/`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });
    const data = await response.json();
    console.log("Success:", data);
    return data;
  } catch (error) {
    console.error("Error:", error);
    throw error;
  }
};
