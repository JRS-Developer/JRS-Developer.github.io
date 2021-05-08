import Projects from './projects.js';
const Header = document.getElementById('header');
const DemosContainer = document.querySelector('.hero-section__demo-container');
const AllDemos = document.querySelector('.hero-section__demos');
const PrincipalTheme = {
    colors: {
        primary: '#ffff',
        alt: '#ff9f1c',
        background: '#001427',
    },
};

document.addEventListener('DOMContentLoaded', () => {
    ChangeHeader();
    AddProjects();
});

document.addEventListener('scroll', () => {
    ChangeHeader();
});

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
    root.style.setProperty('--primary-color', Changer.colors.primary);
    root.style.setProperty('--primary-color-alt', Changer.colors.alt);
    root.style.setProperty('--body-bg-color', Changer.colors.background);
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
        <div class="demo__icon demo__icon--back">
            <img src="/src/images/left-turn-arrow.svg" alt="undo"/>
        </div>
        `;
        DemosContainer.innerHTML = UndoIcon;

        const ClickUndo = DemosContainer.querySelector('.demo__icon--back');
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
