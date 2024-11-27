import { Card, CardContent, CardHeader } from "@/components/ui/card";

interface AuthCardProps {
  title: string;
  description: string;
  children: React.ReactNode;
}

export function AuthCard({ title, description, children }: AuthCardProps) {
  return (
    <div className="min-h-screen flex items-center justify-center bg-background">
      <Card className="w-full max-w-md">
        <CardHeader>
          <h1 className="text-2xl font-bold text-center">{title}</h1>
          <p className="text-sm text-muted-foreground text-center">
            {description}
          </p>
        </CardHeader>
        <CardContent>{children}</CardContent>
      </Card>
    </div>
  );
}