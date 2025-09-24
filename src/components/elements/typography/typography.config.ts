export const typographyConfig = {
  variants: {
    level: {
      caption: "text-[10px] leading-[130%]",
      label: "text-[13px] leading-[130%]",
      body: "text-base",
      title: "text-[20px] leading-[130%]",
      h5: "text-[25px] leading-[130%]",
      h4: "text-[31px] leading-[130%]",
      h3: "text-[39px] leading-[130%]",
      h2: "text-[49px] leading-[130%]",
      h1: "text-[61px] leading-[130%]",
      huge: "text-7xl",
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
} as const;
