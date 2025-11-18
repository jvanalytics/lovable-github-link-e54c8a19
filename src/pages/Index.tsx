import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-secondary/20">
      <div className="container mx-auto px-4 pt-32 pb-20">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full text-primary text-sm font-medium mb-4">
            <Sparkles className="w-4 h-4" />
            <span>Your Personal Style Journey Starts Here</span>
          </div>

          <h1 className="text-5xl md:text-7xl font-bold text-foreground leading-tight">
            Discover Your Perfect Style
          </h1>

          <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto">
            Find confidence in your wardrobe. Get personalized outfit recommendations that match your unique style and make you feel amazing.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-8">
            <Link to="/quiz">
              <Button size="lg" className="text-lg px-8 py-6 group">
                Take Style Quiz
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
            <Link to="/looks">
              <Button size="lg" variant="outline" className="text-lg px-8 py-6">
                Browse Looks
              </Button>
            </Link>
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-20 max-w-6xl mx-auto">
          {[
            "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=400",
            "https://images.unsplash.com/photo-1509631179647-0177331693ae?w=400",
            "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?w=400",
            "https://images.unsplash.com/photo-1483985988355-763728e1935b?w=400",
          ].map((img, i) => (
            <div
              key={i}
              className="aspect-[3/4] rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow"
            >
              <img
                src={img}
                alt="Style inspiration"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Index;
