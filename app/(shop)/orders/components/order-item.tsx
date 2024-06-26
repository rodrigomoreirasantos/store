import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Card } from "@/components/ui/card";
import { Prisma } from "@prisma/client";
import { format } from "date-fns";
import OrderProductItem from "./order-product-item";
import { Separator } from "@/components/ui/separator";
import { useMemo } from "react";
import { computeProductTotalPrice } from "@/helpers/product";
import { getOrderStatus } from "../helpers/status";

interface OrderItemProps {
  order: Prisma.OrderGetPayload<{
    include: {
      orderProducts: {
        include: { product: true };
      };
    };
  }>;
}

const OrderItem = ({ order }: OrderItemProps) => {
  const subtotal = useMemo(() => {
    return order.orderProducts.reduce((acc, orderProduct) => {
      return (
        acc + Number(orderProduct.product.basePrice) * orderProduct.quantity
      );
    }, 0);
  }, [order.orderProducts]);

  const total = useMemo(() => {
    return order.orderProducts.reduce((acc, product) => {
      const productTotalPrice = computeProductTotalPrice(product.product);

      return acc + productTotalPrice * product.quantity;
    }, 0);
  }, [order.orderProducts]);

  const totalDiscounts = subtotal - total;

  return (
    <Card className="px-5">
      <Accordion type="single" className="w-full" collapsible>
        <AccordionItem value={order.id}>
          <AccordionTrigger>
            <div className="flex w-full text-left">
              <div className="flex flex-1 flex-col gap-1 text-left">
                <p className="text-sm font-bold uppercase lg:text-base">
                  Order with {order.orderProducts.length} product(s)
                </p>
                <span className="text-xs opacity-60">
                  Done at {format(order.createdAt, "d/MM/y 'às' HH:mm")}
                </span>
              </div>

              <div className="hidden flex-1 font-bold lg:block">
                <p className="text-xs lg:text-sm">Status</p>
                <p className="text-xs text-[#8162FF] lg:text-sm">
                  {getOrderStatus(order.status)}
                </p>
              </div>

              <div className="hidden flex-1 lg:block">
                <p className="text-xs font-bold lg:text-sm ">Date</p>
                <p className="text-xs opacity-60 lg:text-sm">
                  {format(order.createdAt, "d/MM/y")}
                </p>
              </div>

              <div className="hidden flex-1 lg:block">
                <p className="text-xs font-bold lg:text-sm">Payment</p>
                <p className="text-xs opacity-60 lg:text-sm">Card</p>
              </div>
            </div>
          </AccordionTrigger>

          <AccordionContent>
            <div className="flex flex-col gap-4">
              <div className="flex items-center justify-between lg:hidden">
                <div className="font-bold">
                  <p className="text-xs lg:text-sm">Status</p>
                  <p className="text-xs text-[#8162FF] lg:text-sm">
                    {getOrderStatus(order.status)}
                  </p>
                </div>

                <div>
                  <p className="text-xs font-bold lg:text-sm">Date</p>
                  <p className="text-xs opacity-60 lg:text-sm">
                    {format(order.createdAt, "d/MM/y")}
                  </p>
                </div>

                <div>
                  <p className="text-xs font-bold lg:text-sm">Payment</p>
                  <p className="text-xs opacity-60 lg:text-sm">Card</p>
                </div>
              </div>

              {order.orderProducts.map((orderProduct) => (
                <OrderProductItem
                  key={orderProduct.id}
                  orderProduct={orderProduct}
                />
              ))}

              <div className="flex w-full flex-col gap-1 text-xs">
                <Separator />

                <div className="flex w-full justify-between py-3 lg:text-sm">
                  <p>Subtotal</p>
                  <p>$ {subtotal.toFixed(2)}</p>
                </div>

                <Separator />

                <div className="flex w-full justify-between py-3 lg:text-sm">
                  <p>Delivery</p>
                  <p>FREE</p>
                </div>

                <Separator />

                <div className="flex w-full justify-between py-3 lg:text-sm">
                  <p>Discount</p>
                  <p>-$ {totalDiscounts.toFixed(2)}</p>
                </div>

                <Separator />

                <div className="flex w-full justify-between py-3 text-sm font-bold lg:text-base">
                  <p>Total</p>
                  <p>$ {total.toFixed(2)}</p>
                </div>
              </div>
            </div>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </Card>
  );
};

export default OrderItem;
