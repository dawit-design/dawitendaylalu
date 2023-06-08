import react from "react";
import Typed from "react-typed";

export default function Header() {
  return (
    <div id="/" className="header-wrapper">
      <div className="main-info">
        <h1>Software Engineer</h1>
        <Typed
          className="typed-text"
          strings={[
            "Web Design",
            "Web Development",
            "Mobile Application Development",
            "Graphic Design",
          ]}
          typedSpeed={40}
          backSpeed={60}
          loop={true}
        />
        <a
          href="https://drive.google.com/file/d/1zLeSI_nKNVn5Y50hHZLk01bQkZa_cZjW/view?usp=sharing"
          className="btn-cv-show"
        >
          Resume
        </a>
      </div>
    </div>
  );
}
