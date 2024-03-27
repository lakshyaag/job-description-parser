import { createClient } from "@/lib/supabase/client";
import { JobDescription } from "@/lib/types";

const supabase = createClient();

export async function insertJobDescription(
  query: string,
  model: string,
  response: JobDescription
) {
  const { data, error } = await supabase
    .from("queries")
    .insert({ query, model, response: response });

  if (error) {
    throw error;
  }

  return data;
}
