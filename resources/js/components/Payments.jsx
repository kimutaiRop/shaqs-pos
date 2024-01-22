import React, { useState, useEffect } from "react";
import Sidebar from "./Sidebar";
import Calendar from "./Calendar";
import { formatAmount } from "../helper";
import { format } from "date-fns";

const Payments = () => {
    let searchParams = new URLSearchParams(window.location.search);
    let headers = new Headers();

    headers.append("Content-Type", "application/json");
    headers.append("Authorization", `Bearer ${localStorage.getItem("token")}`);
    let date = searchParams.get("date");
    const [payments, setPayments] = React.useState([]);
    const [fetchedPayments, setFetchedPayments] = useState([]);

    const getData = () => {
        let url = `/api/payments` + (date ? `?date=${date}` : "");
        fetch(url, {
            method: "GET",
            headers: headers,
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
        }, 10000);

        return () => {
            clearInterval(intervalId);
        };
    }, []); // Only run once on mount
    return (
        <div className="grid grid-cols-7 h-screen w-full">
            <Sidebar />
            <main className="bg-primary w-full col-span-6 h-full grid grid-cols-9">
                <div className="col-span-3 bg-secondary">
                    <Calendar
                        onDateChange={(date) => {
                            console.log(date);
                            // add ?date=2021-09-01 to the URL
                            window.location.href = `/payments?date=${format(
                                date,
                                "yyyy-MM-dd"
                            )}`;
                        }}
                        selected={new Date(date || "").setHours(0, 0, 0, 0)}
                    />
                </div>
                <div className="col-span-6  w-full flex flex-col  p-2 space-y-2">
                    <div className="flex bg-secondary py-4 justify-between items-center px-3 border rounded">
                        <h2 className="text-2xl">
                            Payments for <b>{new Date().toDateString()}</b>
                        </h2>
                    </div>
                    <div className="grid grid-cols-5 font-bold pb-3 px-2">
                        <span>TRANS ID</span>
                        <span>ORDER NO</span>
                        <span>METHOD</span>
                        <span>DATE</span>
                        <span>AMOUNT</span>
                    </div>
                    <div className="w-full">
                        {fetchedPayments &&
                            fetchedPayments.map((payment) => (
                                <div
                                    key={payment.id}
                                    className="grid grid-cols-5 justify-between items-center px-5 py-3 bg-gray-100 rounded-md"
                                >
                                    <div className="">
                                        {payment.transaction_id}
                                    </div>
                                    <span className="font-bold text-sm col-span-1">
                                        {payment.order_id}
                                    </span>{" "}
                                    <span className="font-bold text-sm col-span-1">
                                        {payment.method || " Customer"}
                                    </span>
                                    <span className="font-bold text-sm col-span-1">
                                        {new Date(
                                            payment.created_at
                                        ).toDateString()}
                                    </span>
                                    <span className="font-bold text-sm col-span-1">
                                        {formatAmount(payment.total)}
                                    </span>{" "}
                                </div>
                            ))}
                    </div>
                </div>
            </main>
        </div>
    );
};

export default Payments;
