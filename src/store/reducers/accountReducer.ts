export interface IAccount {
    balance: number
}

export interface IAccountWithdraw {
    type: String,
    payload: number
}

export interface IAccountDeposit {
    type: String,
    payload: number
}

const initialAccountState: IAccount = {
    balance: 0
}

const reducer = (state : IAccount = initialAccountState, action: IAccountWithdraw | IAccountDeposit) =>{
    switch (action.type){
        case 'WITHDRAW': return {
            ...state,
            balance: state.balance + action.payload
        }
        case 'DEPOSIT': return {
            ...state,
            balance: state.balance + action.payload
        }
        default: return state
    }
}

export default reducer
