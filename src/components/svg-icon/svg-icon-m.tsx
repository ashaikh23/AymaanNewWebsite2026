import { SvgIcon, type SvgIconProps } from "@/components/svg-icon";

const SvgIconM = (props: Omit<SvgIconProps, "children">) => {
  return (
    <SvgIcon {...props} className="fill-blue-500">
      <text
        x="8"
        y="8"
        textAnchor="middle"
        dominantBaseline="middle"
        fontSize="12"
        fontWeight="700"
        fontFamily="var(--font-sans), system-ui, sans-serif"
      >
        AS
      </text>
    </SvgIcon>
  );
};
export default SvgIconM;
