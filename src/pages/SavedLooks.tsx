import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Heart, ShoppingBag } from "lucide-react";
import { useApp } from "@/contexts/AppContext";
import { useToast } from "@/hooks/use-toast";
import { Link } from "react-router-dom";

const SavedLooks = () => {
  const { savedLooks, toggleSavedLook, addToCart } = useApp();
  const { toast } = useToast();

  const handleRemove = (lookId: string) => {
    const look = savedLooks.find((l) => l.id === lookId);
    if (look) {
      toggleSavedLook(look);
      toast({
        title: "Removed from favorites",
      });
    }
  };

  const handleAddAllToCart = (look: typeof savedLooks[0]) => {
    look.products.forEach((product) => {
      addToCart({ ...product, quantity: 1 });
    });
    toast({
      title: "Added to cart",
      description: `${look.products.length} items from "${look.name}"`,
    });
  };

  if (savedLooks.length === 0) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-background to-secondary/20 pt-24 pb-12">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center">
            <Heart className="w-16 h-16 text-muted-foreground mx-auto mb-4" />
            <h1 className="text-3xl font-bold text-foreground mb-4">No Saved Looks Yet</h1>
            <p className="text-muted-foreground mb-8">
              Start saving your favorite looks to view them here anytime
            </p>
            <Link to="/looks">
              <Button>Browse Looks</Button>
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-secondary/20 pt-24 pb-12">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-foreground mb-4">Your Saved Looks</h1>
            <p className="text-muted-foreground">
              {savedLooks.length} {savedLooks.length === 1 ? "look" : "looks"} saved
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {savedLooks.map((look) => (
              <Card key={look.id} className="overflow-hidden hover:shadow-xl transition-shadow">
                <div className="aspect-[4/5] relative group">
                  <img
                    src={look.image}
                    alt={look.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <Button
                    variant="secondary"
                    size="icon"
                    className="absolute top-4 right-4 rounded-full shadow-lg"
                    onClick={() => handleRemove(look.id)}
                  >
                    <Heart className="w-5 h-5 fill-primary text-primary" />
                  </Button>
                </div>
                <CardContent className="p-6">
                  <h3 className="text-2xl font-semibold mb-2">{look.name}</h3>
                  <p className="text-muted-foreground mb-4">{look.description}</p>
                  <div className="space-y-2">
                    <p className="font-medium text-sm text-muted-foreground">Includes:</p>
                    {look.products.map((product) => (
                      <div key={product.id} className="flex justify-between items-center text-sm">
                        <span>{product.name}</span>
                        <span className="font-medium">${product.price}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
                <CardFooter className="p-6 pt-0">
                  <Button className="w-full" onClick={() => handleAddAllToCart(look)}>
                    <ShoppingBag className="mr-2 w-4 h-4" />
                    Add to Cart - ${look.products.reduce((sum, p) => sum + p.price, 0)}
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SavedLooks;
