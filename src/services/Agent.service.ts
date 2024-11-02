import { AxiosResponse } from "axios";
import { api } from "../shared/axios.service";

export interface ISigninResponse {
  message: string;
  access_code: string;
}

export interface IChatHistory {
  message: string;
  sender: string;
  step?: string;
  timestamp?: string;
  id?: number;
  mce_id?: number;
}

export class AgentService {
  public async signin(access_code: string): Promise<ISigninResponse> {
    try {
      const response: AxiosResponse = await api.get(
        `chat/signIn?access_code=${access_code}`
      );
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
