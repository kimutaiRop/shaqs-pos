import React, { useState, useEffect } from "react";
import { formatAmount } from "../helper";

const MpesaUnused = ({ selectPayment, paymentId }) => {
    const [payments, setPayments] = useState([]);
    const [fetchedPayments, setFetchedPayments] = useState([]);

    const getData = () => {
        let headers = new Headers();

        headers.append("Content-Type", "application/json");
        headers.append("Authorization", `Bearer ${localStorage.getItem("token")}`);
        let url = `/api/payments?status=0&method=MPESA`;
        fetch(url, {
            method: "GET",
            headers,
        })
            .then((response) => response.json())
            .then((data) => {
                setFetchedPayments(data.data);
            });
    };

    useEffect(() => {
        getData();

        const intervalId = setInterval(() => {
            getData();
        }, 5000);

        return () => {
            clearInterval(intervalId);
        };
    }, []); // Only run once on mount

    useEffect(() => {
        setPayments(fetchedPayments);
    }, [fetchedPayments]);
    const markAsUsed = (payment) => {
        let url = `/api/payments/${payment.id}`;
        let remove = confirm(
            "Are you sure you want to mark this payment as used?"
        );
        if (!remove) {
            return;
        }
        let headers = new Headers();
        headers.append("Content-Type", "application/json");
        headers.append("Authorization", `Bearer ${localStorage.getItem("token")}`);
        fetch(url, {
            method: "POST",
            headers,
            body: JSON.stringify({ status: 1 }),
        })
            .then((response) => response)
            .then((data) => {
                getData();
            });
    };
    return (
        <div className="py-10 flex flex-col px-2">
            <div className="flex flex-col space-y-2">
                {payments &&
                    payments.map((payment) => (
                        <div
                            key={payment.id}
                            className="justify-between items-center px-5 py-3 bg-gray-100 rounded-md"
                        >
                            <label
                                htmlFor={`payment${payment.id}`}
                                className="justify-between items-center w-full grid grid-cols-10"
                            >
                                <div className="">
                                    <input
                                        id={`payment${payment.id}`}
                                        onClick={() => {
                                            console.log(
                                                paymentId === payment.id
                                            );
                                            selectPayment(
                                                paymentId === payment.id
                                                    ? null
                                                    : payment
                                            );
                                        }}
                                        checked={paymentId === payment.id}
                                        type="checkbox"
                                        className="mr-2"
                                    />
                                </div>
                                <span className="font-bold text-sm col-span-2">
                                    {formatAmount(payment.total)}
                                </span>{" "}
                                <span className="font-bold text-sm col-span-2">
                                    {payment.payer_name || " Customer"}
                                </span>
                                <span className="font-bold text-sm col-span-2">
                                    {payment.payer_phone}
                                </span>
                                <span className="text-sm col-span-3 flex justify-between items-center">
                                    <span>
                                        {new Date(
                                            payment.created_at
                                        ).toDateString()}
                                    </span>
                                    <button
                                        onClick={() => markAsUsed(payment)}
                                        className="text-green-500 p-0.5 rounded-full border"
                                    >
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            strokeWidth={1.5}
                                            stroke="currentColor"
                                            className="w-6 h-6"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                d="M4.5 12.75l6 6 9-13.5"
                                            />
                                        </svg>
                                    </button>
                                </span>
                            </label>
                        </div>
                    ))}
            </div>
        </div>
    );
};

export default MpesaUnused;
