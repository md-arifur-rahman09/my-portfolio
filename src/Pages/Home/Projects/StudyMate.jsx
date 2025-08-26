import React, { useState } from "react";
import BackButton from "../../button/BackButton";
import { useTitle } from "../../../hooks/UseTitle";

const StudyMate = () => {
  useTitle("StudyMate");
  const [scale, setScale] = useState(1);

  const handleClick = () => {
    setScale(scale === 1.3 ? 1 : 1.3);
  };

  const features = [
    "Collaborative learning platform for students, tutors, and admins",
    "Secure authentication with Firebase & JWT",
    "Role-based dashboards (Admin, Tutor, Student)",
    "Create, manage, and book study sessions",
    "Payment system integrated with Stripe",
    "Review & rating system for study sessions",
    "Real-time data fetching with TanStack Query",
    "Notifications using SweetAlert2",
  ];

  const techStack = [
    "React",
    "Tailwind CSS",
    "Firebase Auth",
    "node",
    "jwt",
    "Express.js",
    "MongoDB",
    "TanStack Query",
    "Stripe",
    "SweetAlert2",
  ];

  return (
    <section
      className="bg-base-100 py-16 px-6 lg:px-20 pb-10 lg:pb-20 bg-gradient-to-r 
    from-[#e8f5e9] via-[#f1f8e9] to-[#e3f2fd]"
    >
      <BackButton />
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold text-primary mb-6">📚 StudyMate</h2>

        <div
          onClick={handleClick}
          className="transition-transform duration-300 ease-in-out cursor-pointer w-fit mx-auto"
          style={{ transform: `scale(${scale})` }}
        >
          <img
            src="https://i.postimg.cc/wjCh6Ydq/study-mate.jpg"
            alt="StudyMate"
            className="rounded-lg mb-8 shadow-lg"
          />
        </div>

        {/* Technology Stack */}
        <div className="mb-8">
          <h3 className="text-xl font-semibold mb-3 text-secondary">
            🛠️ Technology Stack
          </h3>
          <ul className="flex flex-wrap gap-3">
            {techStack.map((tech, i) => (
              <li
                key={i}
                className="bg-green-100 text-green-800 px-4 py-2 rounded-full font-medium shadow-md hover:bg-green-200 transition-colors cursor-default"
              >
                {tech}
              </li>
            ))}
          </ul>
        </div>

        {/* Main Features */}
        <div className="mb-8">
          <h3 className="text-xl font-semibold mb-3 text-secondary">
            ⭐ Main Features
          </h3>
          <ul className="list-disc list-inside text-gray-700 space-y-2">
            {features.map((feature, i) => (
              <li key={i} className="text-lg">
                {feature}
              </li>
            ))}
          </ul>
        </div>

        {/* Description */}
        <p className="mb-6 text-gray-700 text-lg leading-relaxed">
          StudyMate is a collaborative study platform where students can explore
          and book study sessions created by tutors. Admins manage all users and
          sessions, while Stripe payment ensures secure transactions. The
          platform supports reviews, real-time dashboards, and smooth role-based
          workflows.
        </p>

        {/* Links */}
        <p className="mb-4 text-gray-700 text-lg">
          <strong>Live Site:</strong>{" "}
          <a
            href="https://study-mate-af653.web.app/"
            target="_blank"
            rel="noreferrer"
            className="link link-primary hover:underline"
          >
            Visit Website
          </a>
        </p>

        <p className="mb-4 text-gray-700 text-lg">
          <strong>Client Code:</strong>{" "}
          <a
            href="https://github.com/md-arifur-rahman09/study-mate-client"
            target="_blank"
            rel="noreferrer"
            className="link link-primary hover:underline"
          >
            GitHub Repo
          </a>
        </p>

        <p className="mb-4 text-gray-700 text-lg">
          <strong>Server Code:</strong>{" "}
          <a
            href="https://github.com/md-arifur-rahman09/study-mate-server"
            target="_blank"
            rel="noreferrer"
            className="link link-primary hover:underline"
          >
            GitHub Repo
          </a>
        </p>

        {/* Challenges */}
        <div>
          <h3 className="text-xl font-semibold mb-3 text-secondary">
            ⚠️ Challenges Faced
          </h3>
          <p className="mb-4 text-gray-700 text-lg leading-relaxed">
            Handling role-based access, implementing JWT with cookies, managing
            real-time data fetching, and integrating Stripe for smooth payment
            flow were the key challenges during development.
          </p>
        </div>

        {/* Future Improvements */}
        <div>
          <h3 className="text-xl font-semibold mb-3 text-secondary">
             Future Improvements
          </h3>
          <p className="text-gray-700 text-lg leading-relaxed">
            Add real-time chat between students and tutors, AI-based study
            recommendations, session reminder emails, and a gamification system
            with badges and leaderboards.
          </p>
        </div>
      </div>
    </section>
  );
};

export default StudyMate;
