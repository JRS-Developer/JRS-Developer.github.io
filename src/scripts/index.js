// Imports
import Projects from './projects.js';

// Variables
const Header = document.getElementById('header');
const DemosContainer = document.querySelector('.hero-section__demo-container');
const AllDemos = document.querySelector('.hero-section__demos');
const ProjectGrid = document.querySelector('.project-grid');
const HeroIcons = document.getElementById('hero-section__icons');
const PrincipalTheme = {
	colors: {
		primary: '#ffff',
		alt: '#ff9f1c',
		background: '#001427',
	},
	font: {
		title: "'Rubik', sans-serif",
		body: "'Rubik', sans-serif",
	},
};

// Events

document.addEventListener('DOMContentLoaded', () => {
	ChangeHeader();
	AddProjects();
	ShowProjects();
});

document.addEventListener('scroll', () => {
	ChangeHeader();
	MoveBackgroundIcons();
});

// Functions
const ChangeHeader = () => {
	if (window.scrollY > 200) {
		Header.classList.add('header__scroll');
	} else {
		Header.className = 'header';
	}
};

const AddProjects = () => {
	AllDemos.innerHTML = '';
	AllDemos.appendChild(DemosContainer);
	DemosContainer.innerHTML = '';

	Projects.forEach((Project, index) => {
		if (index == 0) {
			const SelectedItem = `
            <div class="hero-section__demo-item--selected" id=${Project.id}>
                            <img
                                src=${Project.image}
                                alt=${Project.name}
                            />
                        </div>
            `;
			DemosContainer.insertAdjacentHTML('beforebegin', SelectedItem);

			// Aqui busco el unico elemento que tiene selected y lo paso a changetheme para en caso de dar click se cambie el tema de la página.
			const ClickSelectedItem = document.querySelector(
				'.hero-section__demo-item--selected'
			);
			ClickSelectedItem.addEventListener('click', () => {
				ChangeTheme(Project);
			});
		} else if (index != 0) {
			const ProjectItem = `
        <div class="hero-section__demo-item" id=${Project.id}>
                                <div class="demo__icon" id=${Project.id}-icon>
                                    <img
                                        class="demo__icon--next"
                                        src="/src/images/next-icon.svg"
                                        alt="Next"
                                    />
                                </div>
                                <img
                                    src=${Project.image}
                                    alt=${Project.name}
                                />
                            </div>
        `;
			DemosContainer.insertAdjacentHTML('afterbegin', ProjectItem);
		}
	});
	ChangeProject();
};

const ChangeTheme = (Changer) => {
	const root = document.documentElement;
	// Colors
	root.style.setProperty('--primary-color', Changer.colors.primary);
	root.style.setProperty('--primary-color-alt', Changer.colors.alt);
	root.style.setProperty('--body-bg-color', Changer.colors.background);

	// Fonts
	root.style.setProperty('--body-font', Changer.font.body);
	root.style.setProperty('--title-font', Changer.font.title);
};

const ChangeProject = () => {
	const DemoIcons = document.querySelectorAll('.demo__icon');
	DemoIcons.forEach((icon) => {
		icon.addEventListener('click', (e) => {
			const demo =
				e.target.parentElement.classList[0] == 'hero-section__demo-item'
					? e.target.parentElement
					: e.target.parentElement.parentElement;
			demo.className = 'hero-section__demo-item--selected';

			const NoSelected = Object.values(AllDemos.children).filter(
				(element) => {
					return element.hasAttribute('id') && element.id != demo.id;
				}
			);

			NoSelected.forEach((element) => {
				removeSelected(element);
			});

			ReplaceProject(demo, icon);
			const Changer = SearchProject(demo);
			ChangeTheme(Changer[0]);
		});
	});
};

const removeSelected = (element) => {
	element.className = 'hero-section__demo-item--unselected';
};

const StartFromBegin = () => {
	if (DemosContainer.children.length == 0) {
		const UndoIcon = `
        <div class="demo__icon" id="demo__icon--back__container">
            <img class="demo__icon--back" src="/src/images/left-turn-arrow.svg" alt="undo"/>
        </div>
        `;
		DemosContainer.innerHTML = UndoIcon;

		const ClickUndo = DemosContainer.querySelector(
			'#demo__icon--back__container'
		);
		ClickUndo.addEventListener('click', () => {
			AddProjects();
			ChangeTheme(PrincipalTheme);
		});
	}
};

const SearchProject = (demo) => {
	const Search = Object.values(Projects).filter((item) => {
		return demo.id == item.id;
	});

	return Search;
};

const ReplaceProject = (demo, icon) => {
	icon = icon.querySelector('img').getAttribute('src');
	DemosContainer.insertAdjacentElement('beforebegin', demo);

	StartFromBegin();
};

// #PROJECTS SECTION

const ShowProjects = () => {
	Projects.forEach((project) => {
		// Se crean los divs
		const Container = document.createElement('div');
		Container.className = 'project-container';
		const ProjectInfo = document.createElement('div');
		ProjectInfo.className = 'project-container__info';
		const ProjectTechnologies = document.createElement('div');
		ProjectTechnologies.className = 'project-technologies';

		// Se crean los elementos de cada tecnologia que posea el proyecto
		project.tech.forEach((tech) => {
			const TechInfo = `
            <div class="project-technology">
				<img
					class="project-technology__img"
					src=${tech.image}
					alt=${tech.name}
				/>
			</div>
            `;
			ProjectTechnologies.insertAdjacentHTML('beforeend', TechInfo);
		});

		// Se incertan los elementos
		ProjectInfo.appendChild(ProjectTechnologies);
		Container.appendChild(ProjectInfo);
		ProjectGrid.appendChild(Container);

		// Se coloca un boton para visitar el proyecto
		const ProjectVisit = `
        <button class="button project__visit__container">
            <a href=${project.link} target="_blank" class="project__visit">Visit Project</a>
        </button>
        `;
		ProjectInfo.insertAdjacentHTML('beforeend', ProjectVisit);

		// Se coloca la imagen del proyecto
		const ProjectImage = `
        <img
			class="project__img"
			src=${project.image}
			alt=${project.name}
		/>
        `;

		Container.insertAdjacentHTML('beforeend', ProjectImage);
	});
};

const MoveBackgroundIcons = () => {
	if (window.scrollY < 200) {
		HeroIcons.style.transform = `translateY(${window.scrollY}px)`;
	}
};
