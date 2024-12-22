import { useState } from "react";
import { LoginButton } from "@/components/LoginButton";
import { ProfileInfo } from "@/components/ProfileInfo";
import { RepositoryCard } from "@/components/RepositoryCard";
import { useToast } from "@/components/ui/use-toast";

interface Repository {
  id: string;
  name: string;
  autoReview: boolean;
}

const mockRepositories: Repository[] = [
  { id: "1", name: "user/repo1", autoReview: false },
  { id: "2", name: "user/repo2", autoReview: true },
  { id: "3", name: "user/repo3", autoReview: false },
];

const Index = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [repositories, setRepositories] = useState<Repository[]>(mockRepositories);
  const { toast } = useToast();

  const handleLogin = (provider: string) => {
    toast({
      title: "Login Successful",
      description: `Logged in with ${provider}`,
    });
    setIsLoggedIn(true);
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    toast({
      title: "Logged out",
      description: "You have been successfully logged out",
    });
  };

  const handleAutoReviewToggle = (repoId: string, value: boolean) => {
    setRepositories(repos =>
      repos.map(repo =>
        repo.id === repoId ? { ...repo, autoReview: value } : repo
      )
    );
    toast({
      title: "Setting Updated",
      description: `Auto review ${value ? "enabled" : "disabled"}`,
    });
  };

  if (!isLoggedIn) {
    return (
      <div className="flex items-center justify-center p-4">
        <div className="w-full max-w-md space-y-4 animate-fadeIn">
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold mb-2">Welcome Back</h1>
            <p className="text-muted-foreground">Login to manage your repositories</p>
          </div>
          <div className="space-y-4">
            <LoginButton provider="github" onClick={() => handleLogin("GitHub")} />
            <LoginButton provider="gitlab" onClick={() => handleLogin("GitLab")} />
            <LoginButton provider="bitbucket" onClick={() => handleLogin("Bitbucket")} />
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="animate-fadeIn">
      <div className="max-w-4xl mx-auto">
        <ProfileInfo
          name="John Doe"
          email="john@example.com"
          userId="johndoe123"
          onLogout={handleLogout}
        />

        <div className="space-y-4">
          <h2 className="text-2xl font-semibold mb-4">Your Repositories</h2>
          {repositories.map((repo) => (
            <RepositoryCard
              key={repo.id}
              name={repo.name}
              autoReview={repo.autoReview}
              onAutoReviewToggle={(value) => handleAutoReviewToggle(repo.id, value)}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Index;