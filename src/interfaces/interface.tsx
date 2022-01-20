/**
 * custom interfaces to handle
 * generic types within the app
*/

export interface CardDataType {
    availableBalance?: number;
    cvv?: number;
    cardNumber?: string;
    name?: string;
    validateDate?: string;
    currentSpend?: number;
    spendLimit?: number;
}

export interface CardDataProps {
    cardData?: CardDataType;
    onLimitSetCallBack?: (spendLimit: number) => void;
    onSpendMoneyCallBack?: (spendMoney: number, isTopUp?: boolean) => void;
}
