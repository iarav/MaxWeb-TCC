import { useState } from "react";
import pt from "../../i18n/pt";
import MaxInput from "../shared/MaxInput.component";
import RobotImage from "../shared/RobotImage.component";
import "./InsertCode.component.css";
import MaxButton from "../shared/MaxButton.component";
import {
  AgentService,
  IChatHistory,
  ISigninResponse,
} from "../../services/Agent.service";
import Alert from "../shared/Alert.component";
import { useHistory } from "react-router";

const InsertCode: React.FC = () => {
  const agentService = new AgentService();
  const [alertMessage, setAlertMessage] = useState<string>("");
  const [codigo, setCodigo] = useState<string>("");
  const [isAlertOpen, setAlertOpen] = useState(false);
  const history = useHistory();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setCodigo(value);
  };

  const signin = () => {
    agentService
      .signin(codigo)
      .then((res) => {
        if ((res as ISigninResponse).access_code) {
          loadChatHistory((res as ISigninResponse).access_code);
        }
      })
      .catch(() => {
        maxAlert("Código inválido");
      });
  };

  const loadChatHistory = (access_code: string) => {
    agentService
      .loadChatHistory(access_code)
      .then((res) => {
        loadChat(res);
      })
      .catch((error) => {
        maxAlert("Ocorreu um erro ao carregar o histórico do chat");
      });
  };

  const loadChat = (chat: IChatHistory[]) => {
    history.push("/chat", { chatHistory: chat, access_code: codigo });
  };

  const maxAlert = (message: string) => {
    setAlertMessage(message);
    setAlertOpen(true);
  };

  const gotoHome = () => {
    history.push("/");
  };

  return (
    <div className="insertCodeContainer">
      <div onClick={gotoHome}>
        <RobotImage />
      </div>
      <div className="insertCodeDiv">
        <div className="insertCode m-t-md">
          <div className="insertCodeTitle">{pt.insertCode.title}</div>
          <MaxInput
            name="codigo"
            value={codigo}
            onChange={handleInputChange}
            placeholder={pt.insertCode.codigo}
          />
          <MaxButton name="Enviar" onClick={signin} />
        </div>
        <div className="gradient-border-container">
          <div className="gradient-bordered insertCodeText">
            <span
              dangerouslySetInnerHTML={{ __html: pt.insertCode.description }}
            />
          </div>
        </div>
      </div>
      <Alert
        isOpen={isAlertOpen}
        message={alertMessage}
        type="error"
        onClose={() => setAlertOpen(false)}
      />
    </div>
  );
};

export default InsertCode;
