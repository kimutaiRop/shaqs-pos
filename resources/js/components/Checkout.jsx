import React from "react";
import { formatAmount } from "../helper";
import FinishCheckout from "./FinishCheckout";

const Checkout = ({ cart, findCartQuantity, removeFromCart, clearCart }) => {
    const cartTotal = () => {
        let total = 0;
        cart.forEach((item) => {
            total += item.quantity * Number(item.price);
        });
        return total;
    };

    return (
        <div className="flex flex-col p-2 space-y-2 py-2 ">
            {cart &&
                cart.map((item, i) => (
                    <div
                        key={i}
                        className="flex space-x-2 p-2 rounded items-center justify-center h-full"
                    >
                        <div className="h-20 bg-primary justify-center items-center flex w-1/5 aspect-square rounded overflow-hidden">
                            <img src="https://dub01pap001files.storage.live.com/y4mh6bWxGFwvL_7HGqwhBtCJ6nKW2VQ1S3h_4IDXwdOL-0nbWzX5FZ1OdiYB356j8ugyY6ev4M7NqwJmlIMtPvYvjJsKIcVpWsGk8MB9reDLSlhhNbkJ8MHaQFsKZwydCb0tc_1btFK3h6MDu3ohDLt9FUNraXHOtXrNRUwESg6wq50gu8tLqB27ezbPkx36K5iu73tC0euQubVsrb26MwClw?encodeFailures=1&width=931&height=931" />
                        </div>
                        <div className="w-2/5 flex flex-col p-1 h-full">
                            <h2 className="text-sm font-bold ">{item.name}</h2>
                            <span>{findCartQuantity(item)}</span>
                        </div>
                        <div className="w-2/5 flex flex-col p-1 h-full justify-between items-end">
                            <button
                                onClick={() => removeFromCart(item)}
                                className=""
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    strokeWidth="1.5"
                                    stroke="currentColor"
                                    className="w-5 h-5"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
                                    />
                                </svg>
                            </button>
                            <span className="text-sm">
                                {formatAmount(
                                    findCartQuantity(item) * Number(item.price)
                                )}
                            </span>
                        </div>
                    </div>
                ))}
            {(!cart.length && (
                <div className="flex justify-center items-center">
                    <span className="text-center">No Order being prepared</span>
                </div>
            )) || (
                <>
                    <hr />

                    <div className="flex flex-col space-y-3">
                        <div className="flex justify-between">
                            <span className="font-bold">Subtotal</span>
                            <span>{formatAmount(cartTotal())}</span>
                        </div>
                        <div className="flex justify-between">
                            <span className="font-bold">Delivery</span>
                            <span>{formatAmount(0)}</span>
                        </div>
                        <div className="flex justify-between">
                            <span className="font-bold">Total</span>
                            <span>{formatAmount(cartTotal())}</span>
                        </div>
                        <FinishCheckout clearCart={clearCart} cart={cart} />
                    </div>
                </>
            )}
        </div>
    );
};

export default Checkout;
