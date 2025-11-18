import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { styleQuizQuestions } from "@/data/sampleData";
import { ArrowRight, ArrowLeft } from "lucide-react";

const StyleQuiz = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<string[]>([]);
  const navigate = useNavigate();

  const question = styleQuizQuestions[currentQuestion];
  const isLastQuestion = currentQuestion === styleQuizQuestions.length - 1;

  const handleAnswer = (style: string) => {
    const newAnswers = [...answers, style];
    setAnswers(newAnswers);

    if (isLastQuestion) {
      // Calculate dominant style
      const styleCounts = newAnswers.reduce((acc, s) => {
        acc[s] = (acc[s] || 0) + 1;
        return acc;
      }, {} as Record<string, number>);

      const dominantStyle = Object.entries(styleCounts).sort((a, b) => b[1] - a[1])[0][0];
      navigate(`/looks?style=${dominantStyle}`);
    } else {
      setCurrentQuestion(currentQuestion + 1);
    }
  };

  const handleBack = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1);
      setAnswers(answers.slice(0, -1));
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-secondary/20 pt-24 pb-12">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-8">
            <h1 className="text-4xl font-bold text-foreground mb-4">Discover Your Style</h1>
            <p className="text-muted-foreground">
              Question {currentQuestion + 1} of {styleQuizQuestions.length}
            </p>
            <div className="w-full bg-muted h-2 rounded-full mt-4 max-w-md mx-auto">
              <div
                className="bg-primary h-full rounded-full transition-all duration-300"
                style={{
                  width: `${((currentQuestion + 1) / styleQuizQuestions.length) * 100}%`,
                }}
              />
            </div>
          </div>

          <h2 className="text-2xl font-semibold text-center mb-8">{question.question}</h2>

          <div className="grid grid-cols-2 gap-6 mb-8">
            {question.answers.map((answer, index) => (
              <Card
                key={index}
                className="overflow-hidden cursor-pointer hover:shadow-lg transition-all hover:scale-[1.02] group"
                onClick={() => handleAnswer(answer.style)}
              >
                <div className="aspect-[3/4] relative">
                  <img
                    src={answer.image}
                    alt={answer.style}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-6">
                    <span className="text-white font-medium capitalize">{answer.style}</span>
                  </div>
                </div>
              </Card>
            ))}
          </div>

          {currentQuestion > 0 && (
            <div className="flex justify-center">
              <Button variant="outline" onClick={handleBack}>
                <ArrowLeft className="mr-2 w-4 h-4" />
                Previous Question
              </Button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default StyleQuiz;
