import { PaymentMethodsType, nil } from "../constants"
import { v4 as uuidv4 } from 'uuid'
import R from 'ramda'
import { throwCustomError, CustomError} from "../../utils"
import { EClassError } from "../../utils/errors"

export interface TransactionInt {
    value: number,
    description: string,
    payment_method: PaymentMethodsType,
    card_number: string,
    card_owner_name: string,
    card_expiration_date: Date,
    card_cvv: number
}

export interface Transaction extends TransactionInt {
    id: string,
    created_at: string,
    updated_at: string,
}

const vctSignature = 'business.protocol.validateCreateTransaction'

export function validateCreateTransaction(data: TransactionInt | nil): Transaction | nil {
    if (R.isNil(data)) {
        throwCustomError(new Error('invalid entry data'), vctSignature, EClassError.USER_ERROR)
    } else {
        const creationData = toISOString
        return {
            ...data,
            id: uuidv4()
        }
    }
    return null
} 

