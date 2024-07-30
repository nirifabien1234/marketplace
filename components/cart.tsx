// components/CartSheet.tsx
import { FC } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  toggleCart,
  incrementQuantity,
  decrementQuantity,
  updateQuantity,
  removeItem,
} from "../app/redux/features/cart/cartSlice";
import { Button } from "./ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetClose,
} from "./ui/sheet";
import {
  ShoppingCartCheck02Icon,
  ShoppingCartCheckIn02Icon,
  FavouriteIcon,
  Delete01Icon,
  InformationCircleIcon,
  Remove01Icon,
  Add01Icon,
  Dollar01Icon,
  Dollar02Icon,
} from "hugeicons-react";
import { useAppDispatch, useAppSelector } from "@/app/redux/hooks";
import Image from "next/legacy/image";
import { Input } from "./ui/input";

const Cart: FC = () => {
  const items = useAppSelector((state) => state.cart.items);
  const dispatch = useAppDispatch();

  const handleIncrement = (id: number) => {
    dispatch(incrementQuantity(id));
  };

  const handleDecrement = (id: number) => {
    dispatch(decrementQuantity(id));
  };

  const handleChange = (id: number, quantity: number) => {
    dispatch(updateQuantity({ id, quantity }));
  };

  const handleRemove = (id: number) => {
    dispatch(removeItem(id));
  };
  return (
    <div className="p-10 w-full bg-white h-full overflow-y-scroll scroll-m-1">
      <div className="space-y-4 ">
        {items.map((item, index) => (
          <div
            key={item.id}
            className="flex justify-between items-center border p-5 rounded-2xl h-[7.5rem]"
          >
            <span className="font-bold text-base text-primaryBtnColor">
              {index + 1}
            </span>
            <Image
              src={item.image}
              alt={item.name}
              width={80}
              height={80}
              className="rounded-lg h-full"
            />
            <div className="flex flex-col gap-2">
              <span className="font-bold text-base text-primaryBtnColor">{item.name}</span>
              <span className="text-sm text-authSubHeadingColor font-medium">{item.price}</span>
            </div>
            <div className="flex items-center">
              <Button
                variant="outline"
                size="icon"
                onClick={() => handleDecrement(item.id)}
              >
                <Remove01Icon
                  size={16}
                  strokeWidth={2}
                  className="text-headingColor"
                />
              </Button>
              <Input
                type="number"
                value={item.quantity}
                onChange={(e) =>
                  handleChange(item.id, parseInt(e.target.value))
                }
                className=" text-center border mx-2 bg-headingColor bg-opacity-[0.04] border-none w-[6.25rem] text-sm font-semibold "
              />
              <Button
                variant="outline"
                size="icon"
                onClick={() => handleIncrement(item.id)}
              >
                <Add01Icon
                  size={16}
                  strokeWidth={2}
                  className="text-headingColor"
                />
              </Button>
            </div>
            <Button
              variant="outline"
              className="shrink-0 font-bold rounded-lg  text-sm size-10 p-3"
            >
              <Delete01Icon
                size={20}
                strokeWidth={2}
                className=" text-redColor "
                onClick={() => handleRemove(item.id)}
              />
            </Button>
          </div>
        ))}
      </div>
    </div>
  );
};

const CartSheet: FC = () => {
  const isOpen = useAppSelector((state) => state.cart.isOpen);
  const dispatch = useAppDispatch();

  return (
    <Sheet open={isOpen} onOpenChange={() => dispatch(toggleCart())}>
      <SheetContent className=" pt-20 px-0 pb-[10rem]">
        <SheetHeader>
          <SheetTitle className="absolute left-20 top-0 right-0 my-5 mr-10 text-primaryBtnColor text-base font-bold">
            <div className="flex items-center justify-between w-full">
              <p>My Cart (2)</p>
              <div className="flex gap-4 h-12">
                <Button
                  variant="outline"
                  className="shrink-0 font-bold flex h-full gap-2 py-2 px-8 text-sm"
                >
                  <FavouriteIcon
                    size={16}
                    strokeWidth={2}
                    className=" text-primary ml-2"
                  />
                  <span>Save Cart For Later</span>
                </Button>
                <Button
                  variant="outline"
                  className="shrink-0 font-bold rounded-lg  text-sm size-12 p-3"
                >
                  <Delete01Icon
                    size={20}
                    strokeWidth={2}
                    className=" text-redColor "
                  />
                </Button>
              </div>
            </div>
          </SheetTitle>
        </SheetHeader>
        <div className="flex gap-5 items-center w-full py-5 px-10 mt-2 text-sm text-defaultIconColor bg-loginSectionBg">
          <InformationCircleIcon strokeWidth={2} size={16} className="" />
          <p>By proceeding you won’t be charged yet</p>
        </div>
        <Cart />
        <div className="sticky bottom-0 right-0 left-0 px-10 py-7 mt-4 flex justify-between items-center w-full border-t bg-white">
          <div className="flex flex-col gap-2 text-primaryBtnColor">
            <p className="text-sm font-light ">Total:</p>
            <p className="text-2xl font-black ">36,000 Rwf</p>
          </div>
          <Button className="flex gap-2 w-fit py-6 px-8">
            <Dollar02Icon strokeWidth={2} size={16} />
            <span className="text-sm font-extrabold text-primaryBtnColor">
              Checkout
            </span>
          </Button>
        </div>
      </SheetContent>
    </Sheet>
  );
};

export { CartSheet };
