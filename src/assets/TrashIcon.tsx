// Simple SVG React component used for delete/remove actions.
const TrashIcon = () => {
  return (
    <svg
      aria-hidden="true"
      focusable="false"
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
      width={16}
      height={16}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M4 7h16M10 11v6M14 11v6M6 7l1 13h10l1-13M9 7V5h6v2"
      />
    </svg>
  );
};

export default TrashIcon;
