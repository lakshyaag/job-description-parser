import { Recommendations, ResumePayload } from "@/lib/types";
import { API_URL } from "@/lib/utils";

export const recommend = async (
  payload: ResumePayload
): Promise<Recommendations> => {
  try {
    const response = await fetch(`${API_URL}/recommendations/`, {
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
