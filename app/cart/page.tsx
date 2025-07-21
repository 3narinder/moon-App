"use client";

import Image from "next/image";
import React, { useState } from "react";
import { AiFillDelete } from "react-icons/ai";
import { cartProducts as initialProducts } from "@/constants";
import { Product } from "@/constants/Types";
import QuantityCounter from "@/components/custom/QuantityCounter";
import Button from "@/components/custom/Button";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrum";

const Cart = () => {
  const [cartItems, setCartItems] = useState<Product[]>(initialProducts);

  const updateQuantity = (id: number, newQuantity: number) => {
    setCartItems((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, quantity: newQuantity } : item
      )
    );
  };

  const removeItem = (id: number) => {
    setCartItems((prev) => prev.filter((item) => item.id !== id));
  };

  const cartTotal = cartItems.reduce(
    (total, item) => total + item.price * item?.quantity,
    0
  );

  return (
    <section className="lg:mx-40 mx-6 py-8">
      <Breadcrumb />
      {cartItems?.length > 0 && (
        <h1 className="text-display-5 font-bold md:mb-6 uppercase tracking-wide">
          Cart ({cartItems?.length}) Items
        </h1>
      )}

      {cartItems?.length === 0 ? (
        <p className="heading-6 text-neutral-6 font-semibold uppercase text-center mt-20">
          Your cart is empty
        </p>
      ) : (
        <>
          <div className="w-full overflow-x-auto md:flex hidden">
            <table className="w-full">
              <thead>
                <tr className="bg-warm-black text-neutral-2">
                  <th className="px-4 py-3 text-left">Product</th>
                  <th className="px-4 py-3 text-left">Image</th>
                  <th className="px-4 py-3 text-center">Price</th>
                  <th className="px-4 py-3 text-center">Quantity</th>
                  <th className="px-4 py-3 text-center">Total</th>
                  <th className="px-4 py-3 text-center">Remove</th>
                </tr>
              </thead>
              <tbody>
                {cartItems.map((item) => (
                  <tr key={item.id} className="text-center">
                    <td className="px-4 py-3 text-left text-display-2 font-semibold text-neutral-6">
                      {item.name}
                    </td>
                    <td className="py-3">
                      <Image
                        src={item.image[0]}
                        alt={item.name}
                        width={80}
                        height={80}
                      />
                    </td>
                    <td className="px-4 py-3 text-neutral-7 text-display-2 font-semibold">
                      ${item.price}
                    </td>
                    <td className="py-3 px-4 text-center">
                      <div className="inline-flex justify-center">
                        <QuantityCounter
                          quantity={item.quantity}
                          onChange={(newQty) => updateQuantity(item.id, newQty)}
                        />
                      </div>
                    </td>
                    <td className="px-4 py-3 text-neutral-7 text-display-2 font-semibold">
                      ${(item.price * item?.quantity).toFixed(2)}
                    </td>
                    <td className="px-4 py-3">
                      <button onClick={() => removeItem(item.id)}>
                        <AiFillDelete className="text-red-400 font-bold text-lg hover:text-red-600 cursor-pointer" />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="md:hidden mb-8">
            {cartItems?.map((item: Product) => (
              <div key={item?.id} className="border-b border-warm-black py-6">
                <button onClick={() => removeItem(item.id)}>
                  <AiFillDelete className="text-red-400 font-bold text-lg hover:text-red-600 cursor-pointer mb-2" />
                </button>

                <div className="flex items-center gap-6 mb-4">
                  <Image
                    src={item.image[0]}
                    alt={item.name}
                    width={80}
                    height={80}
                  />

                  <div className="text-display-2 text-neutral-8">
                    {item.name}
                  </div>
                </div>

                <div className="flex flex-col gap-4">
                  <div className="flex items-center justify-between">
                    <div>Price</div>

                    <div className="text-display-2 font-semibold text-neutral-8">
                      ${item?.price}
                    </div>
                  </div>

                  <div className="flex items-center justify-between">
                    <div>Quantity</div>

                    <div className="flex items-center justify-center gap-3">
                      <QuantityCounter
                        quantity={item.quantity}
                        onChange={(newQty) => updateQuantity(item.id, newQty)}
                      />
                    </div>
                  </div>

                  <div className="flex items-center justify-between">
                    <div>Subtotal</div>

                    <div className="text-display-2 font-semibold text-neutral-8">
                      ${item.price * item.quantity}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </>
      )}

      {cartItems?.length > 0 && (
        <div className="flex md:flex-row flex-col lg:items-center md:justify-between md:gap-0 gap-4 mb-12 ">
          <div className="flex md:flex-row flex-col items-center gap-4">
            <input
              type="text"
              className="py-2 px-4 placeholder:text-display-2 placeholder:text-neutral-6 border border-neutral-8 outline-none w-full"
              placeholder="Enter coupon"
            />

            <div className="w-full md:w-auto md:px-4 py-[11] inline-flex items-center justify-center gap-2 cursor-pointer text-display-2 tracking-wide font-semibold bg-neutral-8 text-neutral-2 whitespace-nowrap">
              Apply Coupon
            </div>
          </div>

          <div className="md:w-64 py-[11] inline-flex items-center justify-center gap-2 cursor-pointer text-display-2 tracking-wide font-semibold bg-neutral-8 text-neutral-2 whitespace-nowrap">
            Update Cart
          </div>
        </div>
      )}

      {/* Cart Total */}
      {cartItems?.length > 0 && (
        <div className="w-full flex items-center justify-end">
          <div className="lg:w-1/3 md:w-2/5 w-full p-6 bg-warm-black text-neutral-2 shadow-lg h-fit self-end">
            <h2 className="text-display-4 font-bold mb-4">Cart Total</h2>

            <div className="flex justify-between text-lg">
              <span className="font-semibold text-display-2">Subtotal:</span>
              <span className="font-semibold text-display-2">
                ${cartTotal.toFixed(2)}
              </span>
            </div>

            <div className="flex justify-between text-lg mb-4">
              <span className="font-semibold text-display-2">Total:</span>
              <span className="font-semibold text-display-2">
                ${cartTotal.toFixed(2)}
              </span>
            </div>

            <Link href="/payment">
              <Button variant="footer" text="Proceed to pay" />
            </Link>
          </div>
        </div>
      )}
    </section>
  );
};

export default Cart;
