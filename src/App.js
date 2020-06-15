/* React library */
import React from 'react';

/* Elastic UI */
import {
  EuiButton,
	EuiCard,
	EuiCollapsibleNavGroup,
	EuiFlexGrid,
	EuiFlexItem,
	EuiIcon,
	EuiImage,
	EuiLink,
	EuiListGroup,
	EuiPage,
	EuiPageBody,
	EuiPageSideBar,
	EuiSideNav,
	EuiSpacer,
	EuiText,
	EuiTitle,
} from '@elastic/eui';

/* Stylesheets */
import '@elastic/eui/dist/eui_theme_amsterdam_light.css';
import './App.css';

/* PageSection component */
import PageSection from './PageSection';

/* Graphics */
import nszeto from './material/ProfilePic.png';
import williams from './material/WilliamsLogo.svg';
import laffer from './material/LafferLogo.svg';
import linkedin from './material/LinkedIn.svg';
import hsk from './material/ConfuciusLogo.svg';
import camera from './material/camera.svg';

/* Resume Doc */
import resume from './material/resume.pdf';

/* Display function */
const App = () => {

	/* Sections of page */
	const sections = [
		'About Me',
		'Experience',
		'Extracurriculars',
		'Skills'
	];

	/* Function that normalizes title to href */
	const toHref = (title) => {
    return '#' + title.toLowerCase().split(' ').join('-');
  };

	/* Function that creates array of nav items for sidebar use */
	const createNavItems = sections.map((section) => ({
		name: section,
		id: section,
		href: toHref(section),
	}));

	/* Array of contact links for desktop displays */
	const myContactInfo = [
		{
			label: 'nss2@williams.edu',
			href: 'mailto:nss2@williams.edu',
			iconType: 'logoGmail',
			size: 's',
			color: 'text'
		},
		{
			label: 'LinkedIn',
			href: 'https://www.linkedin.com/in/nsyee333/',
			iconType: linkedin,
			size: 's',
			color: 'text'
		},
		{
			label: 'GitHub',
			href: 'https://github.com/n-szeto',
			iconType: 'logoGithub',
			size: 's',
			color: 'text'
		}
	];

	/* Array of contact links for mobile displays */
	const myContactInfoMobile = [
		{
			label: 'nss2@williams.edu',
			href: 'mailto:nss2@williams.edu',
			iconType: 'logoGmail',
			size: 'l'
		},
		{
			label: 'LinkedIn',
			href: 'https://www.linkedin.com/in/nsyee333/',
			iconType: linkedin,
			size: 'l'
		},
		{
			label: 'GitHub',
			href: 'https://github.com/n-szeto',
			iconType: 'logoGithub',
			size: 'l'
		},
		{
			label: 'Resume',
			href: resume,
			iconType: 'documents',
			size: 'l'
		}
	];

	/* Return components for display */
  return (
		<div className='App'>

			{/* 'Header' for mobile display */}
			<EuiCollapsibleNavGroup
	      title='Nathan Szeto'
	      titleSize='l'
	      isCollapsible={true}
	      initialIsOpen={false}
	      background='dark'>

				{/* Contact links for mobile display */}
	      <EuiListGroup listItems={myContactInfoMobile} />

    	</EuiCollapsibleNavGroup>

			{/* Profile picture for mobile display */}
			<EuiImage
				className='mobile-pic'
				alt={'Nathan Szeto'}
				url={nszeto}
				hasShadow={true}
				style={{ borderRadius: '50%', objectFit: 'cover' }} />

				<EuiSpacer />

			{/* Page component */}
			<EuiPage restrictWidth={true}>

				{/* Sidebar component for desktop display */}
				<EuiPageSideBar>

					{/* Profile picture for desktop display */}
					<EuiImage
						size='l'
						alt={'Nathan Szeto'}
						url={nszeto}
						hasShadow={true}
						style={{ borderRadius: '2%', objectFit: 'cover' }} />

						<EuiSpacer />

					{/* Page title for desktop display */}
					<EuiTitle><h1 className='my-name'>
						<strong>Nathan Szeto</strong>
					</h1></EuiTitle>

						<EuiSpacer size='xxl' />

					{/* Sidebar nav links */}
					<EuiSideNav items={createNavItems} />

						<EuiSpacer />

					{/* Special link for resume doc access for desktop display */}
					<EuiLink href={resume} color='text' className='resume-link'>
						Resume
					</EuiLink>

						<EuiSpacer size='xxl' />

					{/* Section for contact info in sidebar for desktop display */}
					<PageSection title='Contact Me'>

						{/* Contact links for desktop display */}
						<EuiListGroup className='desk-contact' listItems={myContactInfo} />

					</PageSection>

				</EuiPageSideBar>

				{/* Page body component w/ main content */}
				<EuiPageBody>

					{/* Section for About Me info */}
					<PageSection title='About Me'>

						<EuiText>
							Hello! I'm am currently a freshman student at Williams College as
							well as a prospective mathematics major. My professional interests
							include consulting, finance, and economic research. Soon I will be
							working at Laffer Associates as an economic research intern.
						</EuiText>

					</PageSection>

						<EuiSpacer />

					{/* Section for Experience info */}
					<PageSection title='Experience'>

						{/* Grid for storing EuiCards */}
						<EuiFlexGrid columns={1}>

							{/* EuiFlexItem wrapper for EuiFlexGrid compatability */}
							<EuiFlexItem>

								{/* Information presented in card format */}
								<EuiCard
									layout='horizontal'
									icon={<EuiIcon type={williams} size='xxl' />}
									title='Student Technology Consultant'
									description='Williams College, Sep 2019 - Mar 2020'>
									<EuiText><ul>
										<li>Assist clients w/ a variety of issues ranging from
												printing to network connectivity.</li>
										<li>Communicate w/ clients consistently to ensure issues are
												resolved and subsequently cataloged for future
												reference.</li>
									</ul></EuiText>
								</EuiCard>

							</EuiFlexItem>

							{/* EuiFlexItem wrapper for EuiFlexGrid compatability */}
							<EuiFlexItem>

								{/* Information presented in card format */}
								<EuiCard
									layout='horizontal'
									icon={<EuiIcon type={williams} size='xxl' />}
									title='Language Dept. Computer Lab Monitor'
									description='Williams College, Sep 2019 - Mar 2020'>
									<EuiText><ul>
										<li>
											Ensure that the computer lab remains a quiet environment
											for students looking to complete language-based work.
										</li>
										<li>Communicate with faculty members to facilitate equiqment
												rentals and class visits to the lab.</li>
									</ul></EuiText>
								</EuiCard>

							</EuiFlexItem>

							{/* EuiFlexItem wrapper for EuiFlexGrid compatability */}
							<EuiFlexItem>

								{/* Information presented in card format */}
								<EuiCard
									layout='horizontal'
									icon={<EuiIcon type={laffer} size='xxl' />}
									title='Economic Research Intern'
									description='Laffer Associates, Jul 2020 - Aug 2020'>
									<EuiText><ul>
										<li>Perform economic research through the usage of various
												databases such as Bloomberg Terminal.</li>
										<li>Craft flash notes to clients highlighting important
												actions the firm has recently undertaken.</li>
									</ul></EuiText>
								</EuiCard>

							</EuiFlexItem>

							{/* EuiFlexItem wrapper for EuiFlexGrid compatability */}
							<EuiFlexItem>

								{/* Information presented in card format */}
								<EuiCard
									layout='horizontal'
									icon={<EuiIcon type={williams} size='xxl' />}
									title='Mathematics Teaching Assistant'
									description='Williams College, Sep 2020 - Dec 2020'>
									<EuiText><ul>
										<li>
											Assist the professor with the grading of assignments.
										</li>
										<li>Guide students in the right direction when they come
												across conceptual obstacles.</li>
									</ul></EuiText>
								</EuiCard>

							</EuiFlexItem>

						</EuiFlexGrid>

					</PageSection>

						<EuiSpacer />

					{/* Section for Extracurricular info */}
					<PageSection title='Extracurriculars'>

						{/* Grid for storing EuiCards */}
						<EuiFlexGrid columns={2}>

							{/* EuiFlexItem wrapper for EuiFlexGrid compatability */}
							<EuiFlexItem>

								{/* Information presented in card format */}
								<EuiCard
									layout='vertical'
									title='The Williams Insight Publication'
									description='Williams College, Sep 2019 - Present'>
									<EuiText>
										Analyze market trends, generate hypotheses, and
										publish articles supporting those hypotheses.
									</EuiText>
								</EuiCard>

							</EuiFlexItem>

							{/* EuiFlexItem wrapper for EuiFlexGrid compatability */}
							<EuiFlexItem>

								{/* Information presented in card format */}
								<EuiCard
									layout='vertical'
									title='Economics Student Advisory Council'
									description='Williams College, Sep 2019 - Mar 2020'>
									<EuiText>
										Facilitate interaction between students and faculty
										of the Economics department through the organization
										of various events.
									</EuiText>
								</EuiCard>

							</EuiFlexItem>

							{/* EuiFlexItem wrapper for EuiFlexGrid compatability */}
							<EuiFlexItem>

								{/* Information presented in card format */}
								<EuiCard
									layout='vertical'
									title='Williams Students Online'
									description='Williams College, Mar 2020 - Present'>
									<EuiText>
										Develop skills in HTML, CSS, Javascript, and React for use
										in the development of student-oriented webpages.
									</EuiText>
								</EuiCard>

							</EuiFlexItem>

							{/* EuiFlexItem wrapper for EuiFlexGrid compatability */}
							<EuiFlexItem>

								{/* Information presented in card format */}
								<EuiCard
									layout='vertical'
									title='Minority Coalition Steering Board'
									description='Williams College, May 2020 - Present'>
									<EuiText>
										Facilitate communication between school admin and the many
										minority-related student groups on campus.
									</EuiText>
								</EuiCard>

							</EuiFlexItem>

						</EuiFlexGrid>

					</PageSection>

					<EuiSpacer />

					{/* Section for Extracurricular info */}
					<PageSection title='Skills'>

						{/* Grid for storing EuiCards */}
						<EuiFlexGrid columns={2}>

							{/* EuiFlexItem wrapper for EuiFlexGrid compatability */}
							<EuiFlexItem>

								{/* Information presented in card format */}
								<EuiCard
									layout='vertical'
									icon={<EuiIcon type={hsk} size='xxl' />}
									title='Hanyu Shuiping Kaoshi (HSK) Level 5'
									description='Peking University, Apr 2019'
									footer={
										<EuiButton
											aria-label='Got to Hanyu Shuiping Kaoshi (HSK) Level 5'
											href='https://en.wikipedia.org/wiki/Hanyu_Shuiping_Kaoshi'
										>
											Learn More
										</EuiButton> }>
									<EuiText>
										Took HSK exam after spending one academic year in Beijing
										while studying the Chinese Language.
									</EuiText>
								</EuiCard>

							</EuiFlexItem>

							{/* EuiFlexItem wrapper for EuiFlexGrid compatability */}
							<EuiFlexItem>

								{/* Information presented in card format */}
								<EuiCard
									layout='vertical'
									icon={<EuiIcon type='compute' size='xxl' />}
									title='Computer Programming & Web Development'
									description='Java, HTML, CSS'
									footer={
										<EuiButton
											aria-label='Got to Computer Programming & Web Development'
											href='https://github.com/n-szeto?tab=repositories'>
											My Repos
										</EuiButton> }>
									<EuiText>
										Understands programming concepts like classes, recursion,
										sorting, etc. Also built this webpage.
									</EuiText>
								</EuiCard>

							</EuiFlexItem>

							{/* EuiFlexItem wrapper for EuiFlexGrid compatability */}
							<EuiFlexItem>

								{/* Information presented in card format */}
								<EuiCard
									layout='vertical'
									icon={<EuiIcon type={camera} size='xxl' />}
									title='Photography & Visual Editing'
									description='DSLR usage & Photoshop'
									footer={
										<EuiButton
											aria-label='Got to Photography & Visual Editing'
											href='https://www.behance.net/nsyee'>
											My Portfolio
										</EuiButton> }>
									<EuiText>
										Understands aperture, shutter speeds, and ISO and basic
										design principles.
									</EuiText>
								</EuiCard>

							</EuiFlexItem>

						</EuiFlexGrid>

					</PageSection>

				</EuiPageBody>

			</EuiPage>

		</div>
  );
};

export default App;
