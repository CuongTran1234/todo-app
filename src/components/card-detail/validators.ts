import i18n from "../../i18n/i18n";

export const nameValidator = (name: string) => {
  if (!name) {
    return i18n.t("board.messsages.fieldRequired", {
      field: i18n.t("board.title"),
    });
  }

  if (name.length < 6) {
    return i18n.t("board.messsages.minimumCharater", {
      field: i18n.t("board.title"),
    });
  }

  return "";
};

export const descriptionValidator = (description: string) => {
  if (!description) {
    return i18n.t("board.messsages.fieldRequired", {
      field: i18n.t("board.description"),
    });
  }

  if (description.length < 6) {
    return i18n.t("board.messsages.minimumCharater", {
      field: i18n.t("board.title"),
    });
  }

  return "";
};

export const dateValidator = (date: string) => {
  if (!date) {
    return i18n.t("board.messsages.fieldRequired", {
      field: i18n.t("board.created"),
    });
  }

  return "";
};
