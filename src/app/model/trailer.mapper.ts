// utils
import { getDataElement } from '@utils/commons.utils';

// model
import { Trailer } from '@model/trailer.model';

export const mapTrailer = (trailersData: Record<string, any> = []): Trailer[] => {
  const resultsArray = getDataElement(trailersData, 'results', []);
  return resultsArray.map((trailer: Record<string, any>) => ({
    id: getDataElement(trailer, 'id', ''),
    key: getDataElement(trailer, 'key', ''),
    site: getDataElement(trailer, 'site', '')
  }));
};
