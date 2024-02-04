import React from "react";
import Dialog from "./Dialog";

export const AddDish = () => {
    const [show, setShow] = React.useState(false);
    const [image, setImage] = React.useState(null);
    const [addingDish, setAddingDish] = React.useState(false);
    const createDish = (e) => {
        e.preventDefault();
        setAddingDish(true);
        const search_params = new URLSearchParams(window.location.search);
        const category_id = search_params.get("category_id");
        const formData = new FormData();
        formData.append("name", e.target.name.value);
        formData.append("price", e.target.price.value);
        formData.append("description", e.target.description.value);
        formData.append("image", image);
        formData.append("category_id", category_id);

        let headers = new Headers();
        headers.append(
            "Authorization",
            `Bearer ${localStorage.getItem("token")}`
        );

        fetch("/api/menu", {
            method: "POST",
            body: formData,
            headers: headers,
        })
            .then((response) => response.json())
            .then((data) => {
                // wait 2 seconds before closing the dialog
                setTimeout(() => {
                    setShow(false);
                    // reload the page
                    window.location.reload();
                    setAddingDish(false);
                }, 2000);
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
                                <button
                                    type="submit"
                                    disabled={addingDish}
                                    className="w-full bg-accent rounded p-2"
                                >
                                    {addingDish ? "Add Dish" : "Add Dish"}
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
