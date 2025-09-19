// Create a red circle in the center
const app = document.getElementById('app')!;

const circle = document.createElement('div');
circle.style.width = '200px';
circle.style.height = '200px';
circle.style.backgroundColor = 'red';
circle.style.borderRadius = '50%';
circle.style.margin = '0 auto';

app.appendChild(circle);
