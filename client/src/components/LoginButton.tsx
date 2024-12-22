import { Button } from "@/components/ui/button";
import { GitHubLogoIcon, SquareIcon } from "@radix-ui/react-icons";
import { IconProps } from "@radix-ui/react-icons/dist/types";

interface LoginButtonProps {
  provider: "github" | "gitlab" | "bitbucket";
  onClick: () => void;
}

const ProviderIcon = ({ provider, ...props }: { provider: string } & IconProps) => {
  switch (provider) {
    case "github":
      return <GitHubLogoIcon {...props} />;
    case "gitlab":
      // Using SquareIcon as a temporary replacement for GitLab
      return <SquareIcon {...props} />;
    case "bitbucket":
      return (
        <svg width="15" height="15" viewBox="0 0 15 15" {...props}>
          <path
            fill="currentColor"
            d="M2.08 3.872c-.139.23-.197.483-.168.735l1.455 8.615c.037.218.173.404.371.507.078.04.163.063.25.063h7.564c.186 0 .354-.113.422-.285l1.455-8.615a.826.826 0 00-.168-.735.87.87 0 00-.696-.337H2.776a.87.87 0 00-.696.337zm1.147.413l1.255 7.435H4.27L3.015 4.285h.212zm8.357 7.435l-1.255-7.435h.212l1.255 7.435h-.212z"
          />
        </svg>
      );
    default:
      return null;
  }
};

const providerNames = {
  github: "GitHub",
  gitlab: "GitLab",
  bitbucket: "Bitbucket",
};

export const LoginButton = ({ provider, onClick }: LoginButtonProps) => {
  return (
    <Button
      variant="outline"
      className="w-full flex items-center justify-center gap-2 py-6 text-lg hover:bg-accent transition-colors"
      onClick={onClick}
    >
      <ProviderIcon provider={provider} className="w-5 h-5" />
      Login with {providerNames[provider]}
    </Button>
  );
};