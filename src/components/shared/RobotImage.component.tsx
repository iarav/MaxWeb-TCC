import { useHistory } from "react-router";
import "./RobotImage.component.css";

const RobotImage: React.FC<{ children?: React.ReactNode }> = ({ children }) => {
  const history = useHistory();
  const gotoHome = () => {
    history.push("/");
  };
  return (
    <div className="imageCard">
      <div className="imageTitle"></div>
      <div className="imageRobot">
        <div className="">{children}</div>
      </div>
    </div>
  );
};

export default RobotImage;
