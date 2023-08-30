import { enUs, koKR } from '@/locale'
import VueI18n from 'vue-i18n'
import Vue from 'vue'

Vue.use(VueI18n)

export const i18n = new VueI18n({
  locale: 'ko_KR',
  messages: {
    en_US: enUs,
    ko_KR: koKR
  }
})
