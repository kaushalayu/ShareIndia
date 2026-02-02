import React from "react";

export default function ScrollToTop() {
    const handleScrollTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    };

    return (
        <button
            className="scroltop vert-move"
            onClick={handleScrollTop}
            aria-label="Scroll to top"
        >
            <span className="relative" id="btn-vibrate">
                <img
                    src="/images/scroll-top.png"
                    alt="scroll to top"
                />
            </span>
        </button>
    );
}
