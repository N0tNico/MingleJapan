const lessons = [
    {title: "Lesson 1-1: Basic Vocabulary", question: "'မင်္ဂလာပါ' ဆိုတာ ဘယ်ဟာလဲ။", options: ["こんにちは", "ありがとう", "わたし"], correctAnswer: "こんにちは", nextPage:"lesson2.html" },
    {title: "lesson 1-2: Basic Vocabulary", question: "'ကျေးဇူးတင်ပါသည်' ဆိုတာ ဘယ်ဟာလဲ။", options: ["こんにちは","ありがとう", "わたし"], correctAnswer: "ありがとう" },
    {title: "Lesson 1-3: Basic Vocabulary", question: "ဘယ်ဟာက 'ငါ' လဲ။", options: ["こんにちは", "わたし", "ありがとう"], correctAnswer: "わたし"},
    {title: "Lesson 1-4: Basic Vocabulary", question: "'ခွင့်လွှတ်ပါ' ဆိုတာ ဘယ်ဟာလဲ။", options:["わたし", "ごめんなさい", "すみません"], correctAnswer: "すみません"},
    {title: "Lesson 1-5: Basic Vocabulary", question: "'တောင်းပန်ပါတယ်' ဆိုတာ ဘယ်ဟာလဲ။", options: ["ごめんなさい", "すみません", "こんにちは"], correctAnswer: "ごめんなさい"},
    {title: "Lesson 2-5: Numbers", question: "'5' ဆိုတာ ဘယ်ဟာလဲ။?", options: ["ご", "いち", "に"], correctAnswer: "ご"},
    // Add more lessons as needed
];


let currentLessonIndex = 0;
let correctAnswers = 0;

function startLesson() {
    const currentLesson = lessons[currentLessonIndex];
    document.getElementById("lesson-title").innerText = currentLesson.title;
    document.getElementById("question").innerText = currentLesson.question;

    const optionsContainer = document.getElementById("options");
    optionsContainer.innerHTML = "";

    currentLesson.options.forEach(option => {
        const button = document.createElement("button");
        button.textContent = option;
        button.addEventListener("click", () => checkAnswer(option, currentLesson.nextPage));
        optionsContainer.appendChild(button);
    });
}

function checkAnswer(selectedOption, nextPage) {
    const currentLesson = lessons[currentLessonIndex];
    const isCorrect = selectedOption === currentLesson.correctAnswer;

    if (isCorrect) {
        correctAnswers++;
        alert("Correct!");

        // Increment lesson index
        currentLessonIndex++;

        if (currentLessonIndex < lessons.length) {
            // If there are more lessons, navigate to the next page
            window.location.href = nextPage;
        } else {
            // If all lessons are completed, show the final message and update the progress bar
            alert(`Lesson completed. You got ${correctAnswers} out of ${lessons.length} correct!`);
        }
    } else {
        alert("Incorrect. Try again!");
    }
}

// Initialize the first lesson
startLesson();