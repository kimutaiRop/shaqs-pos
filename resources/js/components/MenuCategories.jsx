import React, { useEffect } from "react";

const MenuCategories = () => {
    let [categories, setCategories] = React.useState([]);
    let searchParams = new URLSearchParams(window.location.search);
    let activeCategory = searchParams.get("category_id");

    useEffect(() => {
        let headers = new Headers();
        headers.append("Content-Type", "application/json");

        headers.append(
            "Authorization",
            `Bearer ${localStorage.getItem("token")}`
        );
        fetch("/api/menu-category", {
            headers,
        })
            .then((response) => response.json())
            .then((data) => {
                setCategories(data.data);
            });
    }, []);

    const deleteCategory = (id) => {
        let headers = new Headers();
        let delete_ = confirm("Are you sure you want to delete this category?");
        if (!delete_) return;

        headers.append("Content-Type", "application/json");
        // method post
        headers.append("method", "post");
        headers.append(
            "Authorization",
            `Bearer ${localStorage.getItem("token")}`
        );
        fetch(`/api/menu-category/${id}`, {
            headers: headers,
            method: "POST",
            body: JSON.stringify({
                id: id,
            }),
        })
            .then((response) => response.json())
            .then((data) => {
                window.location.reload();
            });
    };

    return (
        <div className="flex flex-col overflow-auto space-y-6">
            {categories &&
                categories.map((category) => (
                    <div className="w-full relative">
                        <a
                            href={`?category_id=${category?.id}`}
                            key={category?.id}
                            className={`py-2 relative border-2 border-accent w-full rounded flex items-center px-2 space-x-2
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
                        <button
                            onClick={() => deleteCategory(category.id)}
                            className="absolute top-2 right-2 z-20 text-red-400 bg-white rounded p-1"
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
                ))}
        </div>
    );
};

export default MenuCategories;
