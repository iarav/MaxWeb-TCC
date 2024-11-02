import { AxiosResponse } from "axios";
import { api } from "../shared/axios.service";

export interface IFocalQuestionResponse {
  agent: string;
  concept: string;
  domain: string;
  focal_question: string;
  isRegistered: boolean;
}

export class FocalQuestionService {
  public async getFocalQuestion(
    focalQuestion: string
  ): Promise<IFocalQuestionResponse> {
    try {
      const response: AxiosResponse = await api.post(
        "focalQuestion/getFocalQuestion",
        {
          focalQuestion,
        }
      );
      return response.data;
    } catch (error) {
      console.error("Erro ao buscar dados:", error);
      throw error;
    }
  }
}
