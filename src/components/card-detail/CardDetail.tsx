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
} from "./styles";

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

const CardDetail: React.FC<CardDetailProps> = ({ onClose, card, boardId }) => {
  const { t } = useTranslation();
  const [status, setStatus] = useState<StatusData[]>([]);
  const [boardValue, setBoardValue] = useState<number>(boardId);
  const [cardItem, setCardItem] = useState<Cards>({
    id: card?.id || "",
    name: card?.name || "",
    createdAt: card?.createdAt || "",
    description: card?.description || "",
  });

  const updateDate = (date: string) => {
    if (!date) return;

    setCardItem({
      ...cardItem,
      createdAt: date,
    });
  };

  const updateTitle = (title: string) => {
    if (!title) return;

    setCardItem({
      ...cardItem,
      name: title,
    });
  };

  const updateDescription = (description: string) => {
    setCardItem({
      ...cardItem,
      description,
    });
  };

  useEffect(() => {
    setStatus(DataBoard.map((item) => ({ label: item.title, value: item.id })));
  }, []);

  return (
    <Modal onClose={onClose}>
      <CardDetailContainer>
        {/* Title */}
        <CardDetailBox>
          <CardDetailTitle>
            <CardDetaiTitleIcon />
            <CardDetailTitleText>{t("board.title")}</CardDetailTitleText>
          </CardDetailTitle>
          <InputCustom
            inputValue={cardItem.name}
            text={cardItem.name}
            placeholder={t("board.placeholder.pleaseInputText")}
            onSave={updateTitle}
          />
        </CardDetailBox>
        {/* Description */}
        <CardDetailBox>
          <CardDetailTitle>
            <CardDetailDescriptionIcon />
            <CardDetailTitleText>{t("board.description")}</CardDetailTitleText>
          </CardDetailTitle>
          <InputCustom
            inputValue={cardItem.description}
            text={cardItem.description}
            placeholder={t("board.placeholder.pleaseInputDesc")}
            onSave={updateDescription}
          />
        </CardDetailBox>
        {/* Date */}
        <CardDetailBox>
          <CardDetailTitle>
            <CardDetailDateIcon />
            <CardDetailTitleText>{t("board.created")}</CardDetailTitleText>
          </CardDetailTitle>
          <CardDateInput
            value={cardItem.createdAt}
            type="date"
            onChange={(e) => updateDate(e.target.value)}
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
