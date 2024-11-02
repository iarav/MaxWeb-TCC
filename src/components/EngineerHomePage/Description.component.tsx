import "./Description.component.css";
import ptTexts from "../../i18n/pt";
import RobotImage from "../shared/RobotImage.component";
import { useHistory } from "react-router";

const Description: React.FC = () => {
  const history = useHistory();

  const handleClick = () => {
    history.push("/insertingAgent");
  };

  return (
    <div className="descriptionContainer">
      <div className="descriptionCard">
        <h1 className="fontSansation">
          {ptTexts.description.title.toUpperCase()}
        </h1>
        <div className="wrapper">
          <div className="card">
            <span className="title">
              {ptTexts.description.obtencaoConhecimento}
            </span>

            <p>{ptTexts.description.obtencaoConhecimentoDescription}</p>
          </div>
          <div className="card">
            <span className="title">
              {" "}
              {ptTexts.description.comoFunciona} <br />
              {ptTexts.description.comoFunciona1} <br />
            </span>
            <ul>
              <li>
                <p>
                  <strong>
                    {ptTexts.description.comoFunciona1Description1Meta}
                  </strong>
                  {ptTexts.description.comoFunciona1Description1MetaDescription}
                </p>
              </li>
              <li>
                <p>
                  <strong>
                    {ptTexts.description.comoFunciona1Description1Geracao}
                  </strong>
                  {
                    ptTexts.description
                      .comoFunciona1Description1GeracaoDescription
                  }
                </p>
              </li>
            </ul>
          </div>
          <div className="card">
            <span className="title"> {ptTexts.description.comoFunciona2} </span>
            <ul>
              <li>
                <p>
                  <strong>{ptTexts.description.comoFunciona2Topic}</strong>
                  {ptTexts.description.comoFunciona2TopicDescription}
                </p>
              </li>
            </ul>
          </div>
          <div className="card">
            <span className="title"> {ptTexts.description.finalidade} </span>
            <p> {ptTexts.description.finalidadeDescription}</p>
          </div>
        </div>
      </div>
      <RobotImage>
        <div className="robotButton" onClick={handleClick}>
          <span className="robotButtonSpan">Começar</span>
        </div>
      </RobotImage>
    </div>
  );
};

export default Description;
