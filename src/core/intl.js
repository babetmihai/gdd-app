import _ from 'lodash'
import actions from 'store/actions'
import moment from 'moment'
import DEFAULT_MESSAGES from './messages/en.json'

export const LOCALE_LIST = ['en', 'ro']

export const initLocale = async () => {
  let locale = navigator.language.substr(0, 2)
  if (!LOCALE_LIST.includes(locale)) locale = _.first(LOCALE_LIST)
  moment.locale(locale)

  let messages
  try {
    messages = await import(`messages/${locale}.json`)
      .then(({ default: messages }) => messages)
  } catch {
    // do nothing
  }

  actions.set('intl', {
    locale,
    messages: {
      ...DEFAULT_MESSAGES,
      ...messages
    } })
}

export const selectLocale = () => actions.get('intl.locale')

const formatId = (id) => _.capitalize(id.split('.').join(' '))
const replaceParams = (message, params) => message.replace(/\{(.+?)\}/g, (val, key) => _.get(params, key.trim(), ''))

export const t = (id, params, defaultMessage = '') => {
  if (!id) return ''
  const messages = actions.get('intl.messages', {})
  let message = messages[id] || defaultMessage
  if (params && message) message = replaceParams(message, params)
  if (!message) message = formatId(id) || ''
  return message
}

export default actions