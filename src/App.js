import React, { useState } from 'react';
import {
	EuiAccordion,
	EuiAvatar,
  EuiButton,
  EuiCallOut,
	EuiCard,
	EuiCode,
	EuiCollapsibleNavGroup,
	EuiPageContentBody,
	EuiPageContentHeader,
	EuiFlexGrid,
	EuiFlexGroup,
	EuiFlexItem,
	EuiFlyout,
	EuiFlyoutBody,
	EuiFlyoutHeader,
	EuiHeader,
	EuiHeaderLink,
	EuiHeaderLinks,
	EuiHeaderLogo,
	EuiHeaderSection,
	EuiHeaderSectionItem,
	EuiIcon,
	EuiImage,
	EuiLink,
	EuiListGroup,
	EuiListGroupItem,
	EuiPage,
	EuiPageBody,
	EuiPageContent,
	EuiPageContentheader,
	EuiPageContentHeaderSection,
	EuiPageHeader,
	EuiPageHeaderSection,
	EuiPageSideBar,
  EuiPanel,
	EuiScreenReaderOnly,
	EuiSideNav,
	EuiSpacer,
	EuiText,
	EuiTitle,
} from '@elastic/eui';

import '@elastic/eui/dist/eui_theme_amsterdam_light.css';
import './App.css';
import PageSection from './PageSection';

import nszeto from './material/ProfilePic.png';
import resume from './material/resume.pdf';
import linkedin from './material/LinkedIn.svg';
import williams from './material/WilliamsLogo.svg';
import hsk from './material/ConfuciusLogo.svg';
import camera from './material/camera.svg';
import laffer from './material/LafferLogo.svg';

const App = () => {

	const sections = [
		'About Me',
		'Experience',
		'Extracurriculars',
		'Skills'
	];

	const toHref = (title) => {
    return '#' + title.toLowerCase().split(' ').join('-');
  };

	const createNavItems = sections.map((section) => ({
		name: section,
		id: section,
		href: toHref(section),
	}));

	const myContactInfo = [
		{
			label: 'nss2@williams.edu',
			iconType: 'logoGmail',
			href: 'mailto:nss2@williams.edu',
			color: 'text',
			size: 's',
		},
		{
			label: 'LinkedIn',
			href: 'https://www.linkedin.com/in/nsyee333/',
			color: 'text',
			iconType: linkedin,
			size: 's',
		},
		{
			label: 'GitHub',
			href: 'https://github.com/n-szeto',
			color: 'text',
			iconType: 'logoGithub',
			size: 's',
		}
	];

	const myContactInfoMobile = [
		{
			label: 'nss2@williams.edu',
			iconType: 'logoGmail',
			href: 'mailto:nss2@williams.edu',
			size: 'l',
		},
		{
			label: 'LinkedIn',
			href: 'https://www.linkedin.com/in/nsyee333/',
			iconType: linkedin,
			size: 'l',
		},
		{
			label: 'GitHub',
			href: 'https://github.com/n-szeto',
			iconType: 'logoGithub',
			size: 'l',
		}
	];

  return (
		<div className="App">

			<EuiCollapsibleNavGroup
	      title="Nathan Szeto"
	      titleSize="l"
	      isCollapsible={true}
	      initialIsOpen={false}
	      background="dark">
	      <EuiListGroup listItems={myContactInfoMobile} />
    	</EuiCollapsibleNavGroup>

			<EuiImage
				className="mobile-pic"
				alt={'Nathan Szeto'}
				url={nszeto}
				hasShadow={true}
				style={{ borderRadius: '50%', objectFit: 'cover' }}
			/>

			<EuiSpacer />

			<EuiPage restrictWidth={true}>

				<EuiPageSideBar>

					<EuiImage
						size="l"
						alt={'Nathan Szeto'}
						url={nszeto}
						hasShadow={true}
						style={{ borderRadius: '2%', objectFit: 'cover' }}
					/>

					<EuiSpacer />

					<EuiTitle><h1 className="my-name"><strong>Nathan Szeto</strong></h1></EuiTitle>

					<EuiSpacer />

					<EuiSideNav
						items={createNavItems}
					/>

					<EuiSpacer />

					<EuiLink href={resume} color="text" className="resume-link">
						<strong>Resume</strong>
					</EuiLink>

					<EuiSpacer size="xxl" />

					<PageSection title='Contact Me'>

						<EuiListGroup className="desk-contact" listItems={myContactInfo} />

					</PageSection>

				</EuiPageSideBar>

				<EuiPageBody>

					<PageSection title='About Me'>
						<EuiText>
							<p>
								Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
								eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
								ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
								aliquip ex ea commodo consequat. Duis aute irure dolor in
								reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
								pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
								culpa qui officia deserunt mollit anim id est laborum.
							</p>
						</EuiText>
					</PageSection>

					<EuiSpacer />

					<PageSection title='Experience'>
						<EuiFlexGrid columns={1}>

							<EuiFlexItem>
								<EuiCard
									layout="horizontal"
									icon={<EuiIcon type={williams} size='xxl' />}
									title="Student Technology Consultant"
									description="Williams College, Sep 2019 - Mar 2020"
								>
									<EuiText><ul>
										<li>Assist students and faculty w/ a variety of issues ranging
												from printing to network connectivity</li>
										<li>Communicate w/ clients consistently to ensure issues are
												resolved and subsequently cataloged for future reference</li>
									</ul></EuiText>
								</EuiCard>
							</EuiFlexItem>

							<EuiFlexItem>
								<EuiCard
									layout="horizontal"
									icon={<EuiIcon type={williams} size='xxl' />}
									title="Language Dept. Computer Lab Monitor"
									description="Williams College, Sep 2019 - Mar 2020"
								>
									<EuiText><ul>
										<li>A little bit of filler text.</li>
										<li>A little bit of filler text.</li>
									</ul></EuiText>
								</EuiCard>
							</EuiFlexItem>

							<EuiFlexItem>
								<EuiCard
									layout="horizontal"
									icon={<EuiIcon type={laffer} size='xxl' />}
									title="Economic Research Intern"
									description="Laffer Associates, Jul 2020 - Aug 2020"
								>
									<EuiText><ul>
										<li>A little bit of filler text.</li>
										<li>A little bit of filler text.</li>
									</ul></EuiText>
								</EuiCard>
							</EuiFlexItem>

							<EuiFlexItem>
								<EuiCard
									layout="horizontal"
									icon={<EuiIcon type={williams} size='xxl' />}
									title="Mathematics Teaching Assistant"
									description="Williams College, Sep 2020 - Dec 2020"
								>
									<EuiText><ul>
										<li>A little bit of filler text.</li>
										<li>A little bit of filler text.</li>
									</ul></EuiText>
								</EuiCard>
							</EuiFlexItem>

						</EuiFlexGrid>
					</PageSection>

					<EuiSpacer />

					<PageSection title='Extracurriculars'>
						<EuiFlexGrid columns={2}>
							<EuiFlexItem>
								<EuiCard
									layout="vertical"
									title="The Williams Insight Publication"
									description="Williams College, Sep 2019 - Present"
								>
									<EuiText>A little bit of filler text.</EuiText>
								</EuiCard>
							</EuiFlexItem>
							<EuiFlexItem>
								<EuiCard
									layout="vertical"
									title="Economics Student Advisory Council"
									description="Williams College, Sep 2019 - Mar 2020"
								>
									<EuiText>A little bit of filler text.</EuiText>
								</EuiCard>
							</EuiFlexItem>
							<EuiFlexItem>
								<EuiCard
									layout="vertical"
									title="Williams Students Online"
									description="Williams College, Mar 2020 - Present"
								>
									<EuiText>A little bit of filler text.</EuiText>
								</EuiCard>
							</EuiFlexItem>
							<EuiFlexItem>
								<EuiCard
									layout="vertical"
									title="Minority Coalition Steering Board"
									description="Williams College, May 2020 - Present"
								>
									<EuiText>A little bit of filler text.</EuiText>
								</EuiCard>
							</EuiFlexItem>
						</EuiFlexGrid>
					</PageSection>

					<EuiSpacer />

					<PageSection title='Skills'>

						<EuiFlexGrid columns={2}>

							<EuiFlexItem>
								<EuiCard
									layout="vertical"
									icon={<EuiIcon type={hsk} size='xxl' />}
									title="Hanyu Shuiping Kaoshi (HSK) Level 5"
									description="Peking University, Apr 2019"
									footer={
										<EuiButton aria-label="Got to Hanyu Shuiping Kaoshi (HSK) Level 5"
											href="https://en.wikipedia.org/wiki/Hanyu_Shuiping_Kaoshi">
											Learn More
										</EuiButton>
									}
								>
									<EuiText>A little bit of filler text.</EuiText>
								</EuiCard>
							</EuiFlexItem>

							<EuiFlexItem>
								<EuiCard
									layout="vertical"
									icon={<EuiIcon type='compute' size='xxl' />}
									title="Computer Programming & Web Development"
									description="Java, HTML, CSS"
									footer={
										<EuiButton
											aria-label="Got to Computer Programming & Web Development"
											href="https://github.com/n-szeto?tab=repositories"
										>
											My Projects
										</EuiButton>
									}
								>
									<EuiText>A little bit of filler text.</EuiText>
								</EuiCard>
							</EuiFlexItem>

							<EuiFlexItem>
								<EuiCard
									layout="vertical"
									icon={<EuiIcon type={camera} size='xxl' />}
									title="Photography & Visual Editing"
									description="DSLR usage & Photoshop"
									footer={
										<EuiButton
											aria-label="Got to Photography & Visual Editing"
											href="https://www.behance.net/nsyee"
										>
											My Portfolio
										</EuiButton>
									}
								>
									<EuiText>A little bit of filler text.</EuiText>
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
