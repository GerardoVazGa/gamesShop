export function PrevArrowIcon({ color = "black", size = 15, strokeWidth = 2 }) {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width={size}
            height={size}
            fill="none"
            stroke={color}
            strokeWidth={strokeWidth}
            viewBox="0 0 32 32"
        >
            <path
                fill="#fff"
                d="m16 8l1.43 1.393L11.85 15H24v2H11.85l5.58 5.573L16 24l-8-8z"
            ></path>
            <path
                fill="#fff"
                d="M16 30a14 14 0 1 1 14-14a14.016 14.016 0 0 1-14 14m0-26a12 12 0 1 0 12 12A12.014 12.014 0 0 0 16 4"
            ></path>
        </svg>
    );
}
