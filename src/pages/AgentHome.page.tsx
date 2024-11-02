import { IonContent, IonPage } from "@ionic/react";
import "./AgentHome.page.css";
import RobotImage from "../components/shared/RobotImage.component";
import InsertCode from "../components/AgentPage/InsertCode.component";

const AgentHome: React.FC = () => {
  return (
    <IonPage>
      <IonContent fullscreen color={"dark"}>
        <div className="gotoAgentePage">
          Você é o Engenheiro? <a href="/">Clique Aqui </a>
        </div>
        <InsertCode></InsertCode>
      </IonContent>
    </IonPage>
  );
};

export default AgentHome;
