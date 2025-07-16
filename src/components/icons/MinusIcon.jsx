export function MinusIcon({color = 'black', size = 15, strokeWidth = 2 }) {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            width={size}
            height={size}
            stroke={color}
            strokeWidth={strokeWidth}
        >
            <path
                fillRule="evenodd"
                d="M4.25 12a.75.75 0 0 1 .75-.75h14a.75.75 0 0 1 0 1.5H5a.75.75 0 0 1-.75-.75Z"
                clipRule="evenodd"
            />
        </svg>
    );
}