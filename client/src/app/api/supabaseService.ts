import { createSupabaseClient } from "@/lib/supabase/client";
import { JobDescription, Keywords, Recommendations } from "@/lib/types";
import { v4 as uuidv4 } from "uuid";

export const supabase = createSupabaseClient();

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

export async function insertKeywords(
  query: string,
  model: string,
  keywords: Keywords
) {
  const { data, error } = await supabase
    .from("keywords")
    .insert({ query, model, keywords });

  if (error) {
    throw error;
  }

  return data;
}

export async function insertRecommendations(
  resume_id: string,
  model: string,
  recommendations: Recommendations
) {
  const { data, error } = await supabase
    .from("recommendations")
    .insert({ resume_id, model, recommendations });

  if (error) {
    throw error;
  }

  return data;
}

export async function uploadResume(resume: File, user_id: string) {
  const file_id = uuidv4();

  const { data, error } = await supabase.storage
    .from("resume")
    .upload(`${user_id}/${file_id}`, resume);

  if (error) {
    throw error;
  }

  return data;
}
