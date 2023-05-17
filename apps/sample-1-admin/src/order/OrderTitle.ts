import { Order as TOrder } from "../api/order/Order";

export const ORDER_TITLE_FIELD = "listOrders";

export const OrderTitle = (record: TOrder): string => {
  return record.listOrders || String(record.id);
};
