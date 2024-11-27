import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardContent, CardHeader } from "@/components/ui/card";

const testimonials = [
  {
    name: "Alex Thompson",
    title: "Security Analyst",
    content: "Phoonbook has become an essential tool in our security verification process. The accuracy and speed of results are impressive.",
    avatar: "AT",
  },
  {
    name: "Sarah Chen",
    title: "Business Owner",
    content: "This tool helps us verify customer phone numbers instantly. It's been a game-changer for our verification process.",
    avatar: "SC",
  },
  {
    name: "Michael Roberts",
    title: "IT Manager",
    content: "The global coverage and detailed information provided by Phoonbook is exactly what we needed for our international operations.",
    avatar: "MR",
  },
];

export function Testimonials() {
  return (
    <section className="container py-24">
      <h2 className="mb-12 text-center text-3xl font-bold">What Our Users Say</h2>
      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {testimonials.map((testimonial) => (
          <Card key={testimonial.name}>
            <CardHeader>
              <div className="flex items-center gap-4">
                <Avatar>
                  <AvatarFallback>{testimonial.avatar}</AvatarFallback>
                </Avatar>
                <div>
                  <h3 className="font-semibold">{testimonial.name}</h3>
                  <p className="text-sm text-muted-foreground">{testimonial.title}</p>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">{testimonial.content}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}