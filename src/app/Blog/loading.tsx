export default function Loading() {
  return (
    <div className="flex items-center justify-center min-h-screen text-amber-400">
      <svg viewBox="0 0 150 150" width="150" height="150">
        <style>
          {`
          @keyframes loader2022 {
            50% {
              transform: rotate(360deg);
            }
          }
          .ccc2002 {
            fill: none;
            stroke-width: 5;
            stroke-linecap: round;
            animation-name: loader2022;
            animation-duration: 4s;
            animation-iteration-count: infinite;
            animation-timing-function: ease-in-out;
            transform-origin: 50% 50%;
          }

          .ccc2002:nth-child(1) {
            stroke: currentColor;
            stroke-dasharray: 50;
            animation-delay: -0.2s;
            opacity: 25%;
          }

          .ccc2002:nth-child(2) {
            stroke: currentColor;
            stroke-dasharray: 100;
            opacity: 50%;
            animation-delay: -0.4s;
          }

          .ccc2002:nth-child(3) {
            stroke: currentColor;
            stroke-dasharray: 180;
            opacity: 75%;
            animation-delay: -0.6s;
          }

          .ccc2002:nth-child(4) {
            stroke: currentColor;
            stroke-dasharray: 350;
            stroke-dashoffset: -100;
            opacity: 100%;
            animation-delay: -0.8s;
          }
        `}
        </style>
        <circle className="ccc2002" cx="75" cy="75" r="20" />
        <circle className="ccc2002" cx="75" cy="75" r="35" />
        <circle className="ccc2002" cx="75" cy="75" r="50" />
        <circle className="ccc2002" cx="75" cy="75" r="65" />
      </svg>
    </div>
  );
}
