import MaxButton from "./MaxButton.component";
import pt from "../../i18n/pt";
import "./Alert.component.css";
interface AlertProps {
  isOpen: boolean;
  message: string;
  type: string;
  onClose: () => void;
}

const Alert: React.FC<AlertProps> = ({ isOpen, message, type, onClose }) => {
  if (!isOpen) return null;
  return (
    <div className="modalScreen">
      <div className="alertContainer">
        <div className={`alert alert-${type}`}>{message}</div>
        <div className="cancelButton">
          <MaxButton
            name={pt.commons.close}
            onClick={onClose}
            color="--ion-color-secondary"
          ></MaxButton>
        </div>
      </div>
    </div>
  );
};

export default Alert;
