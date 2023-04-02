import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import DataBoard from "../../defaultData";
import { Cards } from "../../models/board";
import Helper from "../../utils";
import InputCustom from "../input-custom/InputCustom";
import Modal from "../modal/Modal";
import {
  CardDateInput,
  CardDetailBox,
  CardDetailContainer,
  CardDetailDateIcon,
  CardDetailDescriptionIcon,
  CardDetailStatusIcon,
  CardDetailTitle,
  CardDetailTitleText,
  CardDetaiTitleIcon,
  CardSelectForm,
  CardSelectOption,
  ErrorValidation,
  CardDetailTaskIcon,
  TaskItemList,
  TaskItem,
} from "./styles";
import {
  dateValidator,
  descriptionValidator,
  nameValidator,
} from "./validators";

interface CardDetailProps {
  card?: Cards;
  boardId: number;
  onClose: () => void;
  submitCard?: (boardId: number, card: Cards) => void;
  updateCard?: (boardIdFrom: number, boardIdTo: number, card: Cards) => void;
  removeCard?: (boardId: number, cardId: string) => void;
}

type StatusData = {
  label: string;
  value: number;
};

enum Field {
  "name" = "name",
  "createdAt" = "createdAt",
  "description" = "description",
}

const CardDetail: React.FC<CardDetailProps> = ({
  onClose,
  submitCard,
  updateCard,
  removeCard,
  card,
  boardId,
}) => {
  const { t } = useTranslation();
  const [status, setStatus] = useState<StatusData[]>([]);
  const [boardValue, setBoardValue] = useState<number>(boardId);
  const [cardItem, setCardItem] = useState<Cards>({
    id: card?.id || "",
    name: card?.name || "",
    createdAt: card?.createdAt.split("/").join("-") || "",
    description: card?.description || "",
    tasks: card?.tasks || [],
  });
  const [formValidate, setFormValidate] = useState<Omit<Cards, "id" | "tasks">>(
    {
      name: "",
      createdAt: "",
      description: "",
    }
  );
  const validateFunc: Record<Field, Function> = {
    name: nameValidator,
    description: descriptionValidator,
    createdAt: dateValidator,
  };

  const onValidateForm = (field: string, value: string) => {
    setFormValidate((prevValidate) => ({
      ...prevValidate,
      [field]: value,
    }));
  };

  const onAddTask = (value: string) => {
    const taskTemp = [...cardItem.tasks];
    taskTemp.push({
      id: Helper.uuid(),
      text: value,
    });

    setCardItem((prevCard) => ({
      ...prevCard,
      tasks: taskTemp,
    }));
  };

  const onUpdateField = (field: string, value: string) => {
    const validationFunc = validateFunc[field as keyof typeof Field];
    if (validationFunc) {
      const validateResult = validationFunc(value);

      onValidateForm(field, validateResult);
    }

    if (field === "task") {
      onAddTask(value);
      return;
    }

    setCardItem((prevCard) => ({
      ...prevCard,
      [field]: value,
    }));
  };

  const onSubmitCard = () => {
    const formKey = Object.keys(formValidate);
    let isValid = true;

    formKey.forEach((key) => {
      const validateResult = validateFunc[key as keyof typeof Field](
        cardItem[key as keyof typeof Field]
      );
      if (validateResult) {
        isValid = false;
      }

      onValidateForm(key, validateResult);
    });

    if (!isValid) return;

    if (submitCard) {
      submitCard(boardValue, cardItem);
      return;
    }

    if (updateCard) {
      updateCard(boardId, boardValue, cardItem);
    }
  };

  const onRemoveCard = () => {
    if (removeCard) {
      removeCard(boardId, cardItem.id);
    }
  };

  useEffect(() => {
    setStatus(DataBoard.map((item) => ({ label: item.title, value: item.id })));
  }, []);

  return (
    <Modal
      onDelete={onRemoveCard}
      onClose={onClose}
      onSubmit={onSubmitCard}
      isDelete={!!cardItem.id}
    >
      <CardDetailContainer>
        {/* Title */}
        <CardDetailBox>
          <CardDetailTitle>
            <CardDetaiTitleIcon />
            <CardDetailTitleText>{t("board.title")}</CardDetailTitleText>
          </CardDetailTitle>
          <InputCustom
            name="name"
            inputValue={cardItem.name}
            text={cardItem.name}
            placeholder={t("board.placeholder.pleaseInputText")}
            onSave={onUpdateField}
          />
          {formValidate.name && (
            <ErrorValidation>{formValidate.name}</ErrorValidation>
          )}
        </CardDetailBox>
        {/* Description */}
        <CardDetailBox>
          <CardDetailTitle>
            <CardDetailDescriptionIcon />
            <CardDetailTitleText>{t("board.description")}</CardDetailTitleText>
          </CardDetailTitle>
          <InputCustom
            name="description"
            inputValue={cardItem.description}
            text={cardItem.description}
            placeholder={t("board.placeholder.pleaseInputDesc")}
            onSave={onUpdateField}
          />
          {formValidate.description && (
            <ErrorValidation>{formValidate.description}</ErrorValidation>
          )}
        </CardDetailBox>
        {/* Date */}
        <CardDetailBox>
          <CardDetailTitle>
            <CardDetailDateIcon />
            <CardDetailTitleText>{t("board.created")}</CardDetailTitleText>
          </CardDetailTitle>
          <CardDateInput
            name="createdAt"
            value={cardItem.createdAt}
            type="date"
            onChange={(e) => onUpdateField(e.target.name, e.target.value)}
          />
          {formValidate.createdAt && (
            <ErrorValidation>{formValidate.createdAt}</ErrorValidation>
          )}
        </CardDetailBox>
        {/* Tasks */}
        <CardDetailBox>
          <CardDetailTitle>
            <CardDetailTaskIcon />
            <CardDetailTitleText>{t("board.task")}</CardDetailTitleText>
          </CardDetailTitle>
          <TaskItemList>
            {cardItem.tasks.map((item) => (
              <TaskItem key={item.id}>{item.text}</TaskItem>
            ))}
          </TaskItemList>
          <InputCustom
            name="task"
            inputValue=""
            text=""
            placeholder={t("board.placeholder.pleaseInputText")}
            onSave={onUpdateField}
          />
        </CardDetailBox>
        {/* Status */}
        <CardDetailBox>
          <CardDetailTitle>
            <CardDetailStatusIcon />
            <CardDetailTitleText>{t("board.status")}</CardDetailTitleText>
          </CardDetailTitle>
          <CardSelectForm
            value={boardValue}
            onChange={(e) => setBoardValue(Number(e.target.value))}
          >
            {status.map((item) => (
              <CardSelectOption value={item.value} key={item.value}>
                {item.label}
              </CardSelectOption>
            ))}
          </CardSelectForm>
        </CardDetailBox>
      </CardDetailContainer>
    </Modal>
  );
};

export default CardDetail;
