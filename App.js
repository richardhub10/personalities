import React, { useState } from 'react';

const personalities = [
  {
    id: 1,
    name: 'Mike Beedle',
    title: 'SOFTWARE DEVELOPERS',
    subtitle: 'Juan Dela Cruz - C-PEITEL3',
    photoUrl: 'https://via.placeholder.com/160x180.png?text=Mike+Beedle',
    description:
      "Mike Beedle is the founder and CEO of e-Architects Inc., a consulting company that specializes in application development using distributed objects and Internet technologies. Despite Mike's business demands, he has remained billing as an on-the-trenches consultant where he applies Scrum and XP together through XBreed. Mike was privileged to be an early adopter of the Scrum method, and has introduced Scrum to organizations since the mid-90's. Mike's specialty is to coach companies in the creation of large scale reusable architectures involving many application teams and components. He has co-organized several workshops on objects, patterns, components, and software development throughout the last decade.",
  },
  {
    id: 2,
    name: 'Personality 2',
    title: 'SOFTWARE DEVELOPERS',
    subtitle: 'Juan Dela Cruz - C-PEITEL3',
    photoUrl: 'https://via.placeholder.com/160x180.png?text=Dev+2',
    description:
      'Short bio for personality 2. Use the same structure as in the personalities web project. You can paste the actual text from your data here.',
  },
  {
    id: 3,
    name: 'Personality 3',
    title: 'SOFTWARE DEVELOPERS',
    subtitle: 'Juan Dela Cruz - C-PEITEL3',
    photoUrl: 'https://via.placeholder.com/160x180.png?text=Dev+3',
    description:
      'Short bio for personality 3. This screen keeps the same 1 of 3 navigation and layout style from the GitHub reference.',
  },
];

function App() {
  const [index, setIndex] = useState(0);
  const person = personalities[index];

  const handleNext = () => {
    setIndex((prev) => (prev + 1) % personalities.length);
  };

  const handleBack = () => {
    setIndex((prev) => (prev === 0 ? personalities.length - 1 : prev - 1));
  };

  return (
    <div className="page-root">
      <header className="page-header">
        <div>
          <h1 className="header-title">{person.title}</h1>
          <p className="header-subtitle">{person.subtitle}</p>
        </div>

        <div className="header-buttons">
          <button className="nav-button" onClick={handleBack}>
            BACK
          </button>
          <button className="nav-button" onClick={handleNext}>
            NEXT
          </button>
        </div>
      </header>

      <main className="page-main">
        <section className="card">
          <img
            src={person.photoUrl}
            alt={person.name}
            className="card-photo"
          />

          <h2 className="card-name">{person.name}</h2>
          <p className="card-counter">
            {index + 1} of {personalities.length}
          </p>

          <div className="card-chevron">^</div>

          <div className="card-description">
            <p>{person.description}</p>
          </div>
        </section>

        <div className="page-right-space" />
      </main>
    </div>
  );
}

export default App;
