import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form";
import { useApp } from "@/contexts/AppContext";
import { Order } from "@/types";

const checkoutSchema = z.object({
    name: z.string().min(2, "Name must be at least 2 characters"),
    email: z.string().email("Invalid email address"),
    address: z.string().min(5, "Address must be at least 5 characters"),
});

type CheckoutFormValues = z.infer<typeof checkoutSchema>;

const Checkout = () => {
    const { cart } = useApp();
    const navigate = useNavigate();

    const form = useForm<CheckoutFormValues>({
        resolver: zodResolver(checkoutSchema),
        defaultValues: {
            name: "",
            email: "",
            address: "",
        },
    });

    useEffect(() => {
        if (cart.length === 0) {
            navigate("/cart");
        }
    }, [cart, navigate]);

    if (cart.length === 0) {
        return null;
    }

    const subtotal = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

    const onSubmit = (values: CheckoutFormValues) => {
        const orderId = `ORD-${Date.now()}-${Math.random().toString(36).substr(2, 9).toUpperCase()}`;

        const order: Order = {
            orderId,
            items: [...cart],
            total: subtotal,
            customerInfo: {
                name: values.name,
                email: values.email,
                address: values.address,
            },
            orderDate: new Date(),
        };

        navigate("/order-complete", { state: order });
    };

    return (
        <div className="min-h-screen bg-gradient-to-b from-background to-secondary/20 pt-24 pb-12">
            <div className="container mx-auto px-4">
                <div className="max-w-6xl mx-auto">
                    <h1 className="text-4xl font-bold text-foreground mb-8">Checkout</h1>

                    <div className="grid md:grid-cols-3 gap-8">
                        <div className="md:col-span-2">
                            <Card className="p-6">
                                <h2 className="text-2xl font-semibold mb-6">Shipping Information</h2>
                                <Form {...form}>
                                    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                                        <FormField
                                            control={form.control}
                                            name="name"
                                            render={({ field }) => (
                                                <FormItem>
                                                    <FormLabel>Full Name</FormLabel>
                                                    <FormControl>
                                                        <Input placeholder="John Doe" {...field} />
                                                    </FormControl>
                                                    <FormMessage />
                                                </FormItem>
                                            )}
                                        />

                                        <FormField
                                            control={form.control}
                                            name="email"
                                            render={({ field }) => (
                                                <FormItem>
                                                    <FormLabel>Email</FormLabel>
                                                    <FormControl>
                                                        <Input type="email" placeholder="john@example.com" {...field} />
                                                    </FormControl>
                                                    <FormMessage />
                                                </FormItem>
                                            )}
                                        />

                                        <FormField
                                            control={form.control}
                                            name="address"
                                            render={({ field }) => (
                                                <FormItem>
                                                    <FormLabel>Address</FormLabel>
                                                    <FormControl>
                                                        <Input placeholder="123 Main St, City, State ZIP" {...field} />
                                                    </FormControl>
                                                    <FormMessage />
                                                </FormItem>
                                            )}
                                        />

                                        <div className="pt-4">
                                            <Button type="submit" className="w-full" size="lg">
                                                Place Order
                                            </Button>
                                            <p className="text-xs text-muted-foreground text-center mt-4">
                                                This is a demo. No actual purchases will be made.
                                            </p>
                                        </div>
                                    </form>
                                </Form>
                            </Card>
                        </div>

                        <div>
                            <Card className="p-6 sticky top-24">
                                <h2 className="text-xl font-semibold mb-4">Order Summary</h2>
                                <div className="space-y-4 mb-6">
                                    {cart.map((item) => (
                                        <div key={item.id} className="flex gap-3">
                                            <img
                                                src={item.image}
                                                alt={item.name}
                                                className="w-16 h-16 object-cover rounded-md"
                                            />
                                            <div className="flex-1">
                                                <h3 className="font-medium text-sm">{item.name}</h3>
                                                <p className="text-xs text-muted-foreground">
                                                    Qty: {item.quantity} × ${item.price}
                                                </p>
                                            </div>
                                            <span className="font-medium">${(item.price * item.quantity).toFixed(2)}</span>
                                        </div>
                                    ))}
                                </div>
                                <div className="space-y-3 border-t pt-4">
                                    <div className="flex justify-between">
                                        <span className="text-muted-foreground">Subtotal</span>
                                        <span className="font-medium">${subtotal.toFixed(2)}</span>
                                    </div>
                                    <div className="flex justify-between">
                                        <span className="text-muted-foreground">Shipping</span>
                                        <span className="font-medium">FREE</span>
                                    </div>
                                    <div className="border-t pt-3 flex justify-between text-lg font-semibold">
                                        <span>Total</span>
                                        <span>${subtotal.toFixed(2)}</span>
                                    </div>
                                </div>
                            </Card>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Checkout;

