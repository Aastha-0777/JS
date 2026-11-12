setTimeout(() => {
  // Using an IIFE so the exam engine initializes immediately upon script load without polluting global scope
  (function initQuizApp() {
    console.log("IIFE Called...");
    const PASSING_PERCENTAGE = 70;
    const examState = {
      candidateName: "Anonymous Candidate",
      score: 0,
      totalAnswered: 0,
      currentStreak: 0,
      history: [],
    };

    const calculatePercentage = (correct, total) =>
      !total || total === 0 ? 0 : Number(((correct / total) * 100).toFixed(2));

    const evaluateAnswer = (userAnswer, validatorCallback) =>
      userAnswer == null || userAnswer.trim() === ""
        ? false
        : validatorCallback(userAnswer.trim().toLowerCase());

    function auditCountdown(seconds) {
      if (seconds <= 0) {
        console.log("Audit complete! Integrity verified.");
        return;
      }

      console.log(`Auditing submission packages in ${seconds}...`);
      auditCountdown(seconds - 1);
    }

    const questionBank = [
      {
        id: 1,
        topic: "JavaScript Basics",
        question:
          "Which keyword declares a block-scoped variable that cannot be reassigned?",
        validate: (answer) => answer === "const",
      },
      {
        id: 2,
        topic: "Mathematics",
        question: "What is the square root of 144?",
        validate: (answer) => Number(answer) === 12,
      },
      {
        id: 3,
        topic: "HTML",
        question: "Which HTML tag is used to create a hyperlink?",
        validate: (answer) => answer === "<a>" || answer === "a",
      },
      {
        id: 4,
        topic: "General Knowledge",
        question: "What is the capital city of Japan?",
        validate: (answer) => answer === "tokyo",
      },
      {
        id: 5,
        topic: "CSS",
        question: "Which CSS property controls the text size?",
        validate: (answer) => answer === "font-size",
      },
    ];

    function runAssessment() {
      const wantToCont = confirm(
        "Welcome to the Diagnostic Quiz!\nWould you like to continue with the quiz?"
      );

      if (!wantToCont) {
        alert("Assessment aborted. No score recorded.");
        return;
      }

      const nameInput = prompt("Enter Candidate Name:");
      if (nameInput === null) {
        alert("Assessment aborted. No score recorded.");
        return;
      }

      if (nameInput.trim() !== "") {
        examState.candidateName = nameInput.trim();
        alert(`Welcome, ${examState.candidateName}!`);
      }

      for (let i = 0; i < questionBank.length; i++) {
        const rawAnswer = prompt(questionBank[i].question);

        if (rawAnswer === null) {
          alert("Candidate terminated the exam early.");
          break;
        }

        const isPassed = evaluateAnswer(rawAnswer, questionBank[i].validate);

        if (isPassed) {
          examState.score++;
          examState.currentStreak++;
          alert(`Correct! Current Streak: ${examState.currentStreak}`);
        } else {
          examState.currentStreak = 0;
          alert("Incorrect! Streak reset.");
        }

        examState.totalAnswered++;
        examState.history.push({
          questionId: questionBank[i].id,
          topic: questionBank[i].topic,
          userAnswer: rawAnswer,
          result: isPassed ? "PASSED" : "FAILED",
        });
      }

      console.log("=== INITIATING RECURSIVE SUBMISSION AUDIT ===");
      auditCountdown(3);

      const finalScore = calculatePercentage(
        examState.score,
        questionBank.length
      );
      const statusLabel =
        finalScore >= PASSING_PERCENTAGE ? "PASSED" : "FAILED";

      alert(
        `Well Done, ${examState.candidateName}!\n` +
          `Questions Answered: (${examState.totalAnswered} / ${questionBank.length})\n` +
          `Total Correct: ${examState.score}\n` +
          `Percentage: ${finalScore}%\n` +
          `Status: ${statusLabel}`
      );
    }

    runAssessment();

    const printAudit = confirm(
      "Would you like to print the full diagnostic audit table to the DevTools Console?"
    );
    if (printAudit) {
      console.log("Your Complete Diagnostic of the Quiz:");
      console.table(examState.history);
    } else {
      alert("Thank you for using the JS Exam Engine.");
    }
  })();
}, 3000);