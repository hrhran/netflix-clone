const loginReducer = (auth=false, action) => {
    switch(action.type) {
        case "LOGIN":
            return {auth:!auth};
        case "LOGOUT":
            return {auth:!auth}
        default:
            return auth
    }
}

export default loginReducer