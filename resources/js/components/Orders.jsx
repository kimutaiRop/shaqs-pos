import React from "react";
import Sidebar from "./Sidebar";
import Calendar from "./Calendar";
import { formatAmount } from "../helper";
import { format } from "date-fns";
const Orders = () => {
    const [orders, setOrders] = React.useState([]);
    let searchParams = new URLSearchParams(window.location.search);
    let date = searchParams.get("date");

    console.log(date);
    React.useEffect(() => {
        let url = "/api/orders";
        if (date) {
            url += `?date=${date}`;
        } else {
            url += `?date=${format(new Date(), "yyyy-MM-dd")}`;
        }
        fetch(url)
            .then((res) => res.json())
            .then((data) => setOrders(data.data));
    }, []);

    return (
        <div className="grid grid-cols-7 h-screen w-full">
            <Sidebar />
            <main className="bg-primary w-full col-span-6 h-full grid grid-cols-9">
                <div className="col-span-3 bg-secondary">
                    <Calendar
                        onDateChange={(date) => {
                            console.log(date);
                            // add ?date=2021-09-01 to the URL
                            window.location.href = `/orders?date=${format(
                                date,
                                "yyyy-MM-dd"
                            )}`;
                        }}
                        selected={new Date(date || "").setHours(0, 0, 0, 0)}
                    />
                </div>
                <div className="col-span-6  w-full flex flex-col p-2 space-y-3">
                    <div className="flex bg-secondary py-4 justify-between items-center px-3 border rounded">
                        <h2 className="text-2xl">
                            Orders for{" "}
                            <b>
                                {new Date(
                                    date || new Date().toDateString()
                                ).toDateString()}
                            </b>
                        </h2>
                    </div>
                    <div className="grid grid-cols-5 font-bold pb-3 px-2">
                        <span>ORDER NO</span>
                        <span>METHOD</span>
                        <span>DATE</span>
                        <span>AMOUNT</span>
                        <span>STATUS</span>
                    </div>
                    {orders.map((order) => (
                        <div className="grid grid-cols-5 px-2" key={order.id}>
                            <span className="font-bold">{order.order_id}</span>
                            <span>{order.method}</span>
                            <span>
                                {new Date(
                                    order.created_at || ""
                                ).toDateString()}
                            </span>
                            <span>
                                {formatAmount(Number(order.menu_amount) || 0)}
                            </span>
                            <span>PAID</span>
                        </div>
                    ))}
                </div>
            </main>
        </div>
    );
};

export default Orders;
