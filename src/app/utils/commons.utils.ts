// vendors
import get from 'lodash/get';

export const getDataElement = (object: object | Array<any>, path: string, defaultValue: any): any => {
  const dataElement = get(object, path, defaultValue);
  return (dataElement === undefined || dataElement === null) ? defaultValue : dataElement;
};

export const limitTextLength = (maxLength: number, text: string = '') => (
  text.length > maxLength ? `${text.substring(0, maxLength)}...` : text
);
