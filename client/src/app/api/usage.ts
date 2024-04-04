import { createSupabaseClient } from "@/lib/supabase/client";

const supabase = createSupabaseClient();

export async function incrementUsage(model: string) {
  const { data, error } = await supabase.rpc("increment", {
    model: model,
  });

  if (error) {
    throw error;
  }

  return data;
}

export async function getUsage(model: string) {
  const { data, error } = await supabase
    .from("usage")
    .select("*")
    .eq("model", model);

  if (error) {
    throw error;
  }

  return data;
}
