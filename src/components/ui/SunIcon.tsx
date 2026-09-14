type SunIconProps = {
  className?: string;
};

export default function SunIcon({ className }: SunIconProps) {
  return (
    <svg
      viewBox="0 0 48 48"
      fill="none"
      className={className}
      aria-hidden="true"
      focusable="false"
    >
      <circle cx="24" cy="24" r="10" fill="currentColor" />

      <path
        d="
          M24 3V8
          M24 40V45
          M3 24H8
          M40 24H45
          M9 9L13 13
          M35 35L39 39
          M9 39L13 35
          M35 13L39 9
        "
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  );
}