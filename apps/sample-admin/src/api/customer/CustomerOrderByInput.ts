import { SortOrder } from "../../util/SortOrder";

export type CustomerOrderByInput = {
  createdAt?: SortOrder;
  id?: SortOrder;
  orders?: SortOrder;
  updatedAt?: SortOrder;
};
