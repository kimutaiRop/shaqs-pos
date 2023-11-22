import React from "react";
import Sidebar from "./Sidebar";
import Calendar from "./Calendar";
import { formatAmount } from "../helper";
import { format } from "date-fns";

const Payments = () => {
    let searchParams = new URLSearchParams(window.location.search);
    let date = searchParams.get("date");
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
                    <div className="grid grid-cols-5 px-2">
                        <span>TXN0001</span>
                        <span>031</span>
                        <span>m-pesa</span>
                        <span>{new Date().toDateString()}</span>
                        <span>{formatAmount(1000)}</span>
                    </div>
                </div>
            </main>
        </div>
    );
};

export default Payments;
