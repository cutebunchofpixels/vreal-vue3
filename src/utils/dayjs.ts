import baseDayJs from 'dayjs'
import utc from 'dayjs/plugin/utc'
import timezone from 'dayjs/plugin/timezone'
import isSameOrAfter from 'dayjs/plugin/isSameOrAfter'
import isSameOrBefore from 'dayjs/plugin/isSameOrBefore'
import 'dayjs/locale/en'
import 'dayjs/locale/he'

import { inferLocale } from './inferLocale'

baseDayJs.extend(utc)
baseDayJs.extend(timezone)
baseDayJs.extend(isSameOrAfter)
baseDayJs.extend(isSameOrBefore)
baseDayJs.tz.setDefault(baseDayJs.tz.guess())

const locale = inferLocale()
baseDayJs.locale(locale)

export const dayjs = baseDayJs
