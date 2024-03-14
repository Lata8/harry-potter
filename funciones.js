function calculateScore() {
    const answers = {
      question1: 'b',
      question2: 'c',
      question3: 'a',
      question4: 'c',
      question5:'a',
      question6:'b',
      question7:'c',
      question8:'b',
      question9:'b'
    };

    let score = 0;

    for (const question in answers) {
      const selectedOption = document.querySelector(`input[name=${question}]:checked`);
      if (selectedOption) {
        if (selectedOption.value === answers[question]) {
          score++;
        }
      }
    }

    
    const result = document.getElementById('result');
    result.innerHTML = `ACERTASTE ${score} DE ${Object.keys(answers).length}`;
    const all = document.getElementById('todo');
    all.classList.add("afuera")
}