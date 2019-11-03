class Greeter {
    greeting: string;

    constructor(message: string) {
        this.greeting = message;
    }

    greet() {
        return "Hello, " + this.greeting;
    }
}

let greeter = new Greeter("world");

const root = document.createElement('h1');
root.textContent = greeter.greet();
document.body.appendChild(root);
