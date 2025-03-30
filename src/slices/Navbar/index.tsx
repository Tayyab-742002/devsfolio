import { FC } from "react";
import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";
import { PrismicNextImage, PrismicNextLink } from "@prismicio/next";

/**
 * Props for `Navbar`.
 */
export type NavbarProps = SliceComponentProps<Content.NavbarSlice>;

/**
 * Component for "Navbar" Slices.
 */
const Navbar: FC<NavbarProps> = ({ slice }) => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
     
    >
      <PrismicNextImage field={slice.primary.logo} />
      {slice.primary.logotext}
      {slice.primary.links.map((item: any) => (
        <>
          <a href={item.url} key={item.id}>
            {item.label}
          </a>
          <PrismicNextLink field={item.url} />
        </>
      ))}
    </section>
  );
};

export default Navbar;
