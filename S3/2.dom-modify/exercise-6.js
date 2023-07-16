const apps = ['Facebook', 'Netflix', 'Instagram', 'Snapchat', 'Twitter'];

const ul$$ = document.createElement('ul');

for (let index = 0; index < apps.length; index++) {
    const app = apps[index];
    const li$$ = document.createElement('li');
    li$$.textContent = app;
}

document.body.appendChild(ul$$);