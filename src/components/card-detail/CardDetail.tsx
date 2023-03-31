import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import DataBoard from "../../defaultData";
import { Cards } from "../../models/board";
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
} from "./styles";
import { nameValidator } from "./validators";

interface CardDetailProps {
  card?: Cards;
  boardId: number;
  onClose: () => void;
  addCard: (boardId: number, card: Cards) => void;
}

type StatusData = {
  label: string;
  value: number;
};

const CardDetail: React.FC<CardDetailProps> = ({
  onClose,
  addCard,
  card,
  boardId,
}) => {
  const { t } = useTranslation();
  const [status, setStatus] = useState<StatusData[]>([]);
  const [boardValue, setBoardValue] = useState<number>(boardId);
  const [cardItem, setCardItem] = useState<Cards>({
    id: card?.id || "",
    name: card?.name || "",
    createdAt: card?.createdAt || "",
    description: card?.description || "",
  });
  const [formValidate, setFormValidate] = useState<Omit<Cards, "id">>({
    name: "",
    createdAt: "",
    description: "",
  });

  const onUpdateField = (field: string, value: string) => {
    const validateFunc: Record<string, Function> = {
      name: nameValidator,
    };

    const validateResult = validateFunc[field](value);

    setFormValidate((prevValidate) => ({
      ...prevValidate,
      [field]: validateResult,
    }));

    setCardItem((prevCard) => ({
      ...prevCard,
      [field]: value,
    }));
  };

  const addCardHandler = () => {
    addCard(boardValue, cardItem);
  };

  useEffect(() => {
    setStatus(DataBoard.map((item) => ({ label: item.title, value: item.id })));
  }, []);

  return (
    <Modal onClose={onClose} onSubmit={addCardHandler}>
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
