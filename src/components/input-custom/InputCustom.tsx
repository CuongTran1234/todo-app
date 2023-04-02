import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import Button from "../button/Button";
import {
  InputContainer,
  InputFooter,
  InputForm,
  InputFormContainer,
  InputShowForm,
} from "./styles";

interface InputCustomProps {
  inputValue: string;
  placeholder: string;
  text: string;
  name: string;
  onSave: (field: string, value: string) => void;
}

const InputCustom: React.FC<InputCustomProps> = ({
  inputValue,
  placeholder,
  text,
  name,
  onSave,
}) => {
  const { t } = useTranslation();
  const [isCustomInput, setIsCustomInput] = useState<boolean>(false);
  const [inputText, setInputText] = useState<string>(inputValue || "");

  const onSubmit = (event: React.FormEvent<EventTarget>) => {
    event.preventDefault();

    const inputValue = inputText.trim();

    onSave(name, inputValue);
    setIsCustomInput(false);
    setInputText("");
  };

  const onClose = () => {
    setIsCustomInput(false);
    setInputText(inputValue);
  };

  const onShowInput = () => {
    setInputText(inputValue);
    setIsCustomInput(true);
  };

  return (
    <InputContainer>
      {isCustomInput ? (
        <InputFormContainer onSubmit={onSubmit}>
          <InputForm
            type="text"
            autoFocus
            value={inputText}
            name={name}
            placeholder={placeholder}
            onChange={(e) => setInputText(e.target.value)}
            maxLength={255}
          />
          <InputFooter>
            <Button type="submit" varient="success">
              {t("board.action.add")}
            </Button>
            <Button type="button" varient="default" onClick={onClose}>
              {t("board.action.close")}
            </Button>
          </InputFooter>
        </InputFormContainer>
      ) : (
        <InputShowForm onClick={onShowInput}>
          {text || t("board.placeholder.clickToAddText")}
        </InputShowForm>
      )}
    </InputContainer>
  );
};

export default InputCustom;
