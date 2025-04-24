
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface CTAButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  variant?: "primary" | "outline";
  size?: "default" | "lg";
  fullWidth?: boolean;
}

const CTAButton = ({
  children,
  variant = "primary",
  size = "default",
  fullWidth = false,
  className,
  ...props
}: CTAButtonProps) => {
  return (
    <Button
      className={cn(
        "transition-all duration-300",
        fullWidth && "w-full",
        size === "lg" && "text-lg py-6",
        className
      )}
      {...props}
    >
      {children}
    </Button>
  );
};

export default CTAButton;
