import { CheckCircle2, Globe2, Shield, Zap } from "lucide-react";

const features = [
  {
    icon: Globe2,
    title: "Global Coverage",
    description: "Access phone number information from countries worldwide with comprehensive data.",
  },
  {
    icon: Zap,
    title: "Instant Results",
    description: "Get detailed phone number information in milliseconds with our powerful API.",
  },
  {
    icon: Shield,
    title: "Secure & Private",
    description: "Your searches are encrypted and we never store sensitive information.",
  },
  {
    icon: CheckCircle2,
    title: "Accurate Data",
    description: "Get reliable carrier, location, and line type information for any phone number.",
  },
];

export function Features() {
  return (
    <section className="container py-24">
      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
        {features.map((feature) => (
          <div key={feature.title} className="flex flex-col items-center text-center">
            <div className="mb-4 rounded-lg bg-primary/10 p-3">
              <feature.icon className="h-6 w-6" />
            </div>
            <h3 className="mb-2 text-lg font-semibold">{feature.title}</h3>
            <p className="text-sm text-muted-foreground">{feature.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}