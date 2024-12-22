import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

interface ProfileInfoProps {
  name: string;
  email: string;
  userId: string;
  onLogout: () => void;
}

export const ProfileInfo = ({ name, email, userId, onLogout }: ProfileInfoProps) => {
  return (
    <Card className="p-6 mb-8">
      <div className="space-y-4">
        <div>
          <label className="text-sm text-muted-foreground">Name</label>
          <p className="text-lg font-medium">{name}</p>
        </div>
        <div>
          <label className="text-sm text-muted-foreground">Email</label>
          <p className="text-lg font-medium">{email}</p>
        </div>
        <div>
          <label className="text-sm text-muted-foreground">User ID</label>
          <p className="text-lg font-medium">{userId}</p>
        </div>
        <Button
          variant="destructive"
          className="w-full"
          onClick={onLogout}
        >
          Logout
        </Button>
      </div>
    </Card>
  );
};