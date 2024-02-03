import React from "react";
import { formatAmount } from "../helper";

const Receipt = ({
    cart,
    printRef,
    data,
    serveType,
    cashAmount,
    selectedPayament,
    paymentId,
}) => {
    return (
        <div className="w-[80mm] overflow-auto h-full ">
            <div
                id="printable"
                ref={printRef}
                className=" w-[80mm] flex flex-col text-sm bg-white border min-h-full py-5 px-4 items-center"
            >
                <h2 className="uppercase  font-bold text-sm">
                    Shaqs Choma Zone
                </h2>
                <div className="text-center items-center flex space-x-2 mt-1 text-sm">
                    <span>* * * </span>
                    <span className="-mt-1">SCZ</span> <span>* * *</span>
                </div>
                <span className="font-bold uppercase">Kiserian</span>
                <span className="font-bold uppercase">PHONE : 0706788440</span>
                <span className="font-bold uppercase">PIN : P052093723U</span>
                <div className="flex flex-col w-full pt-4 ">
                    <h2 className="uppercase px-1 py-1">
                        CASHER: {data.cashier}
                    </h2>
                    <div className="border-b-2 border-dashed border-black" />
                    <div className="flex justify-between items-center py-0.5">
                        <h2 className="uppercase px-1 py-1 ">SAMP</h2>
                        <span className="">{new Date().toLocaleString()} </span>
                    </div>
                    <div className="border-b-2 border-dashed border-black" />
                    <div className="w-full items-center justify-center text-center">
                        <h2 className="text-xl py-2 uppercase">{serveType}</h2>
                    </div>
                    <ol className="w-full flex flex-col list-disc list-inside space-y-0.5">
                        {cart &&
                            cart?.map((item) => (
                                <li className="flex justify-between items-start">
                                    <h2 className="capitalize px-1 ">
                                        {item.quantity} {item.name}
                                    </h2>
                                    <span className="">
                                        {formatAmount(
                                            item.price * item.quantity
                                        )}
                                    </span>
                                </li>
                            ))}
                    </ol>
                    <div className="pt-10">
                        <div className="font-semibold flex justify-between items-center capitalize">
                            <span>Subtotal</span>
                            <span>
                                {formatAmount(
                                    cart.reduce(
                                        (a, b) => a + b.price * b.quantity,
                                        0
                                    )
                                )}
                            </span>
                        </div>
                        <div className="font-semibold flex justify-between items-center capitalize">
                            <span>Payment</span>
                            <span>
                                {formatAmount(
                                    paymentId
                                        ? selectedPayament.total
                                        : cashAmount
                                )}
                            </span>
                        </div>
                        <div className="font-semibold flex justify-between items-center capitalize">
                            <span>Change Due</span>
                            <span>
                                {formatAmount(
                                    (paymentId
                                        ? selectedPayament.total
                                        : cashAmount || 0.0) -
                                        cart.reduce(
                                            (a, b) => a + b.price * b.quantity,
                                            0
                                        )
                                )}
                            </span>
                        </div>
                        <div className="w-full items-center justify-center">
                            <h2 className="py-2 uppercase font-semibold">
                                Method: {paymentId ? "MPESA" : "CASH"}
                            </h2>
                        </div>
                        <div className="border-b-2 border-dashed border-black pt-10" />
                        <div className="pt-5">
                            <h2 className="text-center text-xl font-semibold">
                                ORDER NUMBER #<br />
                                {/* always min of 3 numbers */}
                                <span>
                                    {data.orderNumber
                                        .toString()
                                        .padStart(3, "0")}
                                </span>
                            </h2>
                        </div>
                        <div className="border-b-2 border-dashed border-black " />
                        <div className="pt-3">
                            <h2 className="text-center text-sm">
                                Thank you for your business
                            </h2>
                            <h2 className="text-center text-sm">
                                We hope to see you again
                            </h2>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Receipt;
