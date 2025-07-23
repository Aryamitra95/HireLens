import type { Route } from "./+types/home";
import Navbar from "~/components/Navbar";
import {resumes} from "../../constants";
import ResumeCard from "~/components/ResumeCard";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "HireLens" },
    { name: "description", content: "Smart Feedback for your Dream Job" },
  ];
}

export default function Home() {
  return <main className="bg-[url('/images/bg-main.svg')] bg-cover">
    <Navbar />
    <section className="main-section">
      <div className="page-heading py-16">
        <h1>Track Your Applications and Resume Ratings</h1>
        <h2>
          Review your  submissions and check AI-Powered feedback.
        </h2>
      </div>
      {resumes.length>0 &&(
          <div className="resumes-section">
            {resumes.map((resume) => (
                <ResumeCard key = {resume.id} resume = {resume}/>
            ))}
          </div>
      )}
    </section>


  </main>
}
