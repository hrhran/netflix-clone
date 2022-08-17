import {login, logout} from './types'

export const loginAction = () => {
    return { type: login }
}

export const logoutAction = () => {
    return { type: logout }
}