import { create } from "zustand";
import { Recommendations, JobDescription, Keywords } from "@/lib/types";
import { RequestPayload } from "../InputForm";

interface UserState {
  jobDescData: JobDescription | undefined;
  setJobDescData: (data: JobDescription | undefined) => void;
  keywordData: Keywords | undefined;
  setKeywordData: (data: Keywords | undefined) => void;
  recommendations: Recommendations | undefined;
  setRecommendations: (data: Recommendations | undefined) => void;
  isLoading: boolean;
  setIsLoading: (loading: boolean) => void;
  model: Pick<RequestPayload, "model">;
  setModel: (model: Pick<RequestPayload, "model">) => void;
}

export const useUserStore = create<UserState>((set) => ({
  jobDescData: undefined,
  setJobDescData: (data) => set({ jobDescData: data }),
  keywordData: undefined,
  setKeywordData: (data) => set({ keywordData: data }),
  recommendations: undefined,
  setRecommendations: (data) => set({ recommendations: data }),
  isLoading: false,
  setIsLoading: (loading) => set({ isLoading: loading }),
  model: { model: "gpt-3.5-turbo" },
  setModel: (model) => set({ model }),
}));
