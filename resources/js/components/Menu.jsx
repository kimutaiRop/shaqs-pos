import React from "react";
import Sidebar from "./Sidebar";
import { formatAmount } from "../helper";
import CreateCegory from "./CreateCegory";
import AddDish from "./AddDish";
import MenuCategories from "./MenuCategories";
import { useEffect } from "react";
import EditDish from "./EditDish";

const Menu = () => {
    const [menu, setMenu] = React.useState([]);
    const [editItem, setEditItem] = React.useState(null);
    useEffect(() => {
        let headers = new Headers();
        headers.append("Content-Type", "application/json");
        headers.append(
            "Authorization",
            `Bearer ${localStorage.getItem("token")}`
        );
        let url = "/api/menu";
        if (window.location.search) {
            url += window.location.search;
        }
        fetch(url, {
            headers,
        })
            .then((response) => response.json())
            .then((data) => setMenu(data.data))
            .catch((error) => console.log("error", error));
    }, []);
    const getCartegoryName = (menu) => {
        console.log(window.location.search);
        // if no category_id in query string, return
        if (!window.location.search) {
            return "All Menu";
        }

        // else return category.name for first item in menu
        console.log(menu);
        return menu[0]?.category?.name;
    };

    const deleteMeanuItem = (id) => {
        let headers = new Headers();
        let confirmDelete = confirm(
            "Are you sure you want to delete this item?"
        );
        if (!confirmDelete) return;
        headers.append(
            "Authorization",
            `Bearer ${localStorage.getItem("token")}`
        );
        fetch(`/api/menu/delete/${id}`, {
            method: "POST",
            headers: headers,
            body: JSON.stringify({ id: id }),
        })
            .then((response) => response.json())
            .then((data) => {
                window.location.reload();
            });
    };
    return (
        <div className="grid grid-cols-7 h-screen w-full">
            <Sidebar />
            <main className="bg-primary w-full col-span-6 h-full grid grid-cols-7 xl:grid-cols-9 max-h-screen min-h-screen">
                <div className="col-span-2 bg-secondary flex flex-col overflow-auto px-2 space-y-4">
                    <div className="flex justify-end items-end p-2">
                        <CreateCegory />
                    </div>
                    <MenuCategories />
                </div>
                <div className="col-span-5 xl:col-span-7 flex flex-col overflow-auto">
                    <div className="flex bg-secondary py-4 justify-between items-center px-3">
                        <h2 className="text-4xl">{getCartegoryName(menu)}</h2>
                        <AddDish />
                        {editItem && (
                            <EditDish
                                dish={editItem}
                                setEditItem={setEditItem}
                            />
                        )}
                    </div>
                    <div className="flex overflow-auto flex-col">
                        <div className="grid grid-cols-2 xl:grid-cols-3 gap-6 p-6">
                            {menu &&
                                menu.map((item, index) => (
                                    <div
                                        className="flex flex-col space-y-3"
                                        key={index}
                                    >
                                        <div className="border border-accent aspect-[9/6] rounded-xl flex flex-col justify-between items-center py-2">
                                            <div className="relative w-full">
                                                <div className="absolute -top-8 -left-4 aspect-square w-2/3">
                                                    <img
                                                        src={`/${item.image}`}
                                                    />
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
                                        <div className="border justify-between items-center flex space-x-2 border-accent rounded-full w-full py-1 px-3 font-bold">
                                            <span>
                                                {formatAmount(
                                                    Number(item.price)
                                                )}
                                            </span>
                                            <div className="flex space-x-2">
                                                <button
                                                    onClick={() =>
                                                        setEditItem(item)
                                                    }
                                                    className="bg-accent rounded py-1 px-2 text-white"
                                                >
                                                    <svg
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        fill="none"
                                                        viewBox="0 0 24 24"
                                                        stroke-width="1.5"
                                                        stroke="currentColor"
                                                        class="w-6 h-6"
                                                    >
                                                        <path
                                                            stroke-linecap="round"
                                                            stroke-linejoin="round"
                                                            d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L6.832 19.82a4.5 4.5 0 0 1-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 0 1 1.13-1.897L16.863 4.487Zm0 0L19.5 7.125"
                                                        />
                                                    </svg>
                                                </button>
                                                <button
                                                    onClick={() =>
                                                        deleteMeanuItem(item.id)
                                                    }
                                                    className="bg-red-400 rounded py-1 px-2 text-white"
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
                                                            d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0"
                                                        />
                                                    </svg>
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
};

export default Menu;
