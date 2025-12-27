export default function Logo({
  className = "w-8 h-8",
  color = "currentColor",
}: {
  className?: string;
  color?: string;
}) {
  return (
    <svg
      className={className}
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      role="img"
      aria-label="Logo de Flaiter - Diccionario de Chilenismos"
    >
      <path
        d="M28 16C28 22.6274 22.6274 28 16 28C13.5284 28 11.2316 27.2024 9.32432 25.8277L4 27.5L5.80569 22.3787C4.66442 20.5188 4 18.3374 4 16C4 9.37258 9.37258 4 16 4C22.6274 4 28 9.37258 28 16Z"
        fill={color}
      />
      <path
        d="M13 10H19M13 14H18M13 18H16"
        stroke="white"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
