import { IonContent, IonPage } from "@ionic/react";
import Description from "../components/EngineerHomePage/Description.component";
import "./EngineerHome.page.css";

const EngineerHome: React.FC = () => {
  return (
    <IonPage>
      <IonContent fullscreen color={"dark"}>
        <div className="gotoAgentePage">
          Você é o agente? <a href="/agent">Clique Aqui </a>
        </div>
        <Description />
      </IonContent>
    </IonPage>
  );
};

export default EngineerHome;
