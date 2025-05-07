import { useState } from "react";
import "./flashcard.css";
const question = [
  { id: 1, question: "DBMS", answer: "DataBase Management System" },
  { id: 2, question: "SQL", answer: "Structured Query Language" },
  { id: 3, question: "HDFS", answer: "Hadoop Distributed File System" },
  { id: 4, question: "ETL", answer: "Extract, Transform, Load" },
  {
    id: 5,
    question: "ML",
    answer: "Machine Learning",
  },
  {
    id: 6,
    question: "NLP",
    answer: "Natural Learning Processing",
  },
  {
    id: 7,
    question: "DP",
    answer: "Deep Learning",
  },
  {
    id: 8,
    question: "NN",
    answer: "Neural Network",
  },
];
export default function FlashCard() {
  const [selectedId, setSelectedId] = useState(null);
  function handleClick(id) {
    setSelectedId(id !== selectedId ? id : null);
  }
  return (
    <div>
      <h2
        style={{
          textAlign: "center",
          marginTop: "30px",
          fontFamily: "cursive",
        }}
      >
        Expansion
      </h2>
      <div className="card">
        {question.map((question) => (
          <div
            key={question.id}
            onClick={() => handleClick(question.id)}
            className={question.id === selectedId ? "selected" : ""}
          >
            <p>
              {question.id === selectedId ? question.answer : question.question}
            </p>
            {/* <p>{ques.id === ques.selected ? ques.answer : ques.question}</p> */}
          </div>
        ))}
      </div>
      <Footer />
    </div>
  );
}
function Footer() {
  return (
    <footer>
      <p className="para">
        Build with{" "}
        <span>
          <img src="./logo192.png" alt="react icon" height="20px" />
        </span>{" "}
        React JS
      </p>
    </footer>
  );
}
