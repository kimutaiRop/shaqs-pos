import React from "react";

const Login = () => {
    const handleSubmit = (e) => {
        e.preventDefault();
        let data = {
            email: e.target.email.value,
            password: e.target.password.value,
        };
        console.log(data);
        var myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");

        var raw = JSON.stringify(data);

        var requestOptions = {
            method: "POST",
            headers: myHeaders,
            body: raw,
            redirect: "follow",
        };

        fetch("/api/api-login", requestOptions)
            .then((response) => response.text())
            .then((result) => {
                result = JSON.parse(result);
                if (result.success) {
                    localStorage.setItem("token", result.token);
                    window.location.href = "/";
                } else {
                    alert(result.message);
                }
            })
            .catch((error) => console.log("error", error));
    };
    return (
        <form
            onSubmit={handleSubmit}
            className="flex flex-col w-full h-screen bg-accent/30 py-4 justify-center"
        >
            <div className="flex flex-col max-w-screen-sm bg-white mx-auto w-full py-10 rounded">
                <div action="" className="w-full p-4 space-y-2">
                    <div className="flex flex-col items-center py-5">
                        <h2 className="font-bold text-xl">
                            Please login to continue
                        </h2>
                    </div>
                    <div className="flex flex-col items-center">
                        <img src="/logo.png" className="w-1/2" />
                    </div>

                    <div className="flex flex-col ">
                        <input
                            type="email"
                            name="email"
                            placeholder="Email"
                            className="px-4 py-2.5 rounded border  mb-4"
                        />
                    </div>
                    <div className="flex flex-col">
                        <input
                            type="password"
                            name="password"
                            placeholder="password"
                            className="px-4 py-2.5 rounded border mb-4"
                        />
                    </div>
                    <div className="flex flex-col">
                        <button className="px-4 py-2.5 rounded border  mb-4 bg-accent">
                            Login
                        </button>
                    </div>
                </div>
            </div>
        </form>
    );
};

export default Login;
