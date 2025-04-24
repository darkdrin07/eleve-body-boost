
interface BadgeRibbonProps {
  text: string;
}

const BadgeRibbon = ({ text }: BadgeRibbonProps) => {
  return (
    <div className="absolute -top-4 -right-4 z-10">
      <div className="bg-rose-500 text-white text-sm font-bold py-2 px-4 rounded-full shadow-lg">
        {text}
      </div>
    </div>
  );
};

export default BadgeRibbon;
