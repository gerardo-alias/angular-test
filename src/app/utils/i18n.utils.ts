// config
import { CURRENT_LANG } from '@config/settings';

// languages
import languages from '@language/langs';

// constants
import {
  I18_DEFAULT_TRANSLATION,
  I18_KEY_SEPARATOR,
  I18N_REPLACEMENT_WILDCARD
} from '@constants/constants';

// @Utils
import { getDataElement } from './commons.utils';

export const formatText = (
  key: string = '',
  replacements: string[] | number[] = []
): string => {
  const lang: Record<string, string> = getDataElement(languages, `${CURRENT_LANG}`, {});
  const splittedKey: Array<string> = key.split(I18_KEY_SEPARATOR);

  if (splittedKey.length !== 2) {
    return I18_DEFAULT_TRANSLATION;
  }

  let translation: string = getDataElement(
    lang,
    `${splittedKey[0]}.${splittedKey[1]}`,
    I18_DEFAULT_TRANSLATION
  );

  replacements.forEach(replacement => {
    translation = translation.replace(I18N_REPLACEMENT_WILDCARD, replacement.toString());
  });
  return translation;
};
