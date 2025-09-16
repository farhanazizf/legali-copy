import { cva } from "class-variance-authority";

export const typographyVariants = cva("text-black", {
  variants: {
    level: {
      caption: "text-[10px] leading-[120%]",
      label: "text-[13px] leading-[120%]",
      body: "text-[16px] leading-[120%]",
      title: "text-[20px] leading-[120%]",
      h5: "text-[25px] leading-[120%]",
      h4: "text-[31px] leading-[120%]",
      h3: "text-[39px] leading-[120%]",
      h2: "text-[49px] leading-[120%]",
      h1: "text-[61px] leading-[120%]",
    },
    weight: {
      light: "font-light",
      normal: "font-normal",
      medium: "font-medium",
      semibold: "font-semibold",
      bold: "font-bold",
      extrabold: "font-extrabold",
    },
    align: {
      left: "text-left",
      center: "text-center",
      right: "text-right",
      justify: "text-justify",
    },
    transform: {
      normal: "normal-case",
      uppercase: "uppercase",
      lowercase: "lowercase",
      capitalize: "capitalize",
    },
  },
  defaultVariants: {
    level: "body",
    weight: "normal",
    align: "center",
    transform: "normal",
  },
});
