import React, { useEffect } from "react";

const MenuCategories = () => {
    let [categories, setCategories] = React.useState([]);
    let searchParams = new URLSearchParams(window.location.search);
    let activeCategory = searchParams.get("category_id");

    useEffect(() => {
        let headers = new Headers();
        headers.append("Content-Type", "application/json");
        headers.append("Authorization", `Bearer ${localStorage.getItem("token")}`);
        fetch("/api/menu-category", {
            headers,
        })
            .then((response) => response.json())
            .then((data) => {
                setCategories(data.data);
            });
    }, []);

    return (
        <div className="flex flex-col overflow-auto space-y-6">
            {categories &&
                categories.map((category) => (
                    <a
                        href={`?category_id=${category?.id}`}
                        key={category?.id}
                        className={`py-2 border-2 border-accent w-full rounded flex items-center px-2 space-x-2
                        ${
                            activeCategory == category?.id
                                ? "bg-accent text-white"
                                : "bg-white text-accent"
                        }
                        `}
                    >
                        <div className="aspect-video w-3/5">
                            <img src={`/${category?.image}`} />
                        </div>
                        <span className="font-bold text-xl">
                            {category.name}
                        </span>
                    </a>
                ))}
        </div>
    );
};

export default MenuCategories;
