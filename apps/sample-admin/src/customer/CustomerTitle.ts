import { Customer as TCustomer } from "../api/customer/Customer";

export const CUSTOMER_TITLE_FIELD = "orders";

export const CustomerTitle = (record: TCustomer): string => {
  return record.orders || String(record.id);
};
