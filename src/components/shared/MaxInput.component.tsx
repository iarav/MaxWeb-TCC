import "./MaxInput.component.css";

interface MaxInputProps {
  name: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
  customClass?: string;
  customMaxLength?: number;
  type?: string;
}

const MaxInput: React.FC<MaxInputProps> = ({
  name,
  value,
  onChange,
  placeholder = "",
  customClass = "",
  customMaxLength = 20,
  type = "text",
}) => {
  const classNames = `maxInput ${customClass}`.trim();
  const maxLenght = customMaxLength ? customMaxLength : 20;
  return (
    <input
      className={classNames}
      type={type}
      name={name}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      maxLength={maxLenght}
    />
  );
};

export default MaxInput;
