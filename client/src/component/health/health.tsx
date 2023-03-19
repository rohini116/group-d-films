import { useEffect, useState } from "react";

const Health: React.FC = () => {
  const [message, setMessage] = useState<any>();

  const getMessage = async () => {
    const response = await fetch("http://localhost:5000/health");
    const json = await response.json();
    setMessage(json.message);
  };

  useEffect(() => {
    getMessage();
  }, []);

  return <div data-testid="health">{message}</div>;
};

export default Health;
