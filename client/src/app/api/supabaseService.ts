import { createClient } from "@/lib/supabase/client";
import { JobDescription, Keywords } from "@/lib/types";

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

export async function uploadResume(resume: File) {
  const { data, error } = await supabase.storage
    .from("resume")
    .upload(`${resume.name}`, resume);

  if (error) {
    throw error;
  }

  return data;
}
