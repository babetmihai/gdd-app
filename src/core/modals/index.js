import actions from 'store/actions'

export const showModal = (type, props) => actions.set('modal', { type, ...props })
export const hideModal = () => actions.delete('modal')
export const selectModal = () => actions.get('modal', {})

export const MODALS = {

}