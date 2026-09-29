import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import Experience from './components/Experience';
import Projects from './components/Projects';
import ProjectModal from './components/ProjectModal';
import About from './components/About';
import Journey from './components/Journey';
import CallToAction from './components/CallToAction';
import CommandPalette from './components/CommandPalette';
import ResumeModal from './components/ResumeModal';
import ContactModal from './components/ContactModal';
import PortfolioAssistant from './components/PortfolioAssistant';

export default function App() {
  const [isCommandOpen, setIsCommandOpen] = useState(false);
  const [isResumeOpen, setIsResumeOpen] = useState(false);
  const [isContactOpen, setIsContactOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);
  const [toastMessage, setToastMessage] = useState(null);

  const showToast = (msg) => {
    setToastMessage(msg);
    setTimeout(() => {
      setToastMessage((current) => (current === msg ? null : current));
    }, 2800);
  };

  return (
    <>
      {/* Background Noise simulation */}
      <div className="noise-overlay" />

      {/* Floating Pill Navbar */}
      <Navbar
        onOpenCommand={() => setIsCommandOpen(true)}
        onOpenResume={() => setIsResumeOpen(true)}
        onOpenContact={() => setIsContactOpen(true)}
      />

      {/* Main 2-Column Responsive Layout */}
      <div className="page-wrapper">
        <div className="main-layout">
          {/* Left Column: Sticky Profile Card */}
          <Sidebar
            onOpenResume={() => setIsResumeOpen(true)}
            onOpenContact={() => setIsContactOpen(true)}
            onShowToast={showToast}
          />

          {/* Right Column: Experience, Projects, About, Journey, CTA */}
          <main className="content-col">
            <Experience />
            <Projects onSelectProject={(proj) => setSelectedProject(proj)} />
            <About />
            <Journey />
            <CallToAction
              onOpenResume={() => setIsResumeOpen(true)}
              onOpenContact={() => setIsContactOpen(true)}
              onShowToast={showToast}
            />
          </main>
        </div>
      </div>

      {/* Modals & Overlays */}
      <CommandPalette
        isOpen={isCommandOpen}
        onClose={() => setIsCommandOpen(false)}
        onOpenResume={() => setIsResumeOpen(true)}
        onOpenContact={() => setIsContactOpen(true)}
        onShowToast={showToast}
      />

      <ResumeModal
        isOpen={isResumeOpen}
        onClose={() => setIsResumeOpen(false)}
        onShowToast={showToast}
      />

      <ContactModal
        isOpen={isContactOpen}
        onClose={() => setIsContactOpen(false)}
        onShowToast={showToast}
      />

      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />

      {/* Floating AI Assistant Drawer (Kroszborg Style) */}
      <PortfolioAssistant
        onOpenResume={() => setIsResumeOpen(true)}
        onOpenContact={() => setIsContactOpen(true)}
      />

      {/* Toast Notification */}
      {toastMessage && (
        <div className="toast-notification">
          {toastMessage}
        </div>
      )}
    </>
  );
}
