
import { Star } from "lucide-react";
import { cn } from "@/lib/utils";

interface TestimonialCardProps extends React.HTMLAttributes<HTMLDivElement> {
  name: string;
  text: string;
  rating: number;
  avatarUrl: string;
}

const TestimonialCard = ({
  name,
  text,
  rating,
  avatarUrl,
  className,
  ...props
}: TestimonialCardProps) => {
  return (
    <div
      className={cn(
        "bg-white/80 backdrop-blur-sm rounded-xl shadow-lg",
        className
      )}
      {...props}
    >
      <div className="flex items-center gap-4 mb-4">
        <img
          src={avatarUrl}
          alt={name}
          className="w-12 h-12 rounded-full object-cover"
        />
        <div>
          <h4 className="font-medium text-gray-800">{name}</h4>
          <div className="flex gap-1">
            {Array.from({ length: rating }).map((_, i) => (
              <Star
                key={i}
                className="w-4 h-4 text-yellow-400 fill-current"
              />
            ))}
          </div>
        </div>
      </div>
      <p className="text-gray-600 italic">{text}</p>
    </div>
  );
};

export default TestimonialCard;
