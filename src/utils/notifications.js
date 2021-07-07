import { notification } from 'antd';

export const openNotification = (type, msg, duration) => {
  notification[type]({
    message: msg,
    duration,
  });
};
