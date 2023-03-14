import dayjs from "dayjs";

export const birthDate = (value: string) => dayjs().isAfter(value) ? '' : 'Вам нужно вернуться назад, в будущее)'