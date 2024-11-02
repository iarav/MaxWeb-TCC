import React from "react";
import {
  IonPage,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
} from "@ionic/react";
import { IChatHistory } from "../services/Agent.service";
import ChatComponent from "../components/ChatPage/Chat.component";
import { useLocation } from "react-router";

interface ChatPageProps {
  chatHistory?: IChatHistory[];
  access_code: string;
}

const ChatPage: React.FC<ChatPageProps> = () => {
  const location = useLocation<{
    chatHistory: IChatHistory[];
    access_code: string;
  }>();
  const chatHistory = location.state?.chatHistory || [];
  const access_code = location.state?.access_code;
  return (
    <IonPage>
      <IonContent>
        <ChatComponent
          chatHistory={chatHistory}
          access_code={access_code}
        ></ChatComponent>
      </IonContent>
    </IonPage>
  );
};

export default ChatPage;
