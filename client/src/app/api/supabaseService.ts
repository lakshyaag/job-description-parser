import { createClient } from "@/lib/supabase/client";
import { JobDescription } from "@/lib/types";

const supabase = createClient();

export async function insertJobDescription(
  query: string,
  response: JobDescription
) {
  const { data, error } = await supabase
    .from("queries")
    .insert({ query, response: response });

  if (error) {
    throw error;
  }

  return data;
}
