import { useState } from "react";

const useToggle = (initialState = false) => {
  const [isOpen, setIsOpen] = useState(initialState);

  const closeToggle = () => {
    setIsOpen(false);
  };

  const openToggle = () => {
    setIsOpen(true);
  };

  return [isOpen, closeToggle, openToggle];
};

export default useToggle;
