import { Switch } from "@/components/ui/switch";
import { Card } from "@/components/ui/card";
import { Label } from "@/components/ui/label";

interface RepositoryCardProps {
  name: string;
  autoReview: boolean;
  onAutoReviewToggle: (value: boolean) => void;
}

export const RepositoryCard = ({
  name,
  autoReview,
  onAutoReviewToggle,
}: RepositoryCardProps) => {
  return (
    <Card className="p-4 hover:shadow-md transition-shadow">
      <div className="flex items-center justify-between">
        <div className="flex-1">
          <h3 className="text-lg font-medium">{name}</h3>
        </div>
        <div className="flex items-center space-x-2">
          <Label htmlFor={`auto-review-${name}`}>Auto Review</Label>
          <Switch
            id={`auto-review-${name}`}
            checked={autoReview}
            onCheckedChange={onAutoReviewToggle}
          />
        </div>
      </div>
    </Card>
  );
};