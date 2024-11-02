import React, { useEffect, useState } from "react";
import pt from "../../../i18n/pt";
import "./ConfirmFocalQuestion.modal.css";
import MaxInput from "../../shared/MaxInput.component";
import {
  FocalQuestionService,
  IFocalQuestionResponse,
} from "../../../services/FocalQuestion.service";

interface ConfirmFocalQuestionModalProps {
  focalQuestion: string;
  onFormChange: (formValues: { [key: string]: string }) => void;
  onFocalQuestionExists: (response: IFocalQuestionResponse) => void;
}

const service = new FocalQuestionService();

const ConfirmFocalQuestionModal: React.FC<ConfirmFocalQuestionModalProps> = ({
  focalQuestion,
  onFormChange,
  onFocalQuestionExists,
}) => {
  const [formValues, setFormValues] = useState<{ [key: string]: string }>({
    agentModal: "",
    conceptModal: "",
    domainModal: "",
    focalQuestionModal: "",
  });

  useEffect(() => {
    const fetchFocalQuestion = async () => {
      try {
        const response: IFocalQuestionResponse = await service.getFocalQuestion(
          focalQuestion
        );

        if (response.isRegistered) {
          onFocalQuestionExists(response);
          return;
        }

        const newFormValues = {
          agentModal: response.agent,
          conceptModal: response.concept,
          domainModal: response.domain,
          focalQuestionModal: focalQuestion,
        };

        setFormValues(newFormValues);
        onFormChange(newFormValues);
      } catch (error) {
        console.error("Erro ao buscar dados:", error);
      }
    };

    fetchFocalQuestion();
  }, [focalQuestion]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    const newFormValues = { ...formValues, [name]: value };

    setFormValues(newFormValues);
    onFormChange(newFormValues);
  };

  return (
    <>
      <div className="titleConfirmModal p-x-sm p-y-xs">
        {pt.getStarted.modal.head}
      </div>
      <div className="focalQuestionInformed p-y-xs p-x-xs">
        <div className="informedFocalQuestionTitle">
          {pt.getStarted.modal.informedFocalQuestion}
        </div>
        <div className="informedFocalQuestion p-x-xs">{focalQuestion}</div>
      </div>
      <div className="extractedInfos m-t-sm">
        <div className="infoInput">
          <span className="m-x-lg">{pt.commons.agent}: </span>
          <div className="input">
            <MaxInput
              name="agentModal"
              value={formValues.agentModal}
              onChange={handleInputChange}
              placeholder={pt.getStarted.focalQuestionInput}
              customClass="customInputClass"
            ></MaxInput>
          </div>
        </div>
        <div className="infoInput">
          <span className="m-x-lg">{pt.commons.concept}: </span>
          <div className="input">
            <MaxInput
              name="conceptModal"
              value={formValues.conceptModal}
              onChange={handleInputChange}
              placeholder={pt.getStarted.focalQuestionInput}
              customClass="customInputClass"
            ></MaxInput>
          </div>
        </div>
        <div className="infoInput">
          <span className="m-x-lg">{pt.commons.domain}: </span>
          <div className="input">
            <MaxInput
              name="domainModal"
              value={formValues.domainModal}
              onChange={handleInputChange}
              placeholder={pt.getStarted.focalQuestionInput}
              customClass="customInputClass"
            ></MaxInput>
          </div>
        </div>
        <div className="info m-t-sm">{pt.confirmFocalQuestionModal.info}</div>
      </div>
    </>
  );
};

export default ConfirmFocalQuestionModal;
