import { Look, StyleQuizAnswer } from "@/types";

export const styleQuizQuestions: { question: string; answers: StyleQuizAnswer[] }[] = [
  {
    question: "Which outfit speaks to you most?",
    answers: [
      { style: "minimalist", image: "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=400" },
      { style: "bohemian", image: "https://images.unsplash.com/photo-1509631179647-0177331693ae?w=400" },
      { style: "classic", image: "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?w=400" },
      { style: "edgy", image: "https://images.unsplash.com/photo-1483985988355-763728e1935b?w=400" },
    ],
  },
  {
    question: "What's your ideal weekend look?",
    answers: [
      { style: "minimalist", image: "https://images.unsplash.com/photo-1483181957632-8bda974cbc91?w=400" },
      { style: "bohemian", image: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=400" },
      { style: "classic", image: "https://images.unsplash.com/photo-1445205170230-053b83016050?w=400" },
      { style: "edgy", image: "https://images.unsplash.com/photo-1544441893-675973e31985?w=400" },
    ],
  },
  {
    question: "Which accessories catch your eye?",
    answers: [
      { style: "minimalist", image: "https://images.unsplash.com/photo-1492707892479-7bc8d5a4ee93?w=400" },
      { style: "bohemian", image: "https://images.unsplash.com/photo-1506630448388-4e683c67ddb0?w=400" },
      { style: "classic", image: "https://images.unsplash.com/photo-1617038260897-41a1f14a8ca0?w=400" },
      { style: "edgy", image: "https://images.unsplash.com/photo-1611652022419-a9419f74343a?w=400" },
    ],
  },
];

export const sampleLooks: Look[] = [
  {
    id: "1",
    name: "Effortless Minimalist",
    style: "minimalist",
    image: "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=800",
    description: "Clean lines and neutral tones for a sophisticated everyday look",
    products: [
      {
        id: "p1",
        name: "White Cotton Tee",
        price: 45,
        image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=400",
        category: "tops",
        store: "Sample Store",
        storeUrl: "#",
      },
      {
        id: "p2",
        name: "High-Waist Beige Trousers",
        price: 89,
        image: "https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?w=400",
        category: "bottoms",
        store: "Sample Store",
        storeUrl: "#",
      },
    ],
  },
  {
    id: "2",
    name: "Boho Dream",
    style: "bohemian",
    image: "https://images.unsplash.com/photo-1509631179647-0177331693ae?w=800",
    description: "Free-spirited layers with earthy tones and flowing silhouettes",
    products: [
      {
        id: "p3",
        name: "Floral Maxi Dress",
        price: 125,
        image: "https://images.unsplash.com/photo-1595777457583-95e059d581b8?w=400",
        category: "dresses",
        store: "Sample Store",
        storeUrl: "#",
      },
      {
        id: "p4",
        name: "Leather Sandals",
        price: 78,
        image: "https://images.unsplash.com/photo-1603487742131-4160ec999306?w=400",
        category: "shoes",
        store: "Sample Store",
        storeUrl: "#",
      },
    ],
  },
  {
    id: "3",
    name: "Timeless Classic",
    style: "classic",
    image: "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?w=800",
    description: "Elegant and polished pieces that never go out of style",
    products: [
      {
        id: "p5",
        name: "Tailored Blazer",
        price: 195,
        image: "https://images.unsplash.com/photo-1591047139829-d91aecb6caea?w=400",
        category: "outerwear",
        store: "Sample Store",
        storeUrl: "#",
      },
      {
        id: "p6",
        name: "Silk Blouse",
        price: 110,
        image: "https://images.unsplash.com/photo-1618932260643-eee4a2f652a6?w=400",
        category: "tops",
        store: "Sample Store",
        storeUrl: "#",
      },
    ],
  },
  {
    id: "4",
    name: "Urban Edge",
    style: "edgy",
    image: "https://images.unsplash.com/photo-1483985988355-763728e1935b?w=800",
    description: "Bold statements with modern edge and confident attitude",
    products: [
      {
        id: "p7",
        name: "Leather Jacket",
        price: 245,
        image: "https://images.unsplash.com/photo-1551028719-00167b16eac5?w=400",
        category: "outerwear",
        store: "Sample Store",
        storeUrl: "#",
      },
      {
        id: "p8",
        name: "Black Skinny Jeans",
        price: 95,
        image: "https://images.unsplash.com/photo-1541099649105-f69ad21f3246?w=400",
        category: "bottoms",
        store: "Sample Store",
        storeUrl: "#",
      },
    ],
  },
];
