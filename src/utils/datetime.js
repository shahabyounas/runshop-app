import { format as formateDate } from "date-fns";
import { APP_DATE_FORMAT } from "./commons";

export function getTimeStamp(date) {
  if (typeof date === "string" || date instanceof Date) {
    const d = new Date(date);
    return d.getTime();
  }
  return new Date().getTime();
}

export function format(dateInMilliSeconds, dateFormat = APP_DATE_FORMAT) {
  if (typeof dateInMilliSeconds === "string") {
    const d = new Date(parseInt(dateInMilliSeconds));
    return formateDate(d, dateFormat);
  }
  return formateDate(new Date(dateInMilliSeconds), dateFormat);
}
