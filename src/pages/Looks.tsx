import { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Heart, ShoppingBag } from "lucide-react";
import { sampleLooks } from "@/data/sampleData";
import { useApp } from "@/contexts/AppContext";
import { useToast } from "@/hooks/use-toast";

const Looks = () => {
  const [searchParams] = useSearchParams();
  const styleFilter = searchParams.get("style");
  const { addToCart, toggleSavedLook, isSaved } = useApp();
  const { toast } = useToast();
  const [selectedLooks, setSelectedLooks] = useState(sampleLooks);

  useEffect(() => {
    if (styleFilter) {
      setSelectedLooks(sampleLooks.filter((look) => look.style === styleFilter));
    } else {
      setSelectedLooks(sampleLooks);
    }
  }, [styleFilter]);

  const handleSave = (look: typeof sampleLooks[0]) => {
    toggleSavedLook(look);
    toast({
      title: isSaved(look.id) ? "Removed from favorites" : "Saved to favorites",
      description: isSaved(look.id) ? "" : "View your saved looks anytime",
    });
  };

  const handleAddAllToCart = (look: typeof sampleLooks[0]) => {
    look.products.forEach((product) => {
      addToCart({ ...product, quantity: 1 });
    });
    toast({
      title: "Added to cart",
      description: `${look.products.length} items from "${look.name}"`,
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-secondary/20 pt-24 pb-12">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-foreground mb-4">
              {styleFilter ? `${styleFilter.charAt(0).toUpperCase() + styleFilter.slice(1)} Looks` : "Curated Looks"}
            </h1>
            <p className="text-muted-foreground">
              {styleFilter
                ? "Perfect outfits that match your style"
                : "Browse complete outfits designed to make you feel confident"}
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {selectedLooks.map((look) => (
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
                    onClick={() => handleSave(look)}
                  >
                    <Heart
                      className={`w-5 h-5 ${isSaved(look.id) ? "fill-primary text-primary" : ""}`}
                    />
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
                    Add Complete Look - ${look.products.reduce((sum, p) => sum + p.price, 0)}
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

export default Looks;
