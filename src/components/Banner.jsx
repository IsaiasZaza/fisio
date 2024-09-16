"use client"

import React from 'react';

const Banner = () => {
    return (
        <>
            {/* Banner for large screens (lg and up) */}
            <div
                className="hidden lg:block relative h-screen bg-cover bg-center bg-no-repeat"
                style={{ backgroundImage: "url('/faixa01.jpg')" }}
            >
            </div>

            {/* Banner for mobile screens (below lg) */}
            <div
                className="block lg:hidden relative h-screen bg-cover bg-center bg-no-repeat"
                style={{ backgroundImage: "url('/bannerMobile.jpg')" }}
            >
            </div>
        </>
    );
};

export default Banner;
