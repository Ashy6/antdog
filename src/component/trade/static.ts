import { Resource } from "../../types";
import transactions from "../../assets/transactions.png";
import withdrawal from "../../assets/withdrawal.png";

export const TRADE_INFO = "Latest 10 transactions and payments";
export const TRADE_List = [
  {
    icon: transactions,
    title: "Gift Card Transactions",
    resource: Resource.transaction,
  },
  {
    icon: withdrawal,
    title: "Cash withdrawal payment",
    resource: Resource.withdraw,
  },
];
