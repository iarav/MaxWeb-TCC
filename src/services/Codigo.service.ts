import { AxiosResponse } from "axios";
import { api } from "../shared/axios.service";

export interface IFocalQuestionResponse {
  agent: string;
  concept: string;
  domain: string;
  focal_question: string;
}

export interface ICreateChatResponse {
  access_code: string;
  creation_date: Date;
  update_date: Date;
  agent_id: number;
  elicitation_id: number;
  id: number;
}

export class CodigoService {
  public async getCodigo(data: {
    focalQuestion: {
      focal_question: string;
      agent: string;
      concept: string;
      domain: string;
    };
    agent: {
      email: string;
      name: string;
    };
  }): Promise<ICreateChatResponse> {
    try {
      const response: AxiosResponse = await api.post("chat/createChat", data);
      return response.data;
    } catch (error) {
      console.error("Erro ao buscar dados:", error);
      throw error;
    }
  }
}
