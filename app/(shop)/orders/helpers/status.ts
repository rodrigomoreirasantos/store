import { OrderStatus } from "@prisma/client";

export const getOrderStatus = (orderStatus: OrderStatus) => {
  return {
    [OrderStatus.PAYMENT_CONFIRMED]: "Paid",
    [OrderStatus.WAITING_FOR_PAYMENT]: "Waiting",
  }[orderStatus];
};
