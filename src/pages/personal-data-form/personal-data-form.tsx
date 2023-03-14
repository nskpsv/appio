import { ChangeEvent, FormEvent, MouseEvent, useState } from 'react';
import styles from './personal-data-form.module.css';
import { Button } from './../../components/button/button';
import { Option, Radio } from '../../components/forms/radio/radio';
import { SubmitFormState } from './models/form';
import { Field } from '../../components/forms/field/field';
import { Input } from '../../components/forms/input/input';
import { Select } from '../../components/forms/select/select';
import { Phone } from '../../components/forms/phone/phone';
import { Sex } from './models/select-options';
import { formValidator } from './utils/form-validator';
import { Popup } from '../../components/popup/popup';

const getInitialFormState = (): SubmitFormState => {
  return {
  name: {
    value: '',
    error: '',
  },
  surname: {
    value: '',
    error: '',
  },
  birthDate: {
    value: '',
    error: '',
  },
  sex: {
    value: '',
    error: '',
  },
  address: {
    value: '',
    error: '',
  },
  agreement: {
    value: 'no',
    error: '',
  },
  phone: {
    value: '',
    error: '',
  },
  email: {
    value: '',
    error: '',
  },
};
};

const sexOptions: Sex[] = ['Выберите пол', 'Женский', 'Мужской'];
const agreementOptions: Option[] = [
  { name: 'Да', value: 'yes' },
  { name: 'Нет', value: 'no' },
];

export const PersonalDataForm = () => {
  const [formState, setFormState] = useState(getInitialFormState());
  const [showPopup, setShowPopup] = useState(false);
  const [popupMessage, setPopupMessage] = useState('');

  const handleFormInput = (
    e: ChangeEvent<HTMLInputElement & HTMLSelectElement>,
  ) => {
    const name = e.target.name as keyof SubmitFormState;

    setFormState((prev) => {
      const result = {
        ...prev,
        [name]: {
          value: e.target.value,
          error: '',
        },
      };

      return result;
    });
  };

  const togglePopup = () => {
    setShowPopup((prev) => !prev);
  };

  const clearForm = () => {    
    setFormState(getInitialFormState());
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const [isValid, verifiedState] = formValidator(formState);

    if (isValid) {
      if (formState.agreement.value !== 'yes') {
        alert('Вы не дали согласие на отправку ваших данных.');
        setFormState((prev) => ({
          ...prev,
          agreement: {
            ...prev.agreement,
            error: 'error',
          },
        }));
        return;
      } else {
        setPopupMessage(
          `Благодарим вас, ${formState.name.value} ${formState.surname.value}, за то что отправили форму`,
        );
        togglePopup();
        clearForm();
        return;
      }
    }
    setFormState(verifiedState);
  };

  const handleClearForm = (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    clearForm();
  }

  return (
    <div className={styles.pageWrapper}>
      <Popup meesage={popupMessage} show={showPopup} onClose={togglePopup} />
      <header className={styles.formHeader}>
        Форма отправки персональных данных
      </header>
      <form className={styles.form} onSubmit={handleSubmit}>
        <Field label="Имя" labelFor="name" error={formState.name.error}>
          <Input
            value={formState.name.value}
            onChange={handleFormInput}
            name="name"
            error={Boolean(formState.name.error)}
          />
        </Field>
        <Field
          label="Фамилия"
          labelFor="surname"
          error={formState.surname.error}
        >
          <Input
            value={formState.surname.value}
            onChange={handleFormInput}
            name="surname"
            error={Boolean(formState.surname.error)}
          />
        </Field>
        <Field
          label="Дата рождения"
          labelFor="birthDate"
          error={formState.birthDate.error}
        >
          <Input
            value={formState.birthDate.value}
            onChange={handleFormInput}
            name="birthDate"
            error={Boolean(formState.birthDate.error)}
            type="date"
          />
        </Field>
        <Field label="Пол" labelFor="sex" error={formState.sex.error}>
          <Select
            value={formState.sex.value}
            options={sexOptions}
            onChange={handleFormInput}
            name="sex"
            error={Boolean(formState.sex.error)}
          />
        </Field>
        <Field
          label="Номер телефона"
          labelFor="phone"
          error={formState.phone.error}
        >
          <Phone
            value={formState.phone.value}
            onChange={handleFormInput}
            name="phone"
            error={Boolean(formState.phone.error)}
          />
        </Field>
        <Field label="Email" labelFor="email" error={formState.email.error}>
          <Input
            value={formState.email.value}
            onChange={handleFormInput}
            name="email"
            error={Boolean(formState.email.error)}
          />
        </Field>
        <Field label="Адрес" labelFor="address" error={formState.address.error}>
          <Input
            value={formState.address.value}
            onChange={handleFormInput}
            name="address"
            error={Boolean(formState.address.error)}
          />
        </Field>
        <Field label="Согласен на обработку данных" labelFor="agreement">
          <Radio
            value={formState.agreement.value}
            onChange={handleFormInput}
            name="agreement"
            options={agreementOptions}
            defaultValue="no"
            error={Boolean(formState.agreement.error)}
          />
        </Field>
        <div className={styles.buttons}>
          <Button buttonType="submit" label="Отправить" type="submit" />
          <Button buttonType="cancel" label="Отчистить форму" type='button' onClick={handleClearForm}/>
        </div>
      </form>
    </div>
  );
};
