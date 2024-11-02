import { useState } from "react";
import MaxInput from "../shared/MaxInput.component";
import "./GetStarted.component.css";
import pt from "../../i18n/pt";
import MaxButton from "../shared/MaxButton.component";
import { useHistory } from "react-router";
import MaxModal from "../shared/MaxModal.component";
import ConfirmFocalQuestionModal from "./modal/ConfirmFocalQuestion.modal";
import Alert from "../shared/Alert.component";
import CodigoModal from "./modal/Codigo.modal";
import { CodigoService } from "../../services/Codigo.service";
import { IFocalQuestionResponse } from "../../services/FocalQuestion.service";

const codigoService = new CodigoService();
const GetStarted: React.FC = () => {
  const history = useHistory();
  const [formValues, setFormValues] = useState<{ [key: string]: string }>({
    focalQuestionInput: "",
    agentInput: "",
    emailInput: "",
  });
  const [formValuesModal, setFormValuesModal] = useState<{
    [key: string]: string;
  }>({
    focalQuestionModal: "",
    agentModal: "",
    conceptModal: "",
    domainModal: "",
  });

  const [codigo, setCodigo] = useState<string>("");

  const [isFocalQuestionModalOpen, setFocalQuestionModalOpen] = useState(false);
  const [isCodigoModalOpen, setCodigoModalOpen] = useState(false);
  const [isAlertOpen, setAlertOpen] = useState(false);

  const openModal = () => {
    if (
      !formValues.focalQuestionInput ||
      !formValues.agentInput ||
      !formValues.emailInput
    ) {
      setAlertOpen(true);
      return;
    }
    setFocalQuestionModalOpen(true);
  };

  const closeModalFocalQuestion = () => {
    setFocalQuestionModalOpen(false);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormValues((prevValues) => ({
      ...prevValues,
      [name]: value,
    }));
  };

  const onFocalQuestionExists = (response: IFocalQuestionResponse) => {
    const newFormValues = {
      agentModal: response.agent,
      conceptModal: response.concept,
      domainModal: response.domain,
      focalQuestionModal: response.focal_question,
    };
    setFormValuesModal(newFormValues);

    submit();
  };

  const submit = async () => {
    const createChatResponse = await codigoService.getCodigo({
      focalQuestion: {
        agent: formValuesModal.agentModal,
        concept: formValuesModal.conceptModal,
        domain: formValuesModal.domainModal,
        focal_question: formValuesModal.focalQuestionModal,
      },
      agent: { name: formValues.agentInput, email: formValues.emailInput },
    });

    setCodigo(createChatResponse.access_code);
    setFocalQuestionModalOpen(false);
    setCodigoModalOpen(true);
  };

  const handleFormChange = (newFormValues: { [key: string]: string }) => {
    setFormValuesModal((prevValues) => ({
      ...prevValues,
      ...newFormValues,
    }));
  };

  const cancel = () => {
    history.push("/");
  };

  const gotoAgentPage = () => {
    setCodigoModalOpen(false);
    history.push("/agent");
  };

  return (
    <div className="getStarted">
      <strong>
        <h1 className="fontSansationGetStarted">{pt.getStarted.title}</h1>
      </strong>
      <MaxInput
        name="focalQuestionInput"
        value={formValues.focalQuestionInput}
        onChange={handleInputChange}
        placeholder={pt.getStarted.focalQuestionInput}
        customMaxLength={1000}
      ></MaxInput>
      <MaxInput
        name="agentInput"
        value={formValues.agent}
        onChange={handleInputChange}
        placeholder={pt.getStarted.agentInput}
        customMaxLength={100}
      ></MaxInput>
      <MaxInput
        name="emailInput"
        value={formValues.email}
        onChange={handleInputChange}
        placeholder={pt.getStarted.emailInput}
        customMaxLength={50}
      ></MaxInput>

      <div className="buttons m-x-md m-t-sm">
        {" "}
        <MaxButton
          name={pt.getStarted.cancelButton}
          onClick={cancel}
          color="--ion-color-secondary"
        ></MaxButton>
        <MaxButton
          name={pt.getStarted.submitButton}
          onClick={openModal}
        ></MaxButton>
      </div>

      <div className="gradient-border-container">
        <div className="gradient-bordered">
          <span
            dangerouslySetInnerHTML={{ __html: pt.getStarted.description }}
          ></span>
        </div>
      </div>

      <MaxModal
        isOpen={isFocalQuestionModalOpen}
        onClose={closeModalFocalQuestion}
        onConfirm={submit}
      >
        <ConfirmFocalQuestionModal
          focalQuestion={formValues.focalQuestionInput}
          onFormChange={handleFormChange}
          onFocalQuestionExists={onFocalQuestionExists}
        />
      </MaxModal>

      <MaxModal
        isOpen={isCodigoModalOpen}
        onConfirm={gotoAgentPage}
        customConfirmTitle="ok"
      >
        <CodigoModal codigo={codigo}></CodigoModal>
      </MaxModal>

      <Alert
        isOpen={isAlertOpen}
        message={pt.getStarted.alertMessage}
        type="warning"
        onClose={() => setAlertOpen(false)}
      ></Alert>
    </div>
  );
};

export default GetStarted;
