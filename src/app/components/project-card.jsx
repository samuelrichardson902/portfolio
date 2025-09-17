import { isValidElement, Children, cloneElement } from "react";
import Link from "next/link";

export default function ProjectCard({
  id,
  className = "",
  children,
  link,
  reverse = false,
}) {
  let imgClass =
    "w-full md:w-[70%] justify-center items-center flex overflow-hidden rounded-3xl";
  let imgChildClass =
    "rounded-3xl transition-transform duration-300 ease-in-out hover:scale-102 cursor-pointer";
  let contentClass =
    "w-full md:w-[30%] flex flex-col text-left items-start p-8";

  // Separate image from other content
  let image = null;
  const content = [];

  Children.forEach(children, (child) => {
    if (
      isValidElement(child) &&
      child.props.className &&
      child.props.className.includes("project-image")
    ) {
      // Add rounded corners & zoom effect to the image itself
      image = cloneElement(child, {
        className: `${child.props.className} ${imgChildClass}`,
      });
    } else {
      content.push(child);
    }
  });

  // Helper to check if link is external
  const isExternal =
    link && (link.startsWith("http://") || link.startsWith("https://"));

  return (
    <div
      id={id}
      className={`h-auto w-full flex flex-col pb-12 ${
        reverse ? "md:flex-row-reverse" : "md:flex-row"
      } ${className}`}
    >
      {/* Conditionally render image/content order based on reverse prop */}
      {image && (
        <div className={imgClass}>
          {link ? (
            isExternal ? (
              <a href={link} target="_blank" rel="noopener noreferrer">
                {image}
              </a>
            ) : (
              <Link href={link}>{image}</Link>
            )
          ) : (
            image
          )}
        </div>
      )}
      {content.length > 0 && <div className={contentClass}>{content}</div>}
    </div>
  );
}
