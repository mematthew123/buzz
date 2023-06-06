import React, { useEffect, useState } from "react";
import { strainData } from "../data/strainData";
import { Strain } from "@/interfaces/strains.interfaces";
import { client } from "@/sanity/lib/client";
import { Product } from "@/interfaces/products.interfaces";

const questions = [
  {
    question: "Today's agenda includes...",
    options: [
      "Floating the Clark Fork",
      "Staying in and ordering delivery",
      "Catching a movie at the Roxy Theater",
      "Sleeping through the farmers market again",
      "bruh...",
    ],
  },
  {
    question: " What is your favorite way to consume cannabis?",
    options: [
      "Smoking",
      "Vaping",
      "Edibles",
      "Topicals",
      "Tinctures",
      "Dabbing",
      "Complete and total immersion",
    ],
  },

  {
    question: "How experienced are you with cannabis?",
    options: [
      "I'm a total newbie",
      "I've tried it a few times",
      "I'm a regular user",
      "I'm a seasoned veteran",
      "bruh...",
    ],
  },
];

const Quiz: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([]); // To store product data
  const [answers, setAnswers] = useState<Array<string>>([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [result, setResult] = useState<Product | null>(null);

  // Fetch products from Sanity
  useEffect(() => {
    const fetchProducts = async () => {
      const products = await client.fetch(`
        *[_type == "product"]{
          _id,
          title,
          description,
          type,
          productType,
          thc,
          cbd,
          price,
          size,
          "imageUrl": images[0].asset->url,
        }
      `);
      setProducts(products);
    };

    fetchProducts();
  }, []);


  

  // show the results of the quiz
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const bestProduct = getBestProduct(answers);
    setResult(bestProduct); // Update this line
  };

  const getBestProduct = (answers: string[]): Product => {
    const experienceAnswer = answers[2];
  
    let bestProduct = products[0]; // Default to the first product
  
    // Update the algo to get the best product for the user based on their preferences
    if (experienceAnswer === "I'm a total newbie") {
      bestProduct = products.find((product) => Number(product.thc) <= 20) || bestProduct;
    } else if (experienceAnswer === "I've tried it a few times") {
      bestProduct = products.find((product) => Number(product.thc) > 20 && Number(product.thc) <= 25) || bestProduct;
    } else if (experienceAnswer === "I'm a regular user" || experienceAnswer === "I'm a seasoned veteran") {
      bestProduct = products.find((product) => Number(product.thc) > 25) || bestProduct;
    }
  
    return bestProduct;
  };
  

  const handleOptionChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    index: number
  ) => {
    const newAnswers = [...answers];
    newAnswers[index] = e.target.value;
    setAnswers(newAnswers);
  };

  const goToNextQuestion = () => {
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    }
  };

  const goToPreviousQuestion = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex(currentQuestionIndex - 1);
    }
  };

  const currentQuestion = questions[currentQuestionIndex];

  if (result) {
    return (
      <div className="bg-white text-gray-700 p-8 rounded-lg w-[sm:420px] lg:w-[580px]  mx-auto shadow-lg">
        <h1 className="text-2xl mb-6">Your Best Product</h1>
        <h2 className="text-xl mb-4">Name: {result.title}</h2>
        <img
          src={result.imageUrl}
          alt={result.title}
          className="w-full h-48 object-cover object-center rounded-t-lg"
        />
        <p>Type: {result.type}</p>
        <p>THC: {result.thc}%</p>
        <p>CBD: {result.cbd}%</p>
        <button
          className="bg-blue-300 text-gray-700 px-4 py-2 rounded mt-4"
          onClick={() => (window.location.href = "/menu")}
        >
          View All Products
        </button>
      </div>
    );
  }

  return (
    <div className="bg-white text-gray-700 p-8 rounded-lg w-[sm:420px] lg:w-[580px]  mx-auto shadow-lg">
      <h1 className="text-2xl mb-6">Quiz: Find the Best Product for You</h1>
      <form onSubmit={handleSubmit}>
        <div className="mb-6">
          <h2 className="text-xl mb-4">{currentQuestion.question}</h2>
          {currentQuestion.options.map((option) => (
            <div key={option} className="mb-3">
              <label className="inline-flex items-center">
                <input
                  type="radio"
                  name={`question-${currentQuestionIndex}`}
                  value={option}
                  checked={answers[currentQuestionIndex] === option}
                  onChange={(e) => handleOptionChange(e, currentQuestionIndex)}
                  className="mr-2"
                />
                <span>{option}</span>
              </label>
            </div>
          ))}
        </div>
        <div className="flex justify-between">
          {currentQuestionIndex < questions.length - 1 ? (
            <button
              type="button"
              onClick={goToNextQuestion}
              className="bg-gray-300 text-gray-700 px-4 py-2 rounded"
            >
              Next
            </button>
          ) : (
            <button
              type="submit"
              disabled={answers.length !== questions.length}
              className="bg-gray-300 text-gray-700 px-4 py-2 rounded"
            >
              Submit
            </button>
          )}
        </div>
      </form>
    </div>
  );
};

export default Quiz;
