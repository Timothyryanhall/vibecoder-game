document.getElementById('startBtn').addEventListener('click', () => {
  const challenges = [
    'Center a div perfectly!',
    'Build a scalable API using only emojis as variable names.',
    'Create a database schema with one endlessly nested table.',
    'Write an HTML page using only inline styles and no classes.',
  ];

  const results = [
    'Wow, that was impressively bad. You centered the div... in spirit.',
    'Your emoji API works if you don’t actually try it.',
    'Nested tables are not databases. Go learn normalization!',
    'Inline styles? Bold move. It’s a maintenance nightmare.',
  ];

  const randomIndex = Math.floor(Math.random() * challenges.length);

  const challenge = challenges[randomIndex];
  const result = results[randomIndex];

  document.getElementById('challenge').textContent = `Challenge: ${challenge}`;
  document.getElementById('result').textContent = `Result: ${result}`;
});