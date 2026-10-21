import { useEffect } from "react";

/**
 * Calls `setMenuOpened(false)` when the user clicks/taps outside `menuRef`
 * or presses Escape.
 */
export default function useOutsideAlerter({ menuRef, setMenuOpened }) {
  useEffect(() => {
    function handleClickOutside(event) {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setMenuOpened(false);
      }
    }
    function handleKey(event) {
      if (event.key === "Escape") setMenuOpened(false);
    }
    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("touchstart", handleClickOutside);
    document.addEventListener("keydown", handleKey);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("touchstart", handleClickOutside);
      document.removeEventListener("keydown", handleKey);
    };
  }, [menuRef, setMenuOpened]);
}
