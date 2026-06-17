export function GoogleBusinessLogo({ className = "h-8" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 120 32" aria-label="Google Business Profile">
      <text x="0" y="22" fontFamily="Arial, sans-serif" fontSize="14" fontWeight="700" fill="#4285F4">
        Google
      </text>
      <text x="58" y="22" fontFamily="Arial, sans-serif" fontSize="14" fontWeight="400" fill="#5f6368">
        Business
      </text>
      <circle cx="108" cy="16" r="10" fill="#34A853" />
      <path
        d="M105 16l2 2 4-4"
        stroke="white"
        strokeWidth="1.5"
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function JustDialLogo({ className = "h-8" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 100 32" aria-label="JustDial">
      <rect x="0" y="4" width="100" height="24" rx="4" fill="#FF0000" />
      <text
        x="50"
        y="20"
        textAnchor="middle"
        fontFamily="Arial, sans-serif"
        fontSize="13"
        fontWeight="700"
        fill="white"
      >
        JustDial
      </text>
    </svg>
  );
}
