import {ESC_KEYCODE, ENTER_KEYCODE} from '../const.js'

export const isEscKeyDown = (evt, action) => {
  evt.keyCode === ESC_KEYCODE ? action() : ``;
};

export const isEnterKeyDown = (evt, action) => {
  evt.keyCode === ENTER_KEYCODE ? action() : ``;
};

const castTimeFormat = (value) => {
  return value < 10 ? `0${value}` : String(value);
};

export const formatTime = (date) => {
  const hours = castTimeFormat(date.getHours() % 12);
  const minutes = castTimeFormat(date.getMinutes());
  return `${hours}:${minutes}`;
};
