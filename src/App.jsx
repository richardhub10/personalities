import React, { useState } from 'react';

const personalities = [
	{
		id: 1,
		year: 2015,
		name: 'FC Barcelona',
		title: 'FIFA Club World Cup Champion',
		subtitle: '2015 final — Barcelona 3–0 River Plate',
		photoUrl: '/barcelona-2015.jpg',
		description:
			'Barcelona completed a dominant year with a 3–0 victory over River Plate in Yokohama. Luis Suárez scored twice and Lionel Messi added one as Barça lifted their third Club World Cup trophy.',
	},
	{
		id: 2,
		year: 2016,
		name: 'Real Madrid',
		title: 'FIFA Club World Cup Champion',
		subtitle: '2016 final — Real Madrid 4–2 (a.e.t.) Kashima Antlers',
		photoUrl: '/real-madrid-2016.jpg',
		description:
			'Real Madrid beat Kashima Antlers 4–2 after extra time in Yokohama, with Cristiano Ronaldo starring in extra time. The win marked Real Madrid’s second Club World Cup title under Zinedine Zidane.',
	},
	{
		id: 3,
		year: 2017,
		name: 'Real Madrid',
		title: 'FIFA Club World Cup Champion',
		subtitle: '2017 final — Real Madrid 1–0 Grêmio',
		photoUrl: '/real-madrid-2017.jpg',
		description:
			'Real Madrid defended the trophy with a 1–0 win over Grêmio in Abu Dhabi, becoming the first team to retain the Club World Cup. A tight defensive performance and a decisive goal secured their third title in the modern era.',
	},
	{
		id: 4,
		year: 2018,
		name: 'Real Madrid',
		title: 'FIFA Club World Cup Champion',
		subtitle: '2018 final — Real Madrid 4–1 Al-Ain',
		photoUrl: '/real-madrid-2018.jpg',
		description:
			'Real Madrid completed a three-year run by defeating Al-Ain 4–1 in Abu Dhabi, becoming the first club to win the competition three consecutive times. The victory further extended Real’s status as the tournament’s most successful club.',
	},
	{
		id: 5,
		year: 2019,
		name: 'Liverpool',
		title: 'FIFA Club World Cup Champion',
		subtitle: '2019 final — Liverpool 1–0 Flamengo (a.e.t.)',
		photoUrl: '/liverpool-2019.jpg',
		description:
			'Liverpool claimed their first Club World Cup with a 1–0 extra-time win over Flamengo in Doha, secured by Roberto Firmino’s decisive strike. The title capped a stellar season for the Reds under Jürgen Klopp.',
	},
	{
		id: 6,
		year: 2020,
		name: 'Bayern Munich',
		title: 'FIFA Club World Cup Champion',
		subtitle: '2020 final — Bayern Munich 1–0 UANL (Tigres)',
		photoUrl: '/bayern-2020.jpg',
		description:
			'Bayern Munich defeated Tigres 1–0 in the 2020 final in Qatar to complete an extraordinary run of trophies. The winning goal sealed Bayern’s second Club World Cup and capped a dominant era for the club.',
	},
	{
		id: 7,
		year: 2021,
		name: 'Chelsea',
		title: 'FIFA Club World Cup Champion',
		subtitle: '2021 final — Chelsea 2–1 Palmeiras (a.e.t.)',
		photoUrl: '/chelsea-2021.jpg',
		description:
			'Chelsea won their first Club World Cup with a 2–1 extra-time victory over Palmeiras in Abu Dhabi. Kai Havertz scored the extra-time winner as Chelsea claimed global club honours under Thomas Tuchel.',
	},
	{
		id: 8,
		year: 2022,
		name: 'Real Madrid',
		title: 'FIFA Club World Cup Champion',
		subtitle: '2022 final — Real Madrid 5–3 Al-Hilal',
		photoUrl: '/real-madrid-2022.jpg',
		description:
			'Real Madrid edged Al-Hilal 5–3 in a high-scoring final in Rabat to lift another Club World Cup. The match showcased Real’s attacking depth and added to their record number of titles.',
	},
	{
		id: 9,
		year: 2023,
		name: 'Manchester City',
		title: 'FIFA Club World Cup Champion',
		subtitle: '2023 final — Manchester City 4–0 Fluminense',
		photoUrl: '/man-city-2023.jpg',
		description:
			'Manchester City dominated the 2023 final, beating Fluminense 4–0 in Jeddah as Pep Guardiola added another major trophy to his cabinet. City’s comprehensive performance underlined their global standing.',
	},
	{
		id: 10,
		year: 2025,
		name: 'Chelsea',
		title: 'FIFA Club World Cup Champion',
		subtitle: '2025 final — Chelsea 3–0 Paris Saint-Germain',
		photoUrl: '/chelsea-2025.jpg',
		description:
			'Under the new expanded format, Chelsea won the 2025 Club World Cup with a 3–0 victory over Paris Saint-Germain at MetLife Stadium. The triumph marked Chelsea’s second Club World Cup title in the competition’s refreshed era.',
	},
];

function App() {
	const [index, setIndex] = useState(0);
	const [expanded, setExpanded] = useState(false);
	const person = personalities[index];

	const handleNext = () => {
		setIndex((prev) => (prev + 1) % personalities.length);
		setExpanded(false);
	};

	const handleBack = () => {
		setIndex((prev) => (prev === 0 ? personalities.length - 1 : prev - 1));
		setExpanded(false);
	};

	return (
		<div className="page-root">
			<header className="page-header">
				<div>
					<h1 className="header-title">Richard Ken Magat - BSIT-3A</h1>
					<p className="header-subtitle">{person.subtitle}</p>
				</div>
			</header>

			<main className="page-main">
				<div className="card-column">
					<section className="card">
						<img
							src={person.photoUrl}
							alt={person.name}
							className="card-photo"
						/>
						<h2 className="card-name">
							{person.name} ({person.year})
						</h2>
						<p className="card-counter">
							{index + 1} of {personalities.length}
						</p>

						<div className="slide-indicators" aria-hidden={false}>
							{personalities.map((_, i) => (
								<button
									key={i}
									className={i === index ? 'dot active' : 'dot'}
									onClick={() => setIndex(i)}
									aria-label={`Go to slide ${i + 1}`}
								/>
							))}
						</div>

						<button
							type="button"
							className="card-chevron"
							onClick={() => setExpanded((prev) => !prev)}
						>
							<span
								className={
									expanded ? 'chevron chevron-down' : 'chevron chevron-up'
								}
								aria-hidden="true"
							/>
							<span className="sr-only">
								{expanded ? 'Hide description' : 'Show description'}
							</span>
						</button>

						<div
							className={
								expanded
									? 'card-description expanded'
									: 'card-description collapsed'
							}
						>
							<p>{person.description}</p>
						</div>
					</section>

					<div className="card-buttons card-buttons-bottom">
						<button className="nav-button" onClick={handleBack}>
							BACK
						</button>
						<button className="nav-button" onClick={handleNext}>
							NEXT
						</button>
					</div>
				</div>

				<div className="page-right-space" />
			</main>
		</div>
	);
}

export default App;
