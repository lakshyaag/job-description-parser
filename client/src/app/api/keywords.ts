import { RequestPayload } from "@/components/InputForm";
import { Keywords } from "@/lib/types";
import { API_URL } from "@/lib/utils";

export const keywords = async (payload: RequestPayload): Promise<Keywords> => {
  try {
    const response = await fetch(`${API_URL}/keywords/`, {
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
