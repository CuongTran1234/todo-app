import i18n from "../../i18n/i18n";

export const nameValidator = (name: string) => {
  if (!name) {
    return "Name is required";
  }

  if (name.length < 6) {
    return "Name must have a minimum 6 characters";
  }

  return "";
};

export const descriptionValidator = (description: string) => {
  if(!description) {
    return "Description is required";
  }

  if(description.length < 6) {
    return "Name must have a minimum 6 characters";
  }

  return "";
}

export const dateValidator = (date: string) => {
  if(!date) {
    return "Date is required";
  }

  return "";
}