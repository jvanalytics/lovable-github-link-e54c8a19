import { useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { CheckCircle2, ShoppingBag } from "lucide-react";
import { useApp } from "@/contexts/AppContext";
import { Order } from "@/types";

const OrderComplete = () => {
    const { clearCart } = useApp();
    const navigate = useNavigate();
    const location = useLocation();
    const order = location.state as Order | undefined;

    useEffect(() => {
        if (!order) {
            navigate("/");
            return;
        }
        // Clear cart after order is confirmed
        clearCart();
    }, [order, navigate, clearCart]);

    if (!order) {
        return null;
    }

    return (
        <div className="min-h-screen bg-gradient-to-b from-background to-secondary/20 pt-24 pb-12">
            <div className="container mx-auto px-4">
                <div className="max-w-4xl mx-auto">
                    <div className="text-center mb-8">
                        <div className="flex justify-center mb-4">
                            <div className="rounded-full bg-primary/10 p-4">
                                <CheckCircle2 className="w-16 h-16 text-primary" />
                            </div>
                        </div>
                        <h1 className="text-4xl font-bold text-foreground mb-2">Order Confirmed!</h1>
                        <p className="text-muted-foreground text-lg">
                            Thank you for your order. We've received your order and will process it shortly.
                        </p>
                    </div>

                    <Card className="p-6 mb-6">
                        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-6">
                            <div>
                                <h2 className="text-xl font-semibold mb-1">Order Number</h2>
                                <p className="text-2xl font-bold text-primary">{order.orderId}</p>
                            </div>
                            <div className="text-right">
                                <p className="text-sm text-muted-foreground">Order Date</p>
                                <p className="font-medium">
                                    {new Date(order.orderDate).toLocaleDateString("en-US", {
                                        year: "numeric",
                                        month: "long",
                                        day: "numeric",
                                    })}
                                </p>
                            </div>
                        </div>

                        <div className="border-t pt-6 mb-6">
                            <h3 className="text-lg font-semibold mb-4">Shipping Information</h3>
                            <div className="space-y-2 text-muted-foreground">
                                <p className="font-medium text-foreground">{order.customerInfo.name}</p>
                                <p>{order.customerInfo.email}</p>
                                <p>{order.customerInfo.address}</p>
                            </div>
                        </div>

                        <div className="border-t pt-6">
                            <h3 className="text-lg font-semibold mb-4">Order Items</h3>
                            <div className="space-y-4 mb-6">
                                {order.items.map((item) => (
                                    <div key={item.id} className="flex gap-4">
                                        <img
                                            src={item.image}
                                            alt={item.name}
                                            className="w-20 h-20 object-cover rounded-md"
                                        />
                                        <div className="flex-1">
                                            <h4 className="font-medium mb-1">{item.name}</h4>
                                            <p className="text-sm text-muted-foreground">{item.category}</p>
                                            <p className="text-sm text-muted-foreground">
                                                Quantity: {item.quantity} × ${item.price}
                                            </p>
                                        </div>
                                        <span className="font-medium">${(item.price * item.quantity).toFixed(2)}</span>
                                    </div>
                                ))}
                            </div>

                            <div className="border-t pt-4 space-y-3">
                                <div className="flex justify-between">
                                    <span className="text-muted-foreground">Subtotal</span>
                                    <span className="font-medium">${order.total.toFixed(2)}</span>
                                </div>
                                <div className="flex justify-between">
                                    <span className="text-muted-foreground">Shipping</span>
                                    <span className="font-medium">FREE</span>
                                </div>
                                <div className="border-t pt-3 flex justify-between text-lg font-semibold">
                                    <span>Total</span>
                                    <span>${order.total.toFixed(2)}</span>
                                </div>
                            </div>
                        </div>
                    </Card>

                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Button size="lg" onClick={() => navigate("/")} className="group">
                            <ShoppingBag className="mr-2 w-5 h-5" />
                            Continue Shopping
                        </Button>
                        <Button size="lg" variant="outline" onClick={() => navigate("/looks")}>
                            Browse More Looks
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default OrderComplete;

