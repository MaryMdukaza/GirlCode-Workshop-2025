import type { Route } from "./+types/home";
import { Welcome } from "../welcome/welcome";
import MyButton from "~/components/MyButton";
import Profile from "~/components/Person";
import type Person from "~/types/Person";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "New React Router App" },
    { name: "description", content: "Welcome to React Router!" },
  ];
}

export default function Home() {
  const person: Person = {
    //Add the name
    name: "Mary",
    //Add the profile image
    imageUrl:
      "https://images.unsplash.com/photo-1752254091842-3f26af77d5f2?q=80&w=1071&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    imageSize: 100,
  };
  return (
    <div>
      <h1>Welcome to Entelect!</h1>
        <MyButton />
        <Profile person={person}/>
    </div>
  );
}
