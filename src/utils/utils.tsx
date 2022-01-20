import { formatCurrency } from "react-native-format-currency";

/**
 * @constant formattedAmount
 * @description formatting amount to string
 * with require separators
*/
export const formattedAmount = (amount?: number) => {
    if (amount) {
        const formattedAmountString = formatCurrency({ amount, code: 'USD' })[1];
        return formattedAmountString;
    }
    return amount;
}