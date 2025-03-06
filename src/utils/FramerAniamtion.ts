export const TextAnimate = {
  hidden: {
    y: 20,
    opacity: 0,
  },
  visible: {
    y: 0,
    opacity: 1,
  },
};
export const ShowPage = {
  hidden: {
    opacity: 0,
    transition: { duration: 1, staggerChildren: 1, ease: "easeInOut" },
  },
  visible: {
    opacity: 1,
    transition: { duration: 1, staggerChildren: 1, ease: "easeInOut" },
  },
  exit: {
    opacity: 0,
    transition: { duration: 1, staggerChildren: 1, ease: "easeInOut" },
  },
};
