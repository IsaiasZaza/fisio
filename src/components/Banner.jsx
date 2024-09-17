"use client";

import React from 'react';

const Banner = () => {
    return (
        <>
            {/* Banner para telas grandes (lg e acima) */}
            <div
                className="hidden lg:block relative w-full h-screen bg-no-repeat bg-black"
                style={{ backgroundImage: "url('/arte.png')", backgroundSize: "cover", backgroundPosition: "top center" }}
            >
            </div>

            {/* Banner para telas móveis (abaixo de lg) */}
            <div
                className="block lg:hidden relative h-64 bg-no-repeat"
                style={{ backgroundImage: "url('/arte.png')", backgroundSize: "cover", backgroundPosition: "center" }}
            >
            </div>
        </>
    );
};

export default Banner;
