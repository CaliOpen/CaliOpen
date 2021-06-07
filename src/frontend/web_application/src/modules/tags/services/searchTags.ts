import { withI18nProps } from '@lingui/react';
import { TagCommon } from '../types';
import { getTagLabel } from './getTagLabel';

const EMPTY_ARRAY = [];
export function searchTags(
  i18n: withI18nProps['i18n'],
  tags: TagCommon[],
  terms: string
) {
  if (!terms.length) {
    return EMPTY_ARRAY;
  }

  return tags.filter((tag) =>
    getTagLabel(i18n, tag).toLowerCase().startsWith(terms.toLowerCase())
  );
}
