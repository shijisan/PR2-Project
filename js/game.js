        // Questions about ICT (10 questions)
        const Questions = [
            {
                q: "What does 'ICT' stand for?",
                a: [
                    { text: "Information and Computer Technology", isCorrect: false },
                    { text: "Internet and Communication Technology", isCorrect: false },
                    { text: "Information and Communication Technology", isCorrect: true },
                    { text: "Innovative Computing Technologies", isCorrect: false }
                ]
            },
            {
                q: "Which programming language is commonly used for web development?",
                a: [
                    { text: "Python", isCorrect: false },
                    { text: "Java", isCorrect: false },
                    { text: "HTML", isCorrect: true },
                    { text: "C++", isCorrect: false }
                ]
            },
            {
                q: "What does 'HTTP' stand for in the context of the internet?",
                a: [
                    { text: "Hypertext Transfer Protocol", isCorrect: true },
                    { text: "Hyperlink Text Transfer Protocol", isCorrect: false },
                    { text: "High-Tech Transfer Protocol", isCorrect: false },
                    { text: "Hypertext Transmission Protocol", isCorrect: false }
                ]
            },
            {
                q: "Which of the following is not a cloud computing service provider?",
                a: [
                    { text: "Amazon Web Services (AWS)", isCorrect: false },
                    { text: "Google Drive", isCorrect: false },
                    { text: "Microsoft Word", isCorrect: true },
                    { text: "IBM Cloud", isCorrect: false }
                ]
            },
            {
                q: "What does 'URL' stand for in web addresses?",
                a: [
                    { text: "Uniform Resource Locator", isCorrect: true },
                    { text: "Universal Reference Link", isCorrect: false },
                    { text: "Unique Resource Listing", isCorrect: false },
                    { text: "Uniform Reference Language", isCorrect: false }
                ]
            },
            {
                q: "What is the term for malicious software that locks or encrypts your files and demands a ransom for their release?",
                a: [
                    { text: "Virus", isCorrect: false },
                    { text: "Spyware", isCorrect: false },
                    { text: "Ransomware", isCorrect: true },
                    { text: "Trojan Horse", isCorrect: false }
                ]
            },
            {
                q: "Which of the following is not a programming language?",
                a: [
                    { text: "Python", isCorrect: false },
                    { text: "Java", isCorrect: false },
                    { text: "Excel", isCorrect: true },
                    { text: "C++", isCorrect: false }
                ]
            },
            {
                q: "What technology allows mobile phones to communicate with each other via short-range wireless communication?",
                a: [
                    { text: "Bluetooth", isCorrect: true },
                    { text: "GPS", isCorrect: false },
                    { text: "Wi-Fi", isCorrect: false },
                    { text: "NFC", isCorrect: false }
                ]
            },
            {
                q: "Which company developed the popular web browser 'Chrome'?",
                a: [
                    { text: "Mozilla", isCorrect: false },
                    { text: "Microsoft", isCorrect: false },
                    { text: "Google", isCorrect: true },
                    { text: "Apple", isCorrect: false }
                ]
            },
            {
                q: "What is the term for a website's ability to adapt its layout and content based on the user's device or screen size?",
                a: [
                    { text: "Responsive Design", isCorrect: true },
                    { text: "Dynamic Scaling", isCorrect: false },
                    { text: "Adaptive Rendering", isCorrect: false },
                    { text: "Mobile Optimization", isCorrect: false }
                ]
            }
        ];

        let currQuestion = 0;
        let score = 0;
        
        function loadQues() {
            const question = document.getElementById("ques");
            const opt = document.getElementById("opt");
        
            question.textContent = Questions[currQuestion].q;
            opt.innerHTML = "";
        
            for (let i = 0; i < Questions[currQuestion].a.length; i++) {
                const choicesdiv = document.createElement("div");
                choicesdiv.className = "choice"; // Add the "choice" class to the choicesdiv
        
                const choice = document.createElement("input");
                const choiceLabel = document.createElement("label");
        
                choice.type = "radio";
                choice.name = "answer";
                choice.value = i;
        
                choiceLabel.textContent = Questions[currQuestion].a[i].text;
        
                choicesdiv.appendChild(choice);
                choicesdiv.appendChild(choiceLabel);
                opt.appendChild(choicesdiv);
            }
        }
        
        loadQues();
        
        function loadScore() {
            const totalScore = document.getElementById("score");
            totalScore.textContent = `You scored ${score} out of ${Questions.length}`;
        }
        
        function nextQuestion() {
            if (currQuestion < Questions.length - 1) {
                currQuestion++;
                loadQues();
            } else {
                document.getElementById("opt").remove();
                document.getElementById("ques").remove();
                document.getElementById("btn").remove();
                loadScore();
            }
        }
        
        function checkAns() {
            const selectedInput = document.querySelector('input[name="answer"]:checked');
        
            if (!selectedInput) {
                alert("Please select an option before submitting.");
                return; // Exit the function if no option is selected
            }
        
            const selectedAns = parseInt(selectedInput.value);
        
            if (Questions[currQuestion].a[selectedAns].isCorrect) {
                score++;
                console.log("Correct");
            }
        
            nextQuestion();
        }