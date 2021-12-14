import { notification } from "antd";

export const notificationTypes = {
  success: "success",
  info: "info",
  warning: "warning",
  error: "error",
};

export const openNotification = (type, title, msg) => {
  notification[type]({
    message: title,
    description: msg,
  });
};
