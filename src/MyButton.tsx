import { useState } from "react";

function MyButton() {
  const [st, setSt] = useState(0);

  const handleClick = () => {
    setSt(st + 1);
  };

  return <button onClick={handleClick}>my button {st}</button>;
}

export default MyButton;
