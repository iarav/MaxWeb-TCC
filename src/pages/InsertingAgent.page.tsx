import { IonContent, IonPage } from "@ionic/react";
import "./EngineerHome.page.css";
import RobotImage from "../components/shared/RobotImage.component";
import GetStarted from "../components/InsertingAgentPage/GetStarted.component";

const InsertingAgent: React.FC = () => {
  return (
    <IonPage>
      <IonContent fullscreen color={"dark"}>
        <div className="descriptionContainer">
          <RobotImage />
          <GetStarted />
        </div>
      </IonContent>
    </IonPage>
  );
};

export default InsertingAgent;
