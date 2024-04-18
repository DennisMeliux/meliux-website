import { useState } from "react";

const Faq = ({
  questions,
}: {
  questions: { question: string; answer: string }[];
}) => {
  const [isQuestionOpen, setIsQuestionOpen] = useState<
    { question: string; answer: string } | undefined
  >(undefined);

  const handleQuestionClick = (question: {
    question: string;
    answer: string;
  }) => {
    if (isQuestionOpen?.question === question.question) {
      setIsQuestionOpen(undefined);
    } else {
      setIsQuestionOpen(question);
    }
  };

  return (
    <div className="px-5">
      <div className="flex flex-col items-center w-full gap-6">
        <h2 className="maxw-[702px] text-center text-white text-5xl font-normal font-['Sora'] leading-[60px]">
          Frequently Asked Questions
        </h2>
        <p className="max-w-[822px] text-center text-white text-base font-light font-['Sora'] leading-normal">
          Find answers to common questions about cryptocurrency banking and
          trading on our app.
        </p>
      </div>

      <div className="py-[88px] flex flex-col">
        {questions.map((question) => (
          <button
            onClick={() => handleQuestionClick(question)}
            key={question.question}
          >
            <div className="border-b border-white border-opacity-20 py-[32px] flex justify-between gap-3">
              <div className="flex flex-col gap-6">
                <h3 className="w-full text-white text-2xl font-normal font-['Sora'] leading-tight text-start">
                  {question.question}
                </h3>
                {isQuestionOpen?.question === question.question && (
                  <p className="w-full text-white text-base font-light font-['Sora'] leading-normal text-start">
                    {question.answer}
                  </p>
                )}
              </div>

              {isQuestionOpen?.question !== question.question ? (
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M12 5V19M5 12H19"
                    stroke="white"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              ) : (
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M4 12C4 11.4477 4.44772 11 5 11H19C19.5523 11 20 11.4477 20 12C20 12.5523 19.5523 13 19 13H5C4.44772 13 4 12.5523 4 12Z"
                    fill="white"
                  />
                </svg>
              )}
            </div>
          </button>
        ))}
      </div>
    </div>
  );
};

export default Faq;
