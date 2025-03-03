
import React from "react";
import { Layout } from "@/components/layout/Layout";
import { 
  Card, 
  CardContent, 
  CardDescription, 
  CardHeader, 
  CardTitle 
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const Index = () => {
  return (
    <Layout>
      <div className="space-y-8 py-6">
        <div className="space-y-2">
          <h2 className="text-3xl font-display font-semibold tracking-tight transition-colors">
            Welcome to Essence
          </h2>
          <p className="text-muted-foreground">
            A premium, minimal interface inspired by modern design principles.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          <Card className="overflow-hidden border border-border/40 transition-all duration-200 hover:shadow-md">
            <CardHeader className="p-6">
              <CardTitle>Elegant Design</CardTitle>
              <CardDescription>
                Minimalist aesthetics with attention to every detail
              </CardDescription>
            </CardHeader>
            <CardContent className="p-6 pt-0">
              <p className="text-sm text-muted-foreground">
                Our design philosophy centers around simplicity and clarity, 
                creating interfaces that are both beautiful and functional.
              </p>
              <Button variant="ghost" size="sm" className="mt-4 gap-1">
                Learn more <ArrowRight className="h-4 w-4 ml-1" />
              </Button>
            </CardContent>
          </Card>

          <Card className="overflow-hidden border border-border/40 transition-all duration-200 hover:shadow-md">
            <CardHeader className="p-6">
              <CardTitle>Premium Experience</CardTitle>
              <CardDescription>
                Seamless interactions with smooth animations
              </CardDescription>
            </CardHeader>
            <CardContent className="p-6 pt-0">
              <p className="text-sm text-muted-foreground">
                Every interaction is crafted to feel responsive and natural, 
                enhancing the user experience at every touchpoint.
              </p>
              <Button variant="ghost" size="sm" className="mt-4 gap-1">
                Explore features <ArrowRight className="h-4 w-4 ml-1" />
              </Button>
            </CardContent>
          </Card>
        </div>

        <Card className="overflow-hidden border border-border/40">
          <div className="md:grid md:grid-cols-2">
            <div className="p-6 flex flex-col justify-center">
              <h3 className="text-xl font-semibold mb-2">Crafted with Care</h3>
              <p className="text-sm text-muted-foreground mb-4">
                Every aspect of this interface is meticulously designed to provide 
                an exceptional user experience, focusing on both aesthetics and functionality.
              </p>
              <Button className="w-fit">Get Started</Button>
            </div>
            <div className="bg-gradient-to-br from-primary/10 to-accent h-64 md:h-auto" />
          </div>
        </Card>
      </div>
    </Layout>
  );
};

export default Index;
