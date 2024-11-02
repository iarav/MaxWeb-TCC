import "./MaxButton.component.css";

interface MaxButtonProps {
  name: string;
  onClick: () => void;
  color?: string;
}

const MaxButton: React.FC<MaxButtonProps> = ({ name, onClick, color }) => {
  return (
    <button
      onClick={onClick}
      className="maxButton"
      style={{
        backgroundColor:
          color && color !== "" ? `var(${color})` : "var(--ion-color-primary)",
      }}
    >
      {name}
    </button>
  );
};

export default MaxButton;
