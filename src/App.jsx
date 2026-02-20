import React, { useState } from 'react';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import Collapse from '@mui/material/Collapse';
import Grid from '@mui/material/Grid';
import Divider from '@mui/material/Divider';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

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
		<Container maxWidth="md" sx={{ py: 4 }}>
			<Box sx={{ mb: 3 }}>
				<Typography variant="h4" component="h1" gutterBottom sx={{ fontWeight: 700 }}>
					FIFA Club World Cup Champions
				</Typography>
				<Box sx={{ display: 'flex', justifyContent: 'center', mt: 1 }}>
					<Paper elevation={3} sx={{ p: { xs: 2, sm: 2.5 }, borderRadius: 3, width: { xs: '95%', sm: '72%', md: '64%' }, bgcolor: 'rgba(255,255,255,0.96)' }}>
						<Box sx={{ display: 'flex', flexDirection: { xs: 'column', sm: 'row' }, gap: 2, alignItems: 'center', justifyContent: 'space-between' }}>
							<Box>
								<Typography variant="overline" color="text.secondary" sx={{ display: 'block' }}>Full Name</Typography>
								<Typography variant="subtitle1" sx={{ fontWeight: 700, color: 'text.primary' }}>Richard Ken Magat</Typography>
							</Box>

							<Divider orientation="vertical" flexItem sx={{ display: { xs: 'none', sm: 'block' } }} />

							<Box sx={{ textAlign: 'center' }}>
								<Typography variant="overline" color="text.secondary" sx={{ display: 'block' }}>Subject</Typography>
								<Typography variant="subtitle1" sx={{ fontWeight: 700, color: 'text.primary' }}>C-PEITEL3</Typography>
							</Box>

							<Divider orientation="vertical" flexItem sx={{ display: { xs: 'none', sm: 'block' } }} />

							<Box sx={{ textAlign: { xs: 'left', sm: 'right' } }}>
								<Typography variant="overline" color="text.secondary" sx={{ display: 'block' }}>Section</Typography>
								<Typography variant="subtitle1" sx={{ fontWeight: 700, color: 'text.primary' }}>BSIT-3A</Typography>
							</Box>
						</Box>
					</Paper>
				</Box>
			</Box>

			<Grid container justifyContent="center">
				<Grid item xs={12} sm={10}>
					<Card sx={{ display: 'flex', flexDirection: 'column', borderRadius: 3, boxShadow: 8, overflow: 'hidden' }}>
						<Box sx={{ position: 'relative', bgcolor: '#f8fafc', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
							<CardMedia
								component="img"
								image={person.photoUrl}
								alt={person.name}
								sx={{ width: '100%', height: 'auto', maxHeight: { xs: 320, sm: 520 }, objectFit: 'contain', backgroundColor: '#f8fafc' }}
							/>

							<Box sx={{
								position: 'absolute',
								left: 0,
								right: 0,
								bottom: 0,
								px: 2,
								py: 1.5,
								background: 'linear-gradient(180deg, rgba(0,0,0,0) 0%, rgba(0,0,0,0.55) 100%)',
								color: 'common.white'
							}}>
								<Typography variant="h6" sx={{ fontWeight: 700 }}>{person.name}</Typography>
								<Typography variant="caption" sx={{ opacity: 0.9 }}>{person.year} • {person.title}</Typography>
							</Box>
						</Box>

						<CardContent sx={{ pt: 2 }}>
							<Typography variant="subtitle2" color="text.secondary" sx={{ mt: 0.5 }}>{person.title}</Typography>
							<Typography variant="caption" display="block" sx={{ mt: 1 }}>{index + 1} of {personalities.length}</Typography>
							<Typography variant="body2" color="text.secondary" sx={{ mt: 1 }}>{person.subtitle}</Typography>
						</CardContent>

						<CardActions sx={{ justifyContent: 'space-between', px: 3, py: 2 }}>
							<Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
								<Button variant="outlined" color="primary" startIcon={<ArrowBackIosNewIcon />} onClick={handleBack}>
									Prev
								</Button>
								<Button variant="outlined" color="primary" endIcon={<ArrowForwardIosIcon />} onClick={handleNext}>
									Next
								</Button>
							</Box>

							<Button
								size="small"
								variant="contained"
								color="primary"
								endIcon={<ExpandMoreIcon />}
								onClick={() => setExpanded((prev) => !prev)}
							>
								{expanded ? 'Read Less' : 'Read More'}
							</Button>
						</CardActions>

						<Collapse in={expanded} timeout="auto" unmountOnExit>
							<CardContent>
								<Typography paragraph>{person.description}</Typography>
							</CardContent>
						</Collapse>
					</Card>
				</Grid>
			</Grid>
		</Container>
	);
}

export default App;
