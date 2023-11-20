import React from "react";

const Login = () => {
    return (
        <div className="flex flex-col w-full h-screen bg-accent/30 py-4 justify-center">
            <div className="flex flex-col max-w-screen-sm bg-white mx-auto w-full py-10 rounded">
                <form action="" className="w-full p-4 space-y-2">
                <div className="flex flex-col items-center py-5">
                        <h2 className="font-bold text-xl">
                            Please login to continue
                        </h2>
                    </div>
                    <div className="flex flex-col items-center">
                        <img src="/logo.png"
                        
                        className="w-1/2"/>
                    </div>
                    
                    <div className="flex flex-col ">
                        <input
                            type="email"
                            placeholder="Email"
                            className="px-4 py-2.5 rounded border  mb-4"
                        />
                    </div>
                    <div className="flex flex-col">
                        <input
                            type="password"
                            placeholder="password"
                            className="px-4 py-2.5 rounded border mb-4"
                        />
                    </div>
                    <div className="flex flex-col">
                        <button className="px-4 py-2.5 rounded border  mb-4 bg-accent">
                            Login
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Login;
