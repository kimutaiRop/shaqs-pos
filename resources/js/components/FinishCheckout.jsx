import React from "react";
import Dialog from "./Dialog";
import { formatAmount } from "../helper";
import MpesaUnused from "./MpesaUnused";

const FinishCheckout = ({ cart, clearCart }) => {
    const [show, setShow] = React.useState(false);
    const [showCash, setShowCash] = React.useState(false);
    const [cashAmount, setCashAmount] = React.useState(0);
    const [serveType, setType] = React.useState("");
    const [paymentId, setPaymentId] = React.useState(0);
    const [selectedPayament, setSelectedPayment] = React.useState(null);
    const data = {
        cashier: "John Doe",
        orderNumber: 1,
    };
    const printRef = React.useRef(null);
    const printReceipt = () => {
        let conf = confirm("Are you sure you want to print this receipt?");
        if (!conf) {
            return;
        }
        let data = {
            method: cashAmount > 0 ? "CASH" : "MPESA",
            cashAmount,
            paymentId: paymentId,
            menus: cart.map((item) => ({
                quantity: item.quantity,
                id: item.id,
            })),
        };
        fetch("/api/orders", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(data),
        })
            .then(async (res) => {
                clearCart();
            })
            .catch((err) => {
                console.log(err);
            });
    };
    return (
        <>
            <form
                className="w-full flex justify-center items-center flex-col space-y-2"
                onSubmit={(e) => {
                    e.preventDefault();
                    setShow(!show);
                }}
            >
                <select
                    className="border-2 border-black rounded py-2 px-5 w-full"
                    name="type"
                    required
                    onChange={(e) => setType(e.target.value)}
                >
                    <option value="">Select Order Type</option>
                    <option value="Sit In">Sit In</option>
                    <option value="takeaway">Take Away</option>
                    <option value="delivery">Delivery</option>
                </select>
                <button className="bg-accent  rounded-full p-2 w-full">
                    Checkout
                </button>
            </form>
            {show && (
                <Dialog close={() => setShow(false)}>
                    <div className="w-full mx-auto max-w-screen-2xl bg-white h-full flex flex-col">
                        <div className="grid grid-cols-5 h-full">
                            <div className="overflow-auto relative col-span-3 flex py-3 bg-secondary h-full border-r justify-center items-center w-full">
                                <div className="w-[90mm] overflow-auto h-full">
                                    <div
                                        ref={printRef}
                                        className=" w-[80mm] flex flex-col text-sm bg-white border min-h-full py-5 px-4 items-center"
                                    >
                                        <h2 className="uppercase  font-bold text-sm">
                                            Shaqs Choma Zone
                                        </h2>
                                        <div className="text-center items-center flex space-x-2 mt-1 text-sm">
                                            <span>* * * </span>
                                            <span className="-mt-1">
                                                SCZ
                                            </span>{" "}
                                            <span>* * *</span>
                                        </div>
                                        <span className="font-bold uppercase">
                                            Kiserian
                                        </span>
                                        <span className="font-bold uppercase">
                                            PHONE : 0706788440
                                        </span>
                                        <span className="font-bold uppercase">
                                            PIN : P052093723U
                                        </span>
                                        <div className="flex flex-col w-full pt-4 ">
                                            <h2 className="uppercase px-1 py-1">
                                                CASHER: {data.cashier}
                                            </h2>
                                            <div className="border-b-2 border-dashed border-black" />
                                            <div className="flex justify-between items-center py-0.5">
                                                <h2 className="uppercase px-1 py-1 ">
                                                    SAMP
                                                </h2>
                                                <span className="">
                                                    {new Date().toLocaleString()}{" "}
                                                </span>
                                            </div>
                                            <div className="border-b-2 border-dashed border-black" />
                                            <div className="w-full items-center justify-center text-center">
                                                <h2 className="text-xl py-2 uppercase">
                                                    {serveType}
                                                </h2>
                                            </div>
                                            <ol className="w-full flex flex-col list-disc list-inside space-y-0.5">
                                                {cart &&
                                                    cart?.map((item) => (
                                                        <li className="flex justify-between items-start">
                                                            <h2 className="capitalize px-1 ">
                                                                {item.quantity}{" "}
                                                                {item.name}
                                                            </h2>
                                                            <span className="">
                                                                {formatAmount(
                                                                    item.price *
                                                                        item.quantity
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
                                                                (a, b) =>
                                                                    a +
                                                                    b.price *
                                                                        b.quantity,
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
                                                                : cashAmount ||
                                                                  0.0) -
                                                                cart.reduce(
                                                                    (a, b) =>
                                                                        a +
                                                                        b.price *
                                                                            b.quantity,
                                                                    0
                                                                )
                                                        )}
                                                    </span>
                                                </div>
                                                <div className="w-full items-center justify-center">
                                                    <h2 className="py-2 uppercase font-semibold">
                                                        Method:{" "}
                                                        {paymentId
                                                            ? "MPESA"
                                                            : "CASH"}
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
                                                                .padStart(
                                                                    3,
                                                                    "0"
                                                                )}
                                                        </span>
                                                    </h2>
                                                </div>
                                                <div className="border-b-2 border-dashed border-black " />
                                                <div className="pt-3">
                                                    <h2 className="text-center text-sm">
                                                        Thank you for your
                                                        business
                                                    </h2>
                                                    <h2 className="text-center text-sm">
                                                        We hope to see you again
                                                    </h2>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                {(paymentId
                                    ? selectedPayament.total
                                    : cashAmount) >=
                                    cart.reduce(
                                        (a, b) => a + b.price * b.quantity,
                                        0
                                    ) && (
                                    <button
                                        onClick={printReceipt}
                                        className="absolute left-2 bottom-2 bg-accent px-5 shadow rounded py-1.5"
                                    >
                                        print
                                    </button>
                                )}
                            </div>
                            <div className="col-span-2 h-full flex flex-col overflow-auto">
                                <div className="p-2 flex justify-between items-center">
                                    <h2 className="h-4 capitalize font-bold text-xl">
                                        Unused Payments
                                    </h2>
                                    <button
                                        onClick={() => setShowCash(!showCash)}
                                        className="bg-accent py-1 px-5 rounded shadow"
                                    >
                                        Receive Cash
                                    </button>
                                    {showCash && (
                                        <Dialog
                                            close={() => setShowCash(false)}
                                            show={showCash}
                                            className={
                                                "justify-center items-center"
                                            }
                                        >
                                            <div className="w-full mx-auto max-w-sm  justify-center h-full flex flex-col ">
                                                <form
                                                    onSubmit={(e) => {
                                                        e.preventDefault();
                                                        setShowCash(false);
                                                    }}
                                                    className="bg-white h-52 p-2 flex flex-col justify-center rounded-xl space-y-2"
                                                >
                                                    <label className="font-bold">
                                                        Received Amount
                                                    </label>
                                                    <input
                                                        onChange={(e) => {
                                                            setCashAmount(
                                                                e.target.value
                                                            );
                                                            setPaymentId(null);
                                                        }}
                                                        type="number"
                                                        className="border-2 border-black w-full rounded py-2 px-5"
                                                    />
                                                    <button className="bg-accent py-2 px-2 rounded shadoe">
                                                        Receive Cash
                                                    </button>
                                                </form>
                                            </div>
                                        </Dialog>
                                    )}
                                </div>
                                <MpesaUnused
                                    selectPayment={(payment) => {
                                        setSelectedPayment(payment);
                                        setPaymentId(payment?.id);
                                        setCashAmount(0);
                                    }}
                                    paymentId={paymentId}
                                />
                            </div>
                        </div>
                    </div>
                </Dialog>
            )}
        </>
    );
};

export default FinishCheckout;
