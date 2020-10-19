import { useMemo } from 'react'
import { LANG } from '../config/constants'

export const useTgLink = (i18nLang) => {
  switch (i18nLang) {
    case LANG.US:
      return 'https://t.me/elastosgroup'
    case LANG.ZH:
      return 'https://t.me/ElastosChina'
    default:
      return 'https://t.me/elastosgroup'
  }

  // not expensive for now so don't useMemo
  /*
  return useMemo(() => {

    console.log('useMemo tgLink')

    switch (i18nLang){
      case LANG.US:
        return 'https://t.me/elastosgroup'
      case LANG.ZH:
        return 'https://t.me/ElastosChina'
      default:
        return 'https://t.me/elastosgroup'
    }

  }, [i18nLang])
   */
}
