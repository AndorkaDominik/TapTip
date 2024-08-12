export const courseData = {
  preview : [
    {
      type: "header",
      level: 1,
      text: "Course Title: From React to TypeScript: A Transition Guide for Frontend Developers",
    },
    {
      type: "header",
      level: 2,
      text: "Course Overview",
    },
    {
      type: "point",
      text: "This course is designed for developers familiar with React who want to level up their skills by learning TypeScript. The course will guide you through the key differences between JavaScript and TypeScript, how to transition a React project to TypeScript, and how to effectively use TypeScript in a React environment.",
    },
    {
      type: "header",
      level: 2,
      text: "Prerequisites",
    },
    {
      type: "point",
      text: "Basic to intermediate knowledge of React.",
    },
    {
      type: "point",
      text: "Familiarity with JavaScript ES6+.",
    },
  ],
  module1: [
  {
    type: 'margin'
  },
  {
    type: "header",
    level: 2,
    text: "Module 1: Introduction to TypeScript",
  },
  {
    type: "header",
    level: 3,
    text: "Lesson 1.1: What is TypeScript?",
  },
  {
    type: "point",
    text: "Overview of TypeScript: What it is and why it’s useful.",
  },
  {
    type: "example",
    code: `// JavaScript
function greet(name) {
  return "Hello, " + name;
}

// TypeScript
function greet(name: string): string {
  return "Hello, " + name;
}`,
  },
  {
    type: "point",
    text: "TypeScript vs. JavaScript: Key differences.",
  },
  {
    type: "example",
    code: `// JavaScript allows this (no error until runtime)
let myVar = "hello";
myVar = 42; // No error

// TypeScript catches this error at compile-time
let myVar: string = "hello";
myVar = 42; // Error: Type 'number' is not assignable to type 'string'`,
  },
  {
    type: "point",
    text: "Setting up a TypeScript project.",
  },
  {
    type: "example",
    code: `// Install TypeScript globally
npm install -g typescript

// Initialize a TypeScript project
tsc --init`,
  },
  {
    type: "header",
    level: 3,
    text: "Lesson 1.2: TypeScript Basics",
  },
  {
    type: "point",
    text: "Basic types: string, number, boolean, array, tuple, enum, any, void, null, undefined, and never.",
  },
  {
    type: "example",
    code: `let isDone: boolean = false;
let age: number = 30;
let firstName: string = "John";
let list: number[] = [1, 2, 3];
let tuple: [string, number] = ["hello", 10];`,
  },
  {
    type: "point",
    text: "Type inference and type annotations.",
  },
  {
    type: "example",
    code: `// TypeScript infers the type
let message = "Hello, TypeScript!"; // inferred as string

// Explicit type annotation
let message: string = "Hello, TypeScript!";`,
  },
  {
    type: "point",
    text: "Working with interfaces and types.",
  },
  {
    type: "example",
    code: `interface User {
  name: string;
  age: number;
}

const user: User = {
  name: "John",
  age: 30,
};`,
  },
  {
    type: "point",
    text: "Union and intersection types.",
  },
  {
    type: "example",
    code: `// Union type
let id: string | number;
id = 101; // OK
id = "202"; // OK

// Intersection type
interface Person {
  name: string;
}

interface Employee {
  employeeId: number;
}

type Staff = Person & Employee;

const staff: Staff = {
  name: "Alice",
  employeeId: 101,
};`,
  },
  ],
  module2: [
  {
    type: 'margin'
  },
  {
    type: "header",
    level: 2,
    text: "Module 2: Transitioning from JavaScript to TypeScript in React",
  },
  {
    type: "header",
    level: 3,
    text: "Lesson 2.1: Converting a React Project to TypeScript",
  },
  {
    type: "point",
    text: "Setting up TypeScript in an existing React project.",
  },
  {
    type: "example",
    code: `# Create a new React project with TypeScript
npx create-react-app my-app --template typescript`,
  },
  {
    type: "point",
    text: "Migrating files from .js to .tsx.",
  },
  {
    type: "example",
    code: `// Rename App.js to App.tsx, and update:
import React from "react";

const App: React.FC = () => {
  return <div>Hello TypeScript</div>;
};

export default App;`,
  },
  {
    type: "point",
    text: "Handling third-party libraries and types.",
  },
  {
    type: "example",
    code: `# Install type definitions for a library
npm install @types/react-router-dom`,
  },
  {
    type: "point",
    text: "Adding type declarations for JavaScript libraries that don’t have them.",
  },
  {
    type: "example",
    code: `// Example for a library without types
declare module "my-legacy-library" {
  export function oldFunction(arg: string): number;
}`,
  },
  {
    type: "header",
    level: 3,
    text: "Lesson 2.2: Typing React Components",
  },
  {
    type: "point",
    text: "Functional components with TypeScript.",
  },
  {
    type: "example",
    code: `interface GreetingProps {
  name: string;
}

const Greeting: React.FC<GreetingProps> = ({ name }) => {
  return <h1>Hello, {name}!</h1>;
};`,
  },
  {
    type: "point",
    text: "Typing props with interfaces.",
  },
  {
    type: "example",
    code: `interface ButtonProps {
  label: string;
  onClick: () => void;
}

const Button: React.FC<ButtonProps> = ({ label, onClick }) => {
  return <button onClick={onClick}>{label}</button>;
};`,
  },
  {
    type: "point",
    text: "Typing state with useState.",
  },
  {
    type: "example",
    code: `const [count, setCount] = React.useState<number>(0);`,
  },
  {
    type: "point",
    text: "Typing refs with useRef.",
  },
  {
    type: "example",
    code: `const inputRef = React.useRef<HTMLInputElement>(null);`,
  },
  {
    type: "header",
    level: 3,
    text: "Lesson 2.3: Typing React Hooks",
  },
  {
    type: "point",
    text: "Typing custom hooks.",
  },
  {
    type: "example",
    code: `function useFetch<T>(url: string): { data: T | null, error: string | null } {
  const [data, setData] = React.useState<T | null>(null);
  const [error, setError] = React.useState<string | null>(null);

  React.useEffect(() => {
    fetch(url)
      .then(response => response.json())
      .then(data => setData(data))
      .catch(err => setError(err.message));
  }, [url]);

  return { data, error };
}`,
  },
  {
    type: "point",
    text: "Typing the useReducer hook.",
  },
  {
    type: "example",
    code: `interface State {
  count: number;
}

type Action = { type: "increment" } | { type: "decrement" };

function reducer(state: State, action: Action): State {
  switch (action.type) {
    case "increment":
      return { count: state.count + 1 };
    case "decrement":
      return { count: state.count - 1 };
    default:
      throw new Error();
  }
}

const [state, dispatch] = React.useReducer(reducer, { count: 0 });`,
  },
  {
    type: "point",
    text: "Handling complex state types in hooks.",
  },
  {
    type: "example",
    code: `interface Task {
  id: number;
  title: string;
  completed: boolean;
}

type TaskAction = 
  | { type: "add"; payload: Task }
  | { type: "remove"; payload: number }
  | { type: "toggle"; payload: number };

function taskReducer(state: Task[], action: TaskAction): Task[] {
  switch (action.type) {
    case "add":
      return [...state, action.payload];
    case "remove":
      return state.filter(task => task.id !== action.payload);
    case "toggle":
      return state.map(task =>
        task.id === action.payload ? { ...task, completed: !task.completed } : task
      );
    default:
      return state;
  }
}

const [tasks, dispatch] = React.useReducer(taskReducer, []);`,
  },
],
module3:[
  {
    type: 'margin'
  },
  {
    type: "header",
    level: 2,
    text: "Module 3: Advanced TypeScript with React",
  },
  {
    type: "header",
    level: 3,
    text: "Lesson 3.1: Type Inference and Type Guards",
  },
  {
    type: "point",
    text: "Using type guards to refine types.",
  },
  {
    type: "example",
    code: `function isString(value: any): value is string {
  return typeof value === "string";
}

function process(value: string | number) {
  if (isString(value)) {
    console.log(value.toUpperCase()); // TypeScript knows 'value' is a string here
  } else {
    console.log(value.toFixed()); // TypeScript knows 'value' is a number here
  }
}`,
  },
  {
    type: "point",
    text: "Custom type guards.",
  },
  {
    type: "example",
    code: `type Cat = { type: "cat"; meow: () => void };
type Dog = { type: "dog"; bark: () => void };

function isCat(pet: Cat | Dog): pet is Cat {
  return pet.type === "cat";
}

function interact(pet: Cat | Dog) {
  if (isCat(pet)) {
    pet.meow();
  } else {
    pet.bark();
  }
}`,
  },
  {
    type: "header",
    level: 3,
    text: "Lesson 3.2: Generics in React",
  },
  {
    type: "point",
    text: "Using generics in components.",
  },
  {
    type: "example",
    code: `interface ListProps<T> {
  items: T[];
  renderItem: (item: T) => JSX.Element;
}

function List<T>({ items, renderItem }: ListProps<T>): JSX.Element {
  return (
    <ul>
      {items.map((item, index) => (
        <li key={index}>{renderItem(item)}</li>
      ))}
    </ul>
  );
}`,
  },
  {
    type: "point",
    text: "Generics with hooks.",
  },
  {
    type: "example",
    code: `function useLocalStorage<T>(key: string, initialValue: T): [T, (value: T) => void] {
  const [storedValue, setStoredValue] = React.useState<T>(() => {
    try {
      const item = window.localStorage.getItem(key);
      return item ? JSON.parse(item) : initialValue;
    } catch (error) {
      return initialValue;
    }
  });

  const setValue = (value: T) => {
    try {
      setStoredValue(value);
      window.localStorage.setItem(key, JSON.stringify(value));
    } catch (error) {
      console.error(error);
    }
  };

  return [storedValue, setValue];
}`,
  },
  {
    type: "header",
    level: 3,
    text: "Lesson 3.3: Integration with Other Libraries",
  },
  {
    type: "point",
    text: "TypeScript with Redux.",
  },
  {
    type: "example",
    code: `interface RootState {
  user: UserState;
}

interface UserState {
  name: string;
}

const mapStateToProps = (state: RootState) => ({
  user: state.user,
});

const mapDispatchToProps = {
  // action creators
};`,
  },
  {
    type: "point",
    text: "TypeScript with React Router.",
  },
  {
    type: "example",
    code: `import { RouteComponentProps } from "react-router-dom";

interface MyComponentProps extends RouteComponentProps<{ id: string }> {}

const MyComponent: React.FC<MyComponentProps> = ({ match }) => {
  return <div>ID: {match.params.id}</div>;
};`,
  },
], 
  module4:[
  {
    type: 'margin'
  },
  {
    type: "header",
    level: 2,
    text: "Module 4: Testing and Debugging",
  },
  {
    type: "header",
    level: 3,
    text: "Lesson 4.1: Testing TypeScript React Components",
  },
  {
    type: "point",
    text: "Setting up testing environment with TypeScript.",
  },
  {
    type: "example",
    code: `# Install necessary testing libraries
npm install --save-dev @types/jest @testing-library/react @testing-library/jest-dom`,
  },
  {
    type: "point",
    text: "Writing tests for typed components.",
  },
  {
    type: "example",
    code: `import { render, screen } from "@testing-library/react";
import Greeting from "./Greeting";

test("renders the greeting message", () => {
  render(<Greeting name="John" />);
  expect(screen.getByText("Hello, John!")).toBeInTheDocument();
});`,
  },
  {
    type: "header",
    level: 3,
    text: "Lesson 4.2: Debugging TypeScript Code",
  },
  {
    type: "point",
    text: "Using debugging tools with TypeScript.",
  },
  {
    type: "example",
    code: `// Example: Using VS Code debugger
{
  "version": "0.2.0",
  "configurations": [
    {
      "type": "node",
      "request": "launch",
      "name": "Debug TypeScript",
      "program": "{workspaceFolder}/src/index.tsx",
      "preLaunchTask": "npm: build",
      "outFiles": ["{workspaceFolder}/dist/**/*.js"]
    }
  ]
}`,
  },
  {
    type: "header",
    level: 1,
    text: "Course Conclusion",
  },
  {
    type: "point",
    text: "This course provided an in-depth look at how to transition from JavaScript to TypeScript within React projects. We covered TypeScript fundamentals, integrating TypeScript with React, advanced TypeScript concepts, and practical tips for testing and debugging.",
  },
  {
    type: "point",
    text: "With this knowledge, you should be well-equipped to start using TypeScript in your React projects and to handle common challenges that arise during the transition.",
  },
  {
    type: "header",
    level: 1,
    text: "Lesson 2.1: Converting a React Project to TypeScript",
  },
  {
    type: "point",
    text: "Setting up TypeScript in an existing React project.",
  },
  {
    type: "example",
    code: `
# Create a new React project with TypeScript
npx create-react-app my-app --template typescript
    `,
  },
  {
    type: "point",
    text: "Migrating files from .js to .tsx.",
  },
  {
    type: "example",
    code: `
import React from "react";

const App: React.FC = () => {
  return <div>Hello TypeScript</div>;
};

export default App;
    `,
  },
  {
    type: "point",
    text: "Handling third-party libraries and types.",
  },
  {
    type: "example",
    code: `
# Install type definitions for a library
npm install @types/react-router-dom
    `,
  },
  {
    type: "point",
    text: "Adding type declarations for JavaScript libraries that don’t have them.",
  },
  {
    type: "example",
    code: `
// Example for a library without types
declare module "my-legacy-library" {
  export function oldFunction(arg: string): number;
}
    `,
  },
  {
    type: "header",
    level: 1,
    text: "Lesson 2.2: Typing React Components",
  },
  {
    type: "point",
    text: "Functional components with TypeScript.",
  },
  {
    type: "example",
    code: `
interface GreetingProps {
  name: string;
}

const Greeting: React.FC<GreetingProps> = ({ name }) => {
  return <h1>Hello, {name}!</h1>;
};
    `,
  },
  {
    type: "point",
    text: "Typing props with interfaces.",
  },
  {
    type: "example",
    code: `
interface ButtonProps {
  label: string;
  onClick: () => void;
}

const Button: React.FC<ButtonProps> = ({ label, onClick }) => {
  return <button onClick={onClick}>{label}</button>;
};
    `,
  },
  {
    type: "point",
    text: "Typing state with useState.",
  },
  {
    type: "example",
    code: `
const [count, setCount] = React.useState<number>(0);
    `,
  },
  {
    type: "point",
    text: "Typing refs with useRef.",
  },
  {
    type: "example",
    code: `
const inputRef = React.useRef<HTMLInputElement>(null);
    `,
  },
  {
    type: "header",
    level: 1,
    text: "Lesson 2.3: Typing React Hooks",
  },
  {
    type: "point",
    text: "Typing custom hooks.",
  },
  {
    type: "example",
    code: `
function useFetch<T>(url: string): { data: T | null, error: string | null } {
  const [data, setData] = React.useState<T | null>(null);
  const [error, setError] = React.useState<string | null>(null);

  React.useEffect(() => {
    fetch(url)
      .then(response => response.json())
      .then(data => setData(data))
      .catch(err => setError(err.message));
  }, [url]);

  return { data, error };
}
    `,
  },
  {
    type: "point",
    text: "Typing the useReducer hook.",
  },
  {
    type: "example",
    code: `
interface State {
  count: number;
}

type Action = { type: "increment" } | { type: "decrement" };

function reducer(state: State, action: Action): State {
  switch (action.type) {
    case "increment":
      return { count: state.count + 1 };
    case "decrement":
      return { count: state.count - 1 };
    default:
      throw new Error();
  }
}

const [state, dispatch] = React.useReducer(reducer, { count: 0 });
    `,
  },
  {
    type: "point",
    text: "Handling complex state types in hooks.",
  },
  {
    type: "example",
    code: `
interface Task {
  id: number;
  title: string;
  completed: boolean;
}

type TaskAction = 
  | { type: "add"; payload: Task }
  | { type: "remove"; payload: number }
  | { type: "toggle"; payload: number };

function taskReducer(state: Task[], action: TaskAction): Task[] {
  switch (action.type) {
    case "add":
      return [...state, action.payload];
    case "remove":
      return state.filter(task => task.id !== action.payload);
    case "toggle":
      return state.map(task =>
        task.id === action.payload ? { ...task, completed: !task.completed } : task
      );
    default:
      return state;
  }
}

const [tasks, dispatch] = React.useReducer(taskReducer, []);
    `,
  },
  {
    type: "header",
    level: 1,
    text: "Lesson 2.4: Handling Context and Reducers with TypeScript",
  },
  {
    type: "point",
    text: "Typing the useContext hook.",
  },
  {
    type: "example",
    code: `
interface AuthContextProps {
  user: string | null;
  login: (name: string) => void;
  logout: () => void;
}

const AuthContext = React.createContext<AuthContextProps | undefined>(undefined);

const useAuth = () => {
  const context = React.useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};
    `,
  },
  {
    type: "point",
    text: "Typing context providers and consumers.",
  },
  {
    type: "example",
    code: `
const AuthProvider: React.FC = ({ children }) => {
  const [user, setUser] = React.useState<string | null>(null);

  const login = (name: string) => setUser(name);
  const logout = () => setUser(null);

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
    `,
  },
  {
    type: "point",
    text: "Typing actions and state in useReducer.",
  },
  {
    type: "example",
    code: `// Already covered in useReducer example under Lesson 2.3.`,
  },
  {
    type: "header",
    level: 1,
    text: "Module 3: Advanced TypeScript in React",
  },
  {
    type: "header",
    level: 2,
    text: "Lesson 3.1: Advanced Types and Generics",
  },
  {
    type: "point",
    text: "Using generics in React components and hooks.",
  },
  {
    type: "example",
    code: `
interface ListProps<T> {
  items: T[];
  render: (item: T) => JSX.Element;
}

function List<T>({ items, render }: ListProps<T>) {
  return <ul>{items.map(render)}</ul>;
}

// Usage
const users = ["Alice", "Bob", "Charlie"];
<List items={users} render={(user) => <li key={user}>{user}</li>} />;
    `,
  },
  {
    type: "point",
    text: "Understanding and using conditional types.",
  },
  {
    type: "example",
    code: `
type IsString<T> = T extends string ? "yes" : "no";

type Test1 = IsString<string>; // "yes"
type Test2 = IsString<number>; // "no"
    `,
  },
  {
    type: "point",
    text: "Discriminated unions and exhaustive checks.",
  },
  {
    type: "example",
    code: `
type Shape =
  | { kind: "circle"; radius: number }
  | { kind: "square"; side: number };

function area(shape: Shape) {
  switch (shape.kind) {
    case "circle":
      return Math.PI * shape.radius ** 2;
    case "square":
      return shape.side ** 2;
    default:
      const _exhaustiveCheck: never = shape;
      return _exhaustiveCheck; // Will cause a compile-time error if a case is missing
  }
}
    `,
  },
  {
    type: "header",
    level: 2,
    text: "Lesson 3.2: TypeScript and React Performance",
  },
  {
    type: "point",
    text: "Optimizing React components with TypeScript.",
  },
  {
    type: "example",
    code: `
// Using React.memo with TypeScript
interface ExpensiveComponentProps {
  value: number;
}

const ExpensiveComponent: React.FC<ExpensiveComponentProps> = React.memo(({ value }) => {
  return <div>{value}</div>;
});
    `,
  },
  {
    type: "point",
    text: "Preventing unnecessary re-renders with proper typing.",
  },
  {
    type: "example",
    code: `
interface ParentProps {
  count: number;
}

const Parent: React.FC<ParentProps> = ({ count }) => {
  const handleClick = React.useCallback(() => {
    console.log("Clicked!");
  }, []);

  return <Child count={count} onClick={handleClick} />;
};

interface ChildProps {
  count: number;
  onClick: () => void;
}

const Child: React.FC<ChildProps> = React.memo(({ count, onClick }) => {
  return (
    <button onClick={onClick}>
      Count: {count}
    </button>
  );
});
    `,
  },
  {
    type: "point",
    text: "Typing memoized components (React.memo).",
  },
  {
    type: "example",
    code: `// Already covered in "Optimizing React components with TypeScript."
    `,
  },
  {
    type: "header",
    level: 2,
    text: "Lesson 3.3: Error Handling and Debugging",
  },
  {
    type: "point",
    text: "Catching and handling errors in TypeScript.",
  },
  {
    type: "example",
    code: `
try {
  throw new Error("Something went wrong");
} catch (error) {
  console.error((error as Error).message);
}
    `,
  },
  {
    type: "point",
    text: "TypeScript error messages: How to read and fix them.",
  },
  {
    type: "example",
    code: `
let value: string | number = "hello";
value = 42;
value.toUpperCase(); // Error: Property 'toUpperCase' does not exist on type 'number'.
    `,
  },
  {
    type: "point",
    text: "Debugging TypeScript code in React applications.",
  },
  {
    type: "point",
    text: "Use of source maps and debugging tools in Chrome or VSCode.",
  },
  {
    type: "header",
    level: 1,
    text: "Module 4: Working with External Data and APIs",
  },
  {
    type: "header",
    level: 2,
    text: "Lesson 4.1: Typing API Responses",
  },
  {
    type: "point",
    text: "Typing JSON responses from APIs.",
  },
  {
    type: "example",
    code: `
interface User {
  id: number;
  name: string;
  email: string;
}

async function fetchUser(userId: number): Promise<User> {
  const response = await fetch(\`/api/users/{userId}\`);
  const data: User = await response.json();
  return data;
}
    `,
  },
  {
    type: "point",
    text: "Working with Axios and Fetch in TypeScript.",
  },
  {
    type: "example",
    code: `
import axios from "axios";

interface Post {
  id: number;
  title: string;
  body: string;
}

async function fetchPosts(): Promise<Post[]> {
  const response = await axios.get<Post[]>("/api/posts");
  return response.data;
}
    `,
  },
  {
    type: "point",
    text: "Handling asynchronous data with Promise and async/await.",
  },
  {
    type: "example",
    code: `// Already covered in "Typing JSON responses from APIs."
    `,
  },
  {
    type: "header",
    level: 2,
    text: "Lesson 4.2: Integrating TypeScript with GraphQL",
  },
  {
    type: "point",
    text: "Using TypeScript with GraphQL in React.",
  },
  {
    type: "example",
    code: `
import { useQuery, gql } from "@apollo/client";

const GET_USER = gql\`
  query GetUser($id: ID!) {
    user(id: $id) {
      id
      name
      email
    }
  }
\`;

interface User {
  id: string;
  name: string;
  email: string;
}

interface UserData {
  user: User;
}

interface UserVars {
  id: string;
}

const UserProfile: React.FC<{ userId: string }> = ({ userId }) => {
  const { loading, error, data } = useQuery<UserData, UserVars>(GET_USER, {
    variables: { id: userId },
  });

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <div>
      <h1>{data?.user.name}</h1>
      <p>{data?.user.email}</p>
    </div>
  );
};
    `,
  },
  {
    type: "point",
    text: "Typing GraphQL queries and mutations.",
  },
  {
    type: "example",
    code: `// Already covered in the example above.
    `,
  },
  {
    type: "point",
    text: "Working with Apollo Client in TypeScript.",
  },
  {
    type: "example",
    code: `// Covered in the GraphQL example above.
    `,
  },
  ],
  module5:[
  {
    type: 'margin'
  },
  {
    type: "header",
    level: 1,
    text: "Module 5: Testing and Deployment",
  },
  {
    type: "header",
    level: 2,
    text: "Lesson 5.1: Testing React Components with TypeScript",
  },
  {
    type: "point",
    text: "Setting up testing libraries with TypeScript.",
  },
  {
    type: "example",
    code: `
import { render, screen } from "@testing-library/react";
import { Greeting } from "./Greeting";

test("renders a greeting message", () => {
  render(<Greeting name="Alice" />);
  expect(screen.getByText(/Hello, Alice!/)).toBeInTheDocument();
});
    `,
  },
  {
    type: "point",
    text: "Typing tests with Jest and React Testing Library.",
  },
  {
    type: "example",
    code: `
interface GreetingProps {
  name: string;
}

const Greeting: React.FC<GreetingProps> = ({ name }) => {
  return <h1>Hello, {name}!</h1>;
};
    `,
  },
  {
    type: "header",
    level: 2,
    text: "Lesson 5.2: Deploying TypeScript React Applications",
  },
  {
    type: "point",
    text: "Configuring deployment settings for TypeScript projects.",
  },
  {
    type: "example",
    code: `
# Build the project
npm run build

# Deploy to GitHub Pages
npx gh-pages -d build
    `,
  },
  {
    type: "point",
    text: "Deploying to platforms like Vercel, Netlify, and GitHub Pages.",
  },
  {
    type: "example",
    code: `
# Deploy to Vercel
npx vercel --prod

# Deploy to Netlify
npx netlify deploy --prod
    `,
  },
  ]
};
