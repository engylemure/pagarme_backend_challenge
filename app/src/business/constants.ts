import { ValueOf } from "../utils";

export type PaymentMethods = {
    CREDIT_CARD: 'credit_card',
    DEBIT_CARD: 'debit_card'
}

export type PayableStatus = {
    PAID: 'paid',
    WAITING_FUNDS: 'waiting_funds'
}

export const EPayableStatus: PayableStatus = {
    PAID: 'paid',
    WAITING_FUNDS: 'waiting_funds'
}

export const EPaymentMethods: PaymentMethods = {
    CREDIT_CARD: 'credit_card',
    DEBIT_CARD: 'debit_card'
}

export type PayableStatusType = ValueOf<PayableStatus>;

export type PaymentMethodsType = ValueOf<PaymentMethods>;

export type nil = null | undefined;