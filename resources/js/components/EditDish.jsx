import React from "react";
import Dialog from "./Dialog";

export const EditDish = ({ dish,setEditItem }) => {
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

        let headers = new Headers();
        headers.append(
            "Authorization",
            `Bearer ${localStorage.getItem("token")}`
        );

        fetch("/api/menu/"+dish.id, {
            method: "PUT",
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
                }, 2000);
            })
            .catch((error) => console.log("error", error));
    };

    return (
        <Dialog close={() => setEditItem(null)}>
            <div className="max-w-screen-md mx-auto bg-white h-full w-full overflow-auto">
                <form
                    onSubmit={createDish}
                    className="flex flex-col space-y-4 p-4"
                >
                    <div className="flex justify-center items-center py-10">
                        <h1 className="font-bold text-xl">Add New Dish</h1>
                    </div>
                    <div className="flex flex-col space-y-1">
                        <label className="">Dish Name</label>
                        <input
                            name="name"
                            type="text"
                            defaultValue={dish.name}
                            className="w-full border-2 border-black/70 rounded p-2"
                        />
                    </div>
                    <div className="flex flex-col space-y-1">
                        <label className="">Dish Price</label>
                        <input
                            type="number"
                            name="price"
                            defaultValue={dish.price}
                            className="w-full border-2 border-black/70 rounded p-2"
                        />
                    </div>
                    <div className="flex flex-col space-y-1">
                        <label className="">Dish Image</label>
                        <input
                            onChange={(e) => setImage(e.target.files[0])}
                            type="file"
                            name="image"
                            className="w-full border-2 border-black/70 rounded p-2"
                        />
                    </div>
                    <div className="flex flex-col space-y-1">
                        <label className="">Short Description</label>
                        <textarea
                            defaultValue={dish.description}
                            name="description"
                            className="w-full border-2 border-black/70 rounded p-2"
                        ></textarea>
                    </div>
                    <div className="w-full">
                        <button className="w-full bg-accent rounded p-2">
                            Update Dish
                        </button>
                    </div>
                </form>
            </div>
        </Dialog>
    );
};

export default EditDish;
