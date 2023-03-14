import { Field } from './field';
import { Agree } from './radio-options';
import { Sex } from './select-options';

export type SubmitFormState = {
  name: Field<string>;
  surname: Field<string>;
  birthDate: Field<string>;
  sex: Field<Sex>;
  phone: Field<string>;
  email: Field<string>;
  address: Field<string>;
  agreement: Field<Agree>;
};
