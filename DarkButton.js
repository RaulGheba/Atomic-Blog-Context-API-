import { useEffect, useState } from "react";

function Button() {
  useEffect(function () {
    document.documentElement.classList.toggle("fake-dark-mode");
  });

  const [isFakeDark, setIsFakeDark] = useState(false);

  return (
    <button
      onClick={() => setIsFakeDark((isFakeDark) => !isFakeDark)}
      className="btn-fake-dark-mode"
    >
      {isFakeDark ? "☀️" : "🌙"}
    </button>
  );
}

export default Button;
