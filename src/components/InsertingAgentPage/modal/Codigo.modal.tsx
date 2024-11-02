import React from "react";
import pt from "../../../i18n/pt";
import "./Codigo.modal.css";
import { useHistory } from "react-router";

interface CodigoModalProps {
  codigo: string;
}

const CodigoModal: React.FC<CodigoModalProps> = ({ codigo }) => {
  const history = useHistory();
  const copyToClipboard = () => {
    navigator.clipboard.writeText(codigo);
  };

  const gotoAgentPage = () => {
    navigator.clipboard.writeText(codigo);
    history.push("/agent");
  };

  return (
    <div className="codigoModalContainer p-x-sm p-t-sm">
      <div className="codigoTitle m-b-xs">{pt.codigoModal.title}</div>
      <div className="codigoDescription p-x-sm">
        {pt.codigoModal.description}
      </div>
      <br />
      <div className="codigoContainer p-y-md">
        <div className="numeroCodigo">
          <span className="codigoSpan">{pt.codigoModal.codigo}</span>
          <span
            className="codigo"
            onClick={copyToClipboard}
            title="Click to copy"
          >
            {codigo}
          </span>
        </div>
        <div className="linkAcesso p-y-sm" onClick={gotoAgentPage}>
          <span>{pt.codigoModal.linkAcesso}</span>{" "}
          <span className="link">https://maxbot.com.br/agent</span>
        </div>
      </div>
    </div>
  );
};

export default CodigoModal;
