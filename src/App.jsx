import { useEffect, useState } from "react";
import "./App.css";
import Banner from "./components/banner/Banner";
import Modal from "./components/modal/Modal";
import Experience from "./components/experience/Experience";
import Header from "./components/common/header/Header";
import Skills from "./components/skills/Skills";
import Project from "./components/projects/Project";

function App() {
  const [showModal, setShowModal] = useState(false);
  useEffect(() => {
    // Show modal after 30 seconds
    const timer = setTimeout(() => {
      setShowModal(true);
    }, 3000);

    // Clean up the timer when component unmounts
    return () => clearTimeout(timer);
  }, []);

  const handleCloseModal = () => {
    setShowModal(false);
  };

  return (
    <>
      <Header/>
      <Banner />
      <Project/>
      <Skills/>
      <Experience />
      {showModal && <Modal onClose={handleCloseModal} />}
    </>
  );
}

export default App;
