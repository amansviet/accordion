import React, { useState } from "react";
import data from "./data";
import SingleQuestion from "./Question";
function App() {
  const [questions, setQuestions] = useState(data);
  return (
    <main>
      <div className="container">
        <h3>Questions and answers about</h3>
        <section className="info">
          {questions.map((someQuestion) => {
            return (
              <SingleQuestion
                key={someQuestion.id}
                {...someQuestion}
              ></SingleQuestion>
            );
          })}
        </section>
      </div>
    </main>
  );
}

export default App;
