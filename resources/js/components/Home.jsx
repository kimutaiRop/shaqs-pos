import React from "react";
import Sidebar from "./Sidebar";
import { formatAmount } from "../helper";
import Checkout from "./Checkout";
import MenuCategories from "./MenuCategories";
import { useEffect } from "react";
const Home = () => {
    const [menu, setMenu] = React.useState([]);
    const [cart, setCart] = React.useState([]);
    useEffect(() => {
        let url = "/api/menu";
        if (window.location.search) {
            url += window.location.search;
        }
        fetch(url)
            .then((response) => response.json())
            .then((data) => setMenu(data.data))
            .catch((error) => console.log("error", error));
    }, []);

    useEffect(() => {
        // get cart from local storage
        let cart = localStorage.getItem("cart");
        if (!cart) {
            localStorage.setItem("cart", JSON.stringify([]));
        }
        setCart(JSON.parse(cart));
    }, []);

    const addToCart = (item) => {
        let cart = localStorage.getItem("cart");
        cart = JSON.parse(cart);
        let itemIndex = cart.findIndex((cartItem) => cartItem.id == item.id);
        if (itemIndex == -1) {
            cart.push({ ...item, quantity: 1 });
        } else {
            cart[itemIndex].quantity += 1;
        }
        localStorage.setItem("cart", JSON.stringify(cart));
        setCart(cart);
    };
    const findCartQuantity = (item) => {
        let itemIndex = cart.findIndex((cartItem) => cartItem.id == item.id);
        if (itemIndex == -1) {
            return 0;
        }
        return cart[itemIndex].quantity;
    };

    const subtractFromCart = (item) => {
        // get item in cart from local storage
        let cart = localStorage.getItem("cart");
        cart = JSON.parse(cart);
        // find item in cart
        let itemIndex = cart.findIndex((cartItem) => cartItem.id == item.id);
        // if item is not in cart, return
        if (itemIndex == -1) {
            return;
        }

        // if item quantity is 1, remove item from cart
        if (cart[itemIndex].quantity == 1) {
            cart.splice(itemIndex, 1);
        } else {
            // else, subtract 1 from item quantity
            cart[itemIndex].quantity -= 1;
        }

        // update cart in local storage
        localStorage.setItem("cart", JSON.stringify(cart));
        setCart(cart);
    };

    const removeFromCart = (item) => {
        // get item in cart from local storage
        let cart = localStorage.getItem("cart");
        cart = JSON.parse(cart);
        // find item in cart
        let itemIndex = cart.findIndex((cartItem) => cartItem.id == item.id);
        // if item is not in cart, return
        if (itemIndex == -1) {
            return;
        }

        // remove item from cart
        cart.splice(itemIndex, 1);

        // update cart in local storage
        localStorage.setItem("cart", JSON.stringify(cart));
        setCart(cart);
    };

    const getCartegoryName = (menu) => {
        // if no category_id in query string, return
        if (!window.location.search) {
            return "All Menu";
        }
        return menu[0]?.category?.name;
    };

    return (
        <div className="grid grid-cols-7 h-screen w-full">
            <Sidebar />
            <main className="bg-primary w-full col-span-6 h-full grid grid-cols-7 xl:grid-cols-9 max-h-screen min-h-screen">
                <div className="col-span-2 bg-secondary flex flex-col overflow-auto px-2 space-y-4">
                    <div className="flex justify-end items-end p-2"></div>
                    <MenuCategories />
                </div>
                <div className="col-span-4 xl:col-span-5 flex flex-col overflow-auto ">
                    <div className="flex bg-secondary py-4 justify-between items-center px-3">
                        <h2 className="text-4xl">{getCartegoryName(menu)}</h2>
                    </div>
                    <div className="flex overflow-auto flex-col">
                        <div className="grid grid-cols-1 xl:grid-cols-2 gap-6 p-6">
                            {menu &&
                                menu.map((item, index) => (
                                    <div
                                        className="flex flex-col space-y-3"
                                        key={index}
                                    >
                                        <div className="border border-accent aspect-[9/6] rounded-xl flex flex-col justify-between items-center py-2">
                                            <div className="relative w-full">
                                                <div className="absolute -top-6 -left-4 aspect-square w-3/5">
                                                    <img
                                                        src={`${item.image}`}
                                                    />
                                                </div>
                                            </div>
                                            <div className="flex flex-col p-2 w-full">
                                                <h2 className="text-accent text-xl font-semibold">
                                                    {item.name}
                                                </h2>
                                                <span className="text-xs">
                                                    {item.description}
                                                </span>
                                            </div>
                                        </div>
                                        <div className="flex justify-between items-center border border-accent rounded-full w-full py-1 px-3 font-bold">
                                            <span>
                                                {formatAmount(
                                                    Number(item.price)
                                                )}
                                            </span>
                                            <div className="flex space-x-2 items-center">
                                                <button
                                                    onClick={() =>
                                                        subtractFromCart(item)
                                                    }
                                                    className="bg-[#fae886] p-2 rounded"
                                                >
                                                    <svg
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        fill="none"
                                                        viewBox="0 0 24 24"
                                                        strokeWidth="1.5"
                                                        stroke="currentColor"
                                                        className="w-6 h-6"
                                                    >
                                                        <path
                                                            strokeLinecap="round"
                                                            strokeLinejoin="round"
                                                            d="M18 12H6"
                                                        />
                                                    </svg>
                                                </button>
                                                <span className="px-2">
                                                    {findCartQuantity(item)}
                                                </span>
                                                <button
                                                    onClick={() =>
                                                        addToCart(item)
                                                    }
                                                    className="bg-[#fae886] p-2 rounded"
                                                >
                                                    <svg
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        fill="none"
                                                        viewBox="0 0 24 24"
                                                        strokeWidth="1.5"
                                                        stroke="currentColor"
                                                        className="w-6 h-6"
                                                    >
                                                        <path
                                                            strokeLinecap="round"
                                                            strokeLinejoin="round"
                                                            d="M12 6v12m6-6H6"
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
                <div className="bg-secondary col-span-2 overflow-auto space-y-3 pt-20 rounded border">
                    <Checkout
                        findCartQuantity={findCartQuantity}
                        removeFromCart={removeFromCart}
                        cart={cart}
                        clearCart={() => {
                            localStorage.setItem("cart", JSON.stringify([]));
                            setCart([]);
                        }}
                    />
                </div>
            </main>
        </div>
    );
};

export default Home;
