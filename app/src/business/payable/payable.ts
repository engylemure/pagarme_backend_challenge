import {EPayableStatus, nil, PayableStatus, PayableStatusType, PaymentMethodsType} from "../constants"
import { v4 as uuidv4 } from 'uuid'
import R from 'ramda'
import { throwCustomError, CustomError} from "../../utils"
import { EClassError } from "../../utils/errors"
import {Transaction} from "../transaction";

const vcpSignature = 'business.protocol.validateCreatePayable'

export interface Payable {
    id: string,
    status: PayableStatusType,

}

export function validateCreatePayable(data: Transaction | nil): Payable | nil {
    if (R.isNil(data)) {
        throwCustomError(new Error('invalid entry data'), vcpSignature, EClassError.USER_ERROR)
    } else {
        const status = payableStatusFromPaymentMethod(data.payment_method);
        if (!R.isNil(status)) {
            return {
                status,
                id: uuidv4()
            }
        }
    }
    return null
}

const psfpmSignature = 'business.protocol.payableStatusFromPaymentMethod'

function payableStatusFromPaymentMethod(method: PaymentMethodsType): PayableStatusType | nil {
    switch (method) {
        case "credit_card":
            return EPayableStatus.WAITING_FUNDS
        case "debit_card":
            return EPayableStatus.PAID
        default:
            throwCustomError(new Error('unknown Payment method'), psfpmSignature, EClassError.USER_ERROR)
    }
}