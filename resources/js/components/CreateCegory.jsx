import React from "react";
import Dialog from "./Dialog";

export const CreateCegory = () => {
    let cookies = document.cookie.split(";").map((cookie) => cookie.split("="));
    const [show, setShow] = React.useState(false);
    const [image, setImage] = React.useState(null);
    const createCategory = (event) => {
        event.preventDefault();
        let name = event.target.name.value;
        var formdata = new FormData();
        formdata.append("name", name);
        formdata.append("image", image);

     
        let headers = new Headers();
        headers.append("Content-Type", "application/json");
        headers.append("Authorization", `Bearer ${localStorage.getItem("token")}`);
        var requestOptions = {
            method: "POST",
            body: formdata,
            redirect: "follow",
            headers,
        };
        fetch("/api/menu-category", requestOptions)
            .then((response) => response.text())
            .then((result) => {
                console.log(result);
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
                <span>Add Category</span>
            </button>
            {show && (
                <Dialog close={() => setShow(false)}>
                    <div className="max-w-screen-md mx-auto bg-white h-full w-full overflow-auto">
                        <form
                            onSubmit={createCategory}
                            className="flex flex-col space-y-4 p-4"
                        >
                            <div className="flex justify-center items-center py-10">
                                <h1 className="font-bold text-xl">
                                    Add Category
                                </h1>
                            </div>
                            <div>
                                <label className="font-bold">
                                    Category Name
                                </label>
                            </div>
                            <input
                                name="name"
                                className="w-full border-2 border-black/70 rounded p-2"
                            />
                            <input
                                name="image"
                                type="file"
                                // only accept image
                                onChange={(e) => {
                                    console.log(e.target.files);
                                    setImage(e.target.files[0]);
                                }}
                                accept="image/*"
                                className="w-full border-2 border-black/70 rounded p-2"
                            />
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

export default CreateCegory;
