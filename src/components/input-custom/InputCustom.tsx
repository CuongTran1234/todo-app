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
  inputValue?: string;
  placeholder?: string;
  text?: string;
  onSave: (value: string) => void;
}

const InputCustom: React.FC<InputCustomProps> = ({
  inputValue,
  placeholder,
  text,
  onSave,
}) => {
  const { t } = useTranslation();
  const [isCustomInput, setIsCustomInput] = useState<boolean>(false);
  const [inputText, setInputText] = useState<string>(inputValue || "");

  const onSubmit = (event: React.FormEvent<EventTarget>) => {
    event.preventDefault();

    const inputValue = inputText.trim();

    if (inputValue) {
      onSave(inputValue);
      setIsCustomInput(false);
    }
  };

  return (
    <InputContainer>
      {isCustomInput ? (
        <InputFormContainer onSubmit={onSubmit}>
          <InputForm
            type="text"
            autoFocus
            value={inputText}
            placeholder={placeholder}
            onChange={(e) => setInputText(e.target.value)}
            maxLength={255}
          />
          <InputFooter>
            <Button type="submit" varient="success">
              {t("board.action.add")}
            </Button>
            <Button
              type="button"
              varient="default"
              onClick={() => setIsCustomInput(false)}
            >
              {t("board.action.close")}
            </Button>
          </InputFooter>
        </InputFormContainer>
      ) : (
        <InputShowForm onClick={() => setIsCustomInput(true)}>
          {text || t("board.placeholder.clickToAddText")}
        </InputShowForm>
      )}
    </InputContainer>
  );
};

export default InputCustom;
