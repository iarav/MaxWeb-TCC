import pt from "../../i18n/pt";
import MaxButton from "./MaxButton.component";
import "./MaxModal.component.css";

interface MaxModalProps {
  isOpen: boolean;
  onClose?: () => void;
  onConfirm?: () => void;
  children?: React.ReactNode;
  customCancelTitle?: string;
  customConfirmTitle?: string;
}

const MaxModal: React.FC<MaxModalProps> = ({
  isOpen,
  onClose,
  onConfirm,
  children,
  customCancelTitle,
  customConfirmTitle,
}) => {
  if (!isOpen) return null;
  const cancelTitle = customCancelTitle
    ? customCancelTitle
    : pt.getStarted.cancelButton;
  const confirmTitle = customConfirmTitle
    ? customConfirmTitle
    : pt.getStarted.submitButton;
  return (
    <div className="modalScreen">
      <div className="modalContainer">
        {" "}
        {children}
        <div className="buttons m-x-md m-t-sm">
          {onClose && (
            <MaxButton
              name={cancelTitle}
              onClick={onClose}
              color="--ion-color-secondary"
            ></MaxButton>
          )}
          {onConfirm && (
            <MaxButton
              name={confirmTitle}
              onClick={onConfirm}
              color="--ion-color-primary"
            ></MaxButton>
          )}
        </div>
      </div>
    </div>
  );
};

export default MaxModal;
