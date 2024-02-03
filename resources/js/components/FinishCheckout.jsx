import React from "react";
import Dialog from "./Dialog";
import MpesaUnused from "./MpesaUnused";
import Receipt from "./Receipt";
import { useReactToPrint } from "react-to-print";

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
    const handlePrint = useReactToPrint({
        pageStyle: `@media print {
            @page {
              size: 80mm 100vh;
              margin: 0;
            }
          }`,
        content: () => printRef.current,
    });
    const printReceipt = () => {
        handlePrint();
        return
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
        let headers = new Headers();
        headers.append("Content-Type", "application/json");
        headers.append(
            "Authorization",
            `Bearer ${localStorage.getItem("token")}`
        );

        fetch("/api/orders", {
            method: "POST",
            headers,
            body: JSON.stringify(data),
        })
            .then(async (res) => {
                setTimeout(() => {
                    handlePrint();
                    // clearCart();
                }, 1000);
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
                                <Receipt
                                    cart={cart}
                                    printRef={printRef}
                                    data={data}
                                    serveType={serveType}
                                    cashAmount={cashAmount}
                                    selectedPayament={selectedPayament}
                                    paymentId={paymentId}
                                />{" "}
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
