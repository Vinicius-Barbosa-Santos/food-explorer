export const Head = ({ title, description }) => {
  document.title = `Food Explorer | ${title}`;
  document
    .querySelector("[name=description]")
    .setAttribute("content", description);
};
