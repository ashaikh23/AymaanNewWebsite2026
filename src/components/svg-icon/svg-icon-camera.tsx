import type { SvgIconProps } from "@/components/svg-icon";
import SvgIcon from "@/components/svg-icon/svg-icon";

const SvgIconCamera = (props: Omit<SvgIconProps, "children">) => (
  <SvgIcon viewBox="0 0 24 24" {...props}>
    <path d="M12 15a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z" />
    <path
      fillRule="evenodd"
      d="M1.323 11.447C2.811 6.976 7.028 4 12 4c4.97 0 9.185 2.977 10.674 7.448.12.34.12.708 0 1.048C21.185 17.024 16.97 20 12 20c-4.97 0-9.186-2.976-10.675-7.448a1.134 1.134 0 0 1 0-1.048ZM17 12a5 5 0 1 1-10 0 5 5 0 0 1 10 0Z"
      clipRule="evenodd"
    />
  </SvgIcon>
);

export default SvgIconCamera;
