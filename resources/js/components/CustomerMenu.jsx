import React from "react";
import { useEffect } from "react";
import MenuCategories from "./MenuCategories";
import { formatAmount } from "../helper";

const CustomerMenu = () => {
    const [menu, setMenu] = React.useState([]);
    const getMenu = (category_id) => {
        let url = "/api/menu";
        if (category_id) {
            url += `?category_id=${category_id}`;
        }
        let headers = new Headers();
        headers.append(
            "Authorization",
            `Bearer ${localStorage.getItem("token")}`
        );
        fetch(url, {
            method: "GET",
            headers: headers,
        })
            .then((response) => response.json())
            .then((data) => setMenu(data.data))
            .catch((error) => console.log("error", error));
    };
    useEffect(() => {
        getMenu();
    }, []);

    const [categories, setCategories] = React.useState([]);

    useEffect(() => {
        let url = "/api/menu-category";
        let headers = new Headers();
        headers.append(
            "Authorization",
            `Bearer ${localStorage.getItem("token")}`
        );
        fetch(url, {
            method: "GET",
            headers: headers,
        })
            .then((response) => response.json())
            .then((data) => setCategories(data.data))
            .catch((error) => console.log("error", error));
    }, []);

    // rotate categories and call getMenu
    useEffect(() => {
        let intervalId = setInterval(() => {
            let category_id = categories[0].id;
            let newCategories = [...categories];
            newCategories.push(newCategories.shift());
            setCategories(newCategories);
            category_id = newCategories[0].id;
            getMenu(category_id);
        }, 30000);
        return () => {
            clearInterval(intervalId);
        };
    }, [categories]);
    const getCartegoryName = (menu) => {
        return menu[0]?.category?.name || "All Menu";
    };
    return (
        <main className="bg-black text-white relative w-full col-span-6 h-full grid grid-cols-5 xl:grid-cols-5 px-3 py-14 gap-4 max-h-screen min-h-screen">
            <div className="absolute top-3 left-3 flex space-x-2 items-center">
                <div className="bg-accent h-10 w-5 "></div>
                <div className="bg-accent h-10 w-5 "></div>
                <div className="bg-accent h-10 w-5 "></div>
                <h2 className="text-accent font-bold text-2xl uppercase">
                    {getCartegoryName(menu)}
                </h2>
            </div>
            {menu &&
                menu.map((item, index) => (
                    <div
                        className="flex flex-col space-y-3 relative"
                        key={index}
                    >
                        <div className="absolute p-2 bg-accent right-6 top-1 font-bold text-xl -rotate-0 text-white">
                            {formatAmount(item.price)}
                        </div>
                        <div className="border-2 border-accent rounded-xl aspect-[9/6] flex flex-col justify-between items-center py-2">
                            <div className="relative w-full">
                                <div className="absolute -top-6 -left-4 aspect-square w-3/5">
                                    <img src={`${item.image}`} />
                                </div>
                            </div>
                            <div className="flex flex-col p-2 w-full">
                                <h2 className="text-accent text-xl font-semibold capitalize">
                                    {item.name}
                                </h2>
                                <span className="text-xs">
                                    {item.description}
                                </span>
                            </div>
                        </div>
                    </div>
                ))}
        </main>
    );
};

export default CustomerMenu;
