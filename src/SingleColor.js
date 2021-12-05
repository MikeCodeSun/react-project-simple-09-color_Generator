import { useEffect, useState } from "react";

export default function SingleColor({ index, rgb, weight, hexValue }) {
  const [alert, setAlert] = useState(false);

  const bcg = rgb.join(",");
  const hex = `#${hexValue}`;

  useEffect(() => {
    const timeOut = setTimeout(() => {
      setAlert(false);
    }, 2000);
    return () => {
      clearTimeout(timeOut);
    };
  }, [alert]);

  return (
    <article
      className={`color ${index > 10 && "color-light"}`}
      style={{ backgroundColor: `rgb(${bcg})` }}
      onClick={() => {
        setAlert(true);
        navigator.clipboard.writeText(hex);
      }}
    >
      <p className="color-value">{weight}</p>
      <p className="color-hex">{hex}</p>
      {alert && <p className="color-copy">copied to clickBord</p>}
    </article>
  );
}
