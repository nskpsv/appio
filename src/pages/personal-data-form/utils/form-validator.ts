import { SubmitFormState } from '../models/form';
import { required } from './validators/require';
import { birthDate } from './validators/birth-date';
import { email } from './validators/email';
import { phone } from './validators/phone';
import { text } from './validators/text';

export type ValidatorResult = [result: boolean, state: SubmitFormState];

export const formValidator = (state: SubmitFormState): ValidatorResult => {
  let result = true;
  const resultState = { ...state };

  for (let key in resultState) {
    switch (key as keyof SubmitFormState) {
      case 'name': {
        resultState.name.error =
          required(resultState.name.value) || text(resultState.name.value);
        break;
      }

      case 'surname': {
        resultState.surname.error =
          required(resultState.surname.value) ||
          text(resultState.surname.value);
        break;
      }

      case 'birthDate': {
        resultState.birthDate.error =
          required(resultState.birthDate.value) ||
          birthDate(resultState.birthDate.value);

        break;
      }

      case 'sex': {
        resultState.sex.error = required(resultState.sex.value);
        break;
      }

      case 'phone': {
        resultState.phone.error =
          required(resultState.phone.value) || phone(resultState.phone.value);
        break;
      }

      case 'email': {
        if (resultState.email.value) {
          resultState.email.error = email(resultState.email.value);
        }
        break;
      }
    }

    if (resultState[key as keyof SubmitFormState].error !== '') {
      result = false;
    }
  }

  return [result, resultState];
};
