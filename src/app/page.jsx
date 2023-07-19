import NavBar from "./components/sections/NavBar";
import TasksSection from "./components/sections/TasksSection";

export default function Home() {
  return (
    <>
      <NavBar />

      <main className="p-6">
        <TasksSection />
      </main>
    </>
  );
}
