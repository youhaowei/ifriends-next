import { DateTime } from "luxon";

export const FORMATS = {
  DATE: "date",
  LOCATION: "location",
  TIME: "time",
  DATETIME: "datetime",
};

const TUCSON_TZ = "America/Phoenix";

export function wrapValue(value, format) {
  switch (format) {
    case FORMATS.LOCATION:
      return (
        <a href={`https://www.google.com/maps/search/${value}}`}>{value}</a>
      );
    default:
      return value;
  }
}

export function formatValue(value, format) {
  if (!value) {
    return value;
  }
  switch (format) {
    case FORMATS.DATE:
      return DateTime.fromISO(value).setZone(TUCSON_TZ).toLocaleString();
    case FORMATS.TIME:
      return DateTime.fromISO(value).setZone(TUCSON_TZ).toLocaleString(DateTime.TIME_SIMPLE);
    case FORMATS.DATETIME:
      return DateTime.fromISO(value).setZone(TUCSON_TZ).toLocaleString(DateTime.DATETIME_MED);
    default:
      return value;
  }
}

export function wrapFormatValue(value, format) {
  return wrapValue(formatValue(value, format), format);
}
