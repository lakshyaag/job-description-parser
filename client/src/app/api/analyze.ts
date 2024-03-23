import { RequestPayload } from "@/lib/types";
import { API_URL } from "@/lib/utils";

export const analyze = async (payload: RequestPayload) => {
  try {
    const response = await fetch(`${API_URL}/jd/`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    });
    const data = await response.json();
    console.log("Success:", data);
    return data;
  } catch (error) {
    console.error("Error:", error);
    throw error;
  }
};
