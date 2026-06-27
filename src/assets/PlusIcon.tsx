// Simple SVG React component used to render a plus icon.
// It can be reused anywhere we need an "add" action visually represented.
const PlusIcon = () => {
  return (
    <svg
      fill="none"
      viewBox="0 0 24 24"
      width={20}
      height={20}
      stroke="currentColor"
    >
      {/*
        The path draws the actual plus shape.
        "currentColor" lets the icon inherit the text color from its parent,
        which makes it easy to style through CSS or styled-components.
      */}
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M12 6v6m0 0v6m0-6h6m-6 0H6"
      />
    </svg>
  );
};

export default PlusIcon;
