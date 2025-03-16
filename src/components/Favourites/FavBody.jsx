import React from "react";
import FavLeftComponent from "./FavLeftComponent";
import FavRightComponent from "./FavRightComponent";

function FavBody() {
    return (
        <div className="w-full h-screen flex justify-center px-3 py-20 bg-gray-100">
            <div className="flex flex-col md:flex-row w-full max-w-6xl gap-6 p-6">
                {/* Left Component */}
                <div className="w-full md:w-[29%]">
                    <FavLeftComponent />
                </div>

                {/* Right Component */}
                <div className="w-full md:w-[71%]">
                    <FavRightComponent />
                </div>
            </div>
        </div>
    );
}

export default FavBody;
