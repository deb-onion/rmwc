import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { dataLayerConfig } from '@/lib/analytics/config';

interface QuizQuestion {
  id: string;
  question: string;
  options: {
    id: string;
    text: string;
    image: string;
    styles: string[];
  }[];
}

const quizQuestions: QuizQuestion[] = [
  {
    id: 'q1',
    question: 'Which landscape speaks to your soul?',
    options: [
      {
        id: 'q1a',
        text: 'Snow-capped peaks at sunset',
        image: '/images/quiz/landscape-peaks.jpg',
        styles: ['romantic', 'dramatic', 'luxury']
      },
      {
        id: 'q1b',
        text: 'Serene alpine lake',
        image: '/images/quiz/landscape-lake.jpg',
        styles: ['intimate', 'natural', 'elegant']
      },
      {
        id: 'q1c',
        text: 'Forest meadow in bloom',
        image: '/images/quiz/landscape-meadow.jpg',
        styles: ['bohemian', 'rustic', 'whimsical']
      },
      {
        id: 'q1d',
        text: 'Modern mountain lodge',
        image: '/images/quiz/landscape-lodge.jpg',
        styles: ['modern', 'minimalist', 'sophisticated']
      }
    ]
  },
  // Add more questions following the same pattern
];

interface StyleResult {
  style: string;
  score: number;
}

export const WeddingStyleQuiz: React.FC = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<string[]>([]);
  const [result, setResult] = useState<string | null>(null);
  const [startTime] = useState(Date.now());

  const handleAnswer = (optionId: string) => {
    const newAnswers = [...answers, optionId];
    setAnswers(newAnswers);

    // Track answer in analytics
    window.dataLayer?.push(dataLayerConfig.featureInteraction(
      'wedding_quiz',
      'answer_selected',
      {
        questionId: quizQuestions[currentQuestion].id,
        answerId: optionId,
        questionNumber: currentQuestion + 1,
        timeToAnswer: Date.now() - startTime
      }
    ));

    if (currentQuestion < quizQuestions.length - 1) {
      setCurrentQuestion(prev => prev + 1);
    } else {
      calculateResult(newAnswers);
    }
  };

  const calculateResult = (finalAnswers: string[]) => {
    const styleScores: Record<string, number> = {};
    
    finalAnswers.forEach((answerId, index) => {
      const question = quizQuestions[index];
      const selectedOption = question.options.find(opt => opt.id === answerId);
      
      if (selectedOption) {
        selectedOption.styles.forEach(style => {
          styleScores[style] = (styleScores[style] || 0) + 1;
        });
      }
    });

    const sortedStyles = Object.entries(styleScores)
      .map(([style, score]) => ({ style, score }))
      .sort((a, b) => b.score - a.score);

    setResult(sortedStyles[0].style);

    // Track quiz completion
    window.dataLayer?.push(dataLayerConfig.featureInteraction(
      'wedding_quiz',
      'quiz_complete',
      {
        result: sortedStyles[0].style,
        timeToComplete: Date.now() - startTime,
        answers: finalAnswers
      }
    ));
  };

  return (
    <div className="min-h-screen bg-neutral-50 py-16 px-4">
      <div className="max-w-4xl mx-auto">
        <AnimatePresence mode="wait">
          {result ? (
            <motion.div
              key="result"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="text-center"
            >
              <h2 className="text-4xl font-playfair mb-6">Your Wedding Style Is:</h2>
              <motion.div
                className="text-5xl font-playfair text-primary-600 mb-8"
                initial={{ scale: 0.8 }}
                animate={{ scale: 1 }}
                transition={{ type: "spring", stiffness: 200, damping: 10 }}
              >
                {result.charAt(0).toUpperCase() + result.slice(1)}
              </motion.div>
              <motion.button
                onClick={() => window.location.href = '/vision-board'}
                className="px-8 py-4 bg-primary-500 text-white rounded-full hover:bg-primary-600 transition-colors"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Create Your Vision Board
              </motion.button>
            </motion.div>
          ) : (
            <motion.div
              key={`question-${currentQuestion}`}
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
            >
              <h2 className="text-3xl font-playfair mb-8 text-center">
                {quizQuestions[currentQuestion].question}
              </h2>
              <div className="grid grid-cols-2 gap-6">
                {quizQuestions[currentQuestion].options.map((option) => (
                  <motion.button
                    key={option.id}
                    onClick={() => handleAnswer(option.id)}
                    className="relative group"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <div className="relative overflow-hidden rounded-lg aspect-[4/3]">
                      <img
                        src={option.image}
                        alt={option.text}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-black bg-opacity-40 transition-opacity duration-300 group-hover:bg-opacity-20" />
                      <div className="absolute inset-0 flex items-center justify-center">
                        <span className="text-white text-xl font-medium text-center px-4">
                          {option.text}
                        </span>
                      </div>
                    </div>
                  </motion.button>
                ))}
              </div>
              <div className="mt-8 text-center text-gray-500">
                Question {currentQuestion + 1} of {quizQuestions.length}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}; 