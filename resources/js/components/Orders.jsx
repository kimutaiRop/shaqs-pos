import React from "react";
import Sidebar from "./Sidebar";
import Calendar from "./Calendar";
import { formatAmount } from "../helper";

const Orders = () => {
    return (
        <div className="grid grid-cols-7 h-screen w-full">
            <Sidebar />
            <main className="bg-primary w-full col-span-6 h-full grid grid-cols-9">
                <div className="col-span-3 bg-secondary">
                    <Calendar />
                </div>
                <div className="col-span-6  w-full flex flex-col p-2 space-y-3">
                    <div className="flex bg-secondary py-4 justify-between items-center px-3 border rounded">
                        <h2 className="text-2xl">
                            Orders for <b>{new Date().toDateString()}</b>
                        </h2>
                    </div>
                    <div className="grid grid-cols-5 font-bold pb-3 px-2">
                        <span>ORDER NO</span>
                        <span>METHOD</span>
                        <span>DATE</span>
                        <span>AMOUNT</span>
                        <span>STATUS</span>
                    </div>
                    <div className="grid grid-cols-5 px-2">
                        <span className="font-bold">#031</span>
                        <span>MPESA</span>
                        <span>{new Date().toDateString()}</span>
                        <span>{formatAmount(1000)}</span>
                        <span>PAID</span>
                    </div>
                </div>
            </main>
        </div>
    );
};

export default Orders;
