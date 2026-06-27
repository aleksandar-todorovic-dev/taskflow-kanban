// Simple SVG React component used for delete/remove actions.
// Although named TrashIcon, this SVG currently renders an "X" shape.
const TrashIcon = () => {
  return (
    <svg
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
      width={16}
      height={16}
    >
      {/*
        The path draws two diagonal lines that form an "X".
        Using currentColor allows the icon to inherit its color from the parent element.
      */}
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M6 18L18 6M6 6l12 12"
      ></path>
    </svg>
  );
};

export default TrashIcon;
