import React from "react";
import Dialog from "./Dialog";

export const AddDish = () => {
    const [show, setShow] = React.useState(false);
    const [image, setImage] = React.useState(null);

    const createDish = (e) => {
        e.preventDefault();
        const search_params = new URLSearchParams(window.location.search);
        const category_id = search_params.get("category_id");
        const formData = new FormData();
        formData.append("name", e.target.name.value);
        formData.append("price", e.target.price.value);
        formData.append("description", e.target.description.value);
        formData.append("image", image);
        formData.append("category_id", category_id);

        fetch("/api/menu", {
            method: "POST",
            body: formData,
        })
            .then((response) => response.json())
            .then((data) => {
                console.log(data);
                setShow(false);
            })
            .catch((error) => console.log("error", error));
    };

    return (
        <>
            <button
                onClick={() => setShow(true)}
                className="bg-[#fae886] px-5 py-1.5 rounded shadow flex items-center space-x-2"
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
                        d="M12 9v6m3-3H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                </svg>
                <span>Add Dish</span>
            </button>
            {show && (
                <Dialog close={() => setShow(false)}>
                    <div className="max-w-screen-md mx-auto bg-white h-full w-full overflow-auto">
                        <form
                            onSubmit={createDish}
                            className="flex flex-col space-y-4 p-4"
                        >
                            <div className="flex justify-center items-center py-10">
                                <h1 className="font-bold text-xl">
                                    Add New Dish
                                </h1>
                            </div>
                            <div className="flex flex-col space-y-1">
                                <label className="">Dish Name</label>
                                <input
                                    name="name"
                                    className="w-full border-2 border-black/70 rounded p-2"
                                />
                            </div>
                            <div className="flex flex-col space-y-1">
                                <label className="">Dish Price</label>
                                <input
                                    type="number"
                                    name="price"
                                    className="w-full border-2 border-black/70 rounded p-2"
                                />
                            </div>
                            <div className="flex flex-col space-y-1">
                                <label className="">Dish Image</label>
                                <input
                                    onChange={(e) =>
                                        setImage(e.target.files[0])
                                    }
                                    type="file"
                                    className="w-full border-2 border-black/70 rounded p-2"
                                />
                            </div>
                            <div className="flex flex-col space-y-1">
                                <label className="">Short Description</label>
                                <textarea
                                    name="description"
                                    className="w-full border-2 border-black/70 rounded p-2"
                                ></textarea>
                            </div>
                            <div className="w-full">
                                <button className="w-full bg-accent rounded p-2">
                                    Add Category
                                </button>
                            </div>
                        </form>
                    </div>
                </Dialog>
            )}
        </>
    );
};

export default AddDish;
