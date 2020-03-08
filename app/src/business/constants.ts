import { ValueOf } from "../utils";

export type PaymentMethods = {
    CREDIT_CARD: 'credit_card',
    DEBIT_CARD: 'debit_card'
}

export type PaymentMethodsType = ValueOf<PaymentMethods>;

export type nil = null | undefined;