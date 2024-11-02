import { AxiosResponse } from "axios";
import { api } from "../shared/axios.service";
import { IChatHistory } from "./Agent.service";

export interface IBotResponse {
  message: string;
  response: string;
  step: string;
}

export class ChatService {
  public async userInput(data: {
    access_code: string;
    user_input: string;
  }): Promise<IBotResponse> {
    try {
      const response: AxiosResponse = await api.post(`chat/userInput`, data);
      return response.data;
    } catch (error) {
      console.error("Erro ao buscar dados:", error);
      throw error;
    }
  }

  public async loadChatHistory(access_code: string): Promise<IChatHistory[]> {
    try {
      const response: AxiosResponse = await api.get(
        `chat/getAllChatHistory?access_code=${access_code}`
      );
      return response.data;
    } catch (error) {
      console.error("Erro ao buscar dados:", error);
      throw error;
    }
  }
}
