import { Link } from "react-router-dom";
import { Heart, ShoppingBag, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useApp } from "@/contexts/AppContext";

export function Navigation() {
  const { cart, savedLooks } = useApp();

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2">
          <Sparkles className="w-6 h-6 text-primary" />
          <span className="text-xl font-semibold text-foreground">StyleGuide</span>
        </Link>

        <div className="flex items-center gap-6">
          <Link to="/looks">
            <Button variant="ghost" size="sm">
              Looks
            </Button>
          </Link>
          <Link to="/quiz">
            <Button variant="ghost" size="sm">
              Style Quiz
            </Button>
          </Link>
          <Link to="/saved" className="relative">
            <Button variant="ghost" size="icon">
              <Heart className="w-5 h-5" />
              {savedLooks.length > 0 && (
                <span className="absolute -top-1 -right-1 bg-primary text-primary-foreground text-xs w-5 h-5 rounded-full flex items-center justify-center">
                  {savedLooks.length}
                </span>
              )}
            </Button>
          </Link>
          <Link to="/cart" className="relative">
            <Button variant="ghost" size="icon">
              <ShoppingBag className="w-5 h-5" />
              {cart.length > 0 && (
                <span className="absolute -top-1 -right-1 bg-primary text-primary-foreground text-xs w-5 h-5 rounded-full flex items-center justify-center">
                  {cart.length}
                </span>
              )}
            </Button>
          </Link>
        </div>
      </div>
    </nav>
  );
}
