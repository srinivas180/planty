import { Circles } from "react-loader-spinner";
import React from "react";

export function Loader() {
    return (
        <Circles
            height="80"
            width="80"
            color="#4fa94d"
            ariaLabel="circles-loading"
            wrapperStyle={{}}
            wrapperClass=""
            visible={true}
        />
    );
}
