
import React from "react";
import { Layout } from "@/components/layout/Layout";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Check, Zap, Brain, Bot, Shield, TrendingUp } from "lucide-react";
import { Link } from "react-router-dom";

const PricingTier = ({ 
  title, 
  price, 
  description, 
  features, 
  buttonText = "Get Started", 
  popular = false 
}: { 
  title: string; 
  price: string; 
  description: string; 
  features: string[]; 
  buttonText?: string;
  popular?: boolean;
}) => (
  <Card className={`overflow-hidden border ${popular ? 'border-primary/50 shadow-lg shadow-primary/10' : 'border-border/40'} transition-all duration-200 hover:shadow-md h-full flex flex-col`}>
    <CardHeader className="p-6">
      <CardTitle className="flex items-center gap-2">
        {title}
        {popular && <span className="text-xs bg-primary/20 text-primary px-2 py-1 rounded-full">Popular</span>}
      </CardTitle>
      <CardDescription>{description}</CardDescription>
      <div className="mt-4">
        <span className="text-3xl font-bold">{price}</span>
        {price !== "Custom" && <span className="text-muted-foreground">/month</span>}
      </div>
    </CardHeader>
    <CardContent className="p-6 pt-0 flex-1 flex flex-col">
      <ul className="space-y-2 mb-6 flex-1">
        {features.map((feature, index) => (
          <li key={index} className="flex items-start gap-2">
            <Check className="h-5 w-5 text-primary shrink-0 mt-0.5" />
            <span>{feature}</span>
          </li>
        ))}
      </ul>
      <Button className={`w-full ${popular ? '' : 'bg-secondary text-secondary-foreground hover:bg-secondary/80'}`}>
        {buttonText}
      </Button>
    </CardContent>
  </Card>
);

const FeatureCard = ({ icon: Icon, title, description }: { icon: any; title: string; description: string }) => (
  <Card className="overflow-hidden border border-border/40 transition-all duration-200 hover:shadow-md">
    <CardHeader className="p-6">
      <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
        <Icon className="h-6 w-6 text-primary" />
      </div>
      <CardTitle className="text-xl">{title}</CardTitle>
      <CardDescription className="text-base">{description}</CardDescription>
    </CardHeader>
  </Card>
);

const Index = () => {
  return (
    <Layout>
      <div className="space-y-20 py-10">
        {/* Hero Section */}
        <section className="text-center space-y-6">
          <div className="inline-block px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium mb-2">
            The Future of AI Agents
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold tracking-tight">
            Intelligent AI Agents for <span className="text-primary">Your Business</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Our AI agents automate complex tasks, provide insights, and enhance customer engagement, all while saving you time and resources.
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <Button size="lg" asChild>
              <Link to="/projects/create">Get Started</Link>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <Link to="/templates">Explore Solutions</Link>
            </Button>
          </div>
        </section>

        {/* Features Section */}
        <section className="space-y-10">
          <div className="text-center space-y-4 mb-8">
            <h2 className="text-3xl font-display font-semibold tracking-tight">
              Features Built for Business
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Our AI agents combine advanced intelligence with specialized capabilities to handle complex business tasks.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            <FeatureCard
              icon={Brain}
              title="Advanced Intelligence"
              description="Sophisticated algorithms that learn and adapt to your business needs and processes over time."
            />
            <FeatureCard
              icon={Bot}
              title="Custom Agents"
              description="Tailor AI agents to your specific industry requirements with customizable templates."
            />
            <FeatureCard
              icon={Shield}
              title="Secure & Reliable"
              description="Enterprise-grade security with 99.9% uptime and data encryption at rest and in transit."
            />
            <FeatureCard
              icon={Zap}
              title="Automation"
              description="Automate repetitive tasks and workflows to boost productivity and reduce human error."
            />
            <FeatureCard
              icon={TrendingUp}
              title="Predictive Analytics"
              description="Gain insights from your data with AI-powered analysis and forecasting capabilities."
            />
            <FeatureCard
              icon={Bot}
              title="24/7 Availability"
              description="AI agents work around the clock, ensuring continuous service for global operations."
            />
          </div>
        </section>

        {/* Pricing Section */}
        <section className="space-y-10">
          <div className="text-center space-y-4 mb-8">
            <h2 className="text-3xl font-display font-semibold tracking-tight">
              Simple, Transparent Pricing
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Choose the perfect plan for your business needs, with no hidden fees or complicated tiers.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            <PricingTier
              title="Starter"
              price="$99"
              description="Perfect for small businesses just getting started with AI"
              features={[
                "2 AI Agents",
                "5,000 interactions per month",
                "Standard response time",
                "Basic analytics",
                "Email support",
                "Core templates"
              ]}
            />
            <PricingTier
              title="Professional"
              price="$299"
              description="Ideal for growing businesses with more complex needs"
              features={[
                "5 AI Agents",
                "25,000 interactions per month",
                "Fast response time",
                "Advanced analytics",
                "Priority support",
                "All templates",
                "Custom integrations"
              ]}
              popular={true}
            />
            <PricingTier
              title="Enterprise"
              price="Custom"
              description="For organizations requiring advanced capabilities and support"
              features={[
                "Unlimited AI Agents",
                "Unlimited interactions",
                "Fastest response time",
                "Full analytics suite",
                "24/7 dedicated support",
                "All templates + custom development",
                "Advanced security features",
                "Dedicated account manager"
              ]}
              buttonText="Contact Sales"
            />
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-gradient-to-br from-primary/10 to-accent/20 p-10 rounded-2xl text-center space-y-6">
          <h2 className="text-3xl font-display font-semibold tracking-tight">
            Ready to Transform Your Business?
          </h2>
          <p className="text-lg max-w-2xl mx-auto">
            Join thousands of businesses leveraging our AI agents to increase productivity, reduce costs, and deliver exceptional customer experiences.
          </p>
          <Button size="lg" className="mt-4">Get Started Today</Button>
        </section>
      </div>
    </Layout>
  );
};

export default Index;
