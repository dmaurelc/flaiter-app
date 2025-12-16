export const AppStoreBadge = ({ className = "" }: { className?: string }) => (
  <svg
    viewBox="0 0 120 40"
    className={className}
    xmlns="http://www.w3.org/2000/svg"
  >
    <rect width="120" height="40" rx="10" fill="black" />
    <text x="35" y="15" fill="white" fontSize="8" fontFamily="sans-serif">
      Download on the
    </text>
    <text
      x="35"
      y="28"
      fill="white"
      fontSize="14"
      fontFamily="sans-serif"
      fontWeight="bold"
    >
      App Store
    </text>
    {/* Apple Logo Path Placeholder - for simplicity using a circle or simplified path if I can't paste huge SVG */}
    <path
      d="M22.5 25.5C22.5 25.5 24 25.5 24 24C24 22.5 22.5 21.5 22.5 21.5C22.5 21.5 21 22.5 21 24C21 25.5 22.5 25.5 22.5 25.5Z"
      fill="white"
    />
    {/* Proper Apple Logo would be too long, I will use a high quality Next/Image or specific SVG component for the button structure instead */}
  </svg>
);
// Actually, creating a robust button component is better.

// pure svg implementation below
// I will build the badges with pure SVG paths inside the logic.

export function StoreBadge({
  store,
  variant = "black",
}: {
  store: "apple" | "google";
  variant?: "black" | "white" | "outline";
}) {
  const isApple = store === "apple";
  const bgColor =
    variant === "black"
      ? "bg-black text-white"
      : variant === "white"
      ? "bg-white text-black"
      : "bg-transparent border border-white text-white hover:bg-white hover:text-black";
  const icon = isApple ? (
    <svg viewBox="0 0 384 512" fill="currentColor" className="w-6 h-6 mb-1">
      <path d="M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 20.7-88.5 20.7-15 0-49.4-19.7-76.4-19.7C63.3 141.2 4 184.8 4 273.5q0 39.3 14.4 81.2c12.8 36.7 59 126.7 107.2 125.2 25.2-.6 43-17.9 75.8-17.9 31.8 0 48.3 17.9 76.4 17.9 48.6-.7 90.4-82.5 102.6-119.3-65.2-30.7-61.7-90-61.7-91.9zm-56.6-164.2c27.3-32.4 24.8-61.9 24-72.5-24.1 1.4-52 16.4-67.9 34.9-17.5 19.8-27.8 44.3-25.6 71.9 26.1 2 49.9-11.4 69.5-34.3z" />
    </svg>
  ) : (
    <svg viewBox="0 0 512 512" fill="currentColor" className="w-5 h-5">
      <path d="M325.3 234.3L104.6 13l280.8 161.2-60.1 60.1zM47 0C34 6.8 25.3 19.2 25.3 35.3v441.3c0 16.1 8.7 28.5 21.7 35.3l256.6-256L47 0zm425.2 225.6l-58.9-34.1-65.7 64.5 65.7 64.5 60.1-34.1c18-14.3 18-46.5-1.2-60.8zM104.6 499l280.8-161.2-60.1-60.1L104.6 499z" />
    </svg>
  );

  return (
    <a
      href="#"
      className={`flex items-center gap-3 px-4 py-2 rounded-xl transition-all hover:scale-105 duration-200 ${bgColor} border min-w-[160px] justify-center`}
    >
      {icon}
      <div className="flex flex-col items-start leading-none">
        <span className="text-[10px] opacity-80 uppercase tracking-wider">
          {isApple ? "Download on the" : "Get it on"}
        </span>
        <span className="text-lg font-bold">
          {isApple ? "App Store" : "Google Play"}
        </span>
      </div>
    </a>
  );
}
