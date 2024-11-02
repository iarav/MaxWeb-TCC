import { IonImg } from "@ionic/react";
import titleImage from "../../assets/images/MAX.svg";
import titleImageArrow from "../../assets/images/arrow.svg";
import pahRobotIcon from "../../assets/images/perfilRobot.svg";
import pahUserProfile from "../../assets/images/perfilUser.svg";
import "./Chat.component.css";
import { IChatHistory } from "../../services/Agent.service";
import { ChatService } from "../../services/Chat.service";
import { useEffect, useRef, useState } from "react";
import { useHistory } from "react-router";
interface ChatProperties {
  chatHistory: IChatHistory[];
  access_code: string;
}

const ChatComponent: React.FC<ChatProperties> = ({
  chatHistory,
  access_code,
}) => {
  const [messageInput, setMessageInput] = useState<string>("");
  const chatService = new ChatService();
  const [chat, setMessage] = useState<IChatHistory[]>(chatHistory);
  const history = useHistory();
  const chatEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const [isChatInputDisabled, setIsChatInputDisabled] =
    useState<boolean>(false);
    const [isSendingMessage, setIsSendingMessage] =
      useState<boolean>(false);

  useEffect(() => {
    const debounceTimeout = setTimeout(() => {
      if (chat.length === 0) {
        chatService
          .userInput({
            access_code: access_code,
            user_input: "",
          })
          .then((res) => {
            setMessage((prevChat) => [
              ...prevChat,
              {
                message: res.response,
                sender: "chatbot",
              },
            ]);
          });
      } else {
        if (chat[chat.length - 1].step === "STEP_END") {
          setIsChatInputDisabled(true);
        }
      }
    }, 300);

    return () => clearTimeout(debounceTimeout);
  }, [chat.length, access_code]);

  const sendMessage = () => {
    if (!messageInput.trim()) return;
    setIsSendingMessage(true);
    setMessage((prevChat) => [
      ...prevChat,
      {
        message: messageInput,
        sender: "agent",
      },
    ]);

    setMessageInput("");

    chatService
      .userInput({
        access_code: access_code,
        user_input: messageInput,
      })
      .then((res) => {
        setMessage((prevChat) => [
          ...prevChat,
          {
            message: res.response,
            sender: "chatbot",
          },
        ]);
        if (chatEndRef.current) {
          chatEndRef.current.scrollIntoView({ behavior: "smooth" });
        }

        if (inputRef.current) {
          setTimeout(() => {
            inputRef.current?.focus();
          }, 0);
        }

        if (res.step == "STEP_END") {
          setIsChatInputDisabled(true);
        } else {
          setIsChatInputDisabled(false);
        }
      })
      .catch((error) => {
        console.error(error);
        setMessage((prevChat) => [
          ...prevChat,
          {
            message: "Ocorreu um erro! Por favor, tente novamente mais tarde.",
            sender: "chatbot",
          },
        ]);
        setIsChatInputDisabled(false);
        setIsSendingMessage(false);
      }).finally(() => {
        setIsSendingMessage(false);
      });
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setMessageInput(value);
  };

  const gotoHomePage = () => {
    history.push("/agent");
  };

  const scrollToBottom = () => {
    if (chatEndRef.current) {
      chatEndRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  useEffect(() => {
    scrollToBottom();
  }, [chat]);

  return (
    <div className="chatContainer">
      <div className="chatHeader p-x-xs p-y-xs" onClick={gotoHomePage}>
        <IonImg src={titleImage} style={{ width: "100px", height: "auto" }} />
      </div>
      <div className="chat p-x-xs p-y-sm">
        {chat.map((chat, index) => {
          return (
            <div key={index} className="chatMessage">
              <div className={`profileIconLeft-${chat.sender}`}>
                <IonImg src={pahRobotIcon} style={{ width: "50px" }} />
              </div>
              <div className={`chatMessageContent chatMessage-${chat.sender}`}>
                {chat.message.split("\n").map((line, index) => (
                  <span key={index}>
                    {line
                      .split(/<strong>|<\/strong>/)
                      .map(
                        (text, i) =>
                          i % 2 === 1 ? <strong key={i}>{text}</strong> : text 
                      )}
                    <br />
                  </span>
                ))}
              </div>

              <div className={`profileIconRight-${chat.sender}`}>
                <IonImg src={pahUserProfile} style={{ width: "50px" }} />
              </div>
            </div>
          );
        })}
        <div ref={chatEndRef} />
      </div>
      <div className="chatInputContainer p-x-sm p-y-sm">
        <div
          className={isChatInputDisabled ? "chatInputDisabled" : "chatInput"}
        >
          <div className="input">
            <input
              ref={inputRef}
              type="text"
              className="chatInputField"
              placeholder={
                isChatInputDisabled
                  ? "Conversa finalizada"
                  : "Digite sua mensagem"
              }
              value={messageInput}
              onChange={handleInputChange}
              onKeyDown={(e) => {
                if (e.key === "Enter") {
                  sendMessage();
                }
              }}
              disabled={isChatInputDisabled || isSendingMessage}
              aria-label="Digite sua mensagem"
              maxLength={100}
            />
          </div>
          <div className="submitButton p-y-xxs p-r-xxs" onClick={sendMessage}>
            <IonImg
              src={titleImageArrow}
              style={{
                marginTop: "10%",
                width: "80%",
                height: "fit-content",
                color: "black",
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChatComponent;
