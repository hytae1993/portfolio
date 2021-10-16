$(document).ready(() => {
    render_projects('featured');
})


let render_projects = (slug) => {
    let projects_area = $('.projects-wrapper');

    $('.white-button').removeClass('white-button-hover');
    $(`#${slug}`).addClass('white-button-hover');

    let projects_obj = [
        {
            image: 'assets/images/bi-partition.jpg',
            link: 'https://github.com/hytae1993/Bi-Partitioning-with-Classification',
            title: 'Bi-Partitioning',
            demo: false,
            technologies: ['Segmentation', 'Weakly-Supervised', 'Mumford-Shah'],
            description: "Bi-Partitioning the Image to the foreground and the background with classification loss.",
            categories: ['published', 'research']
        },
        {
            image: 'assets/images/diffusion.jpg',
            link: 'https://github.com/hytae1993/Classification-with-Anisotropic-Diffusion',
            title: 'Classification with Diffusion',
            demo: false,
            technologies: ['Classification', 'Anisotropic Diffusion', 'Isotropic Diffusion'],
            description: "Compare the accuracy of classification repect to the diffusion process.",
            categories: ['research']
        },
        {
            image: 'assets/images/private1.png',
            link: 'https://github.com/hytae1993/Segmentation-by-Adversarial-Learning',
            title: 'Segmentation by Adversarial Learning',
            demo: false,
            technologies: ['Segmentation', 'Mumford-Shah'],
            description: "Segmentation by Adversarial Learning with the Mumford-Shah functional. It\'s in a private state right now.",
            categories: ['research']
        },
        {
            image: 'assets/images/private2.png',
            link: 'https://github.com/hytae1993/Segmentation-driven-by-Attention',
            title: 'Segmentation driven by attention',
            demo: false,
            technologies: ['Segmentation', 'Mumford-Shah'],
            description: "Segmentation with the classification loss and the Mumford-Shah loss. It\'s in a private state right now.",
            categories: ['research']
        }
    ]

    let projects = [];
    if(slug == 'all') {
        projects = projects_obj.map(project_mapper);
    } 
    else {
        projects = projects_obj.filter(project => project.categories.includes(slug)).map(project_mapper);
    }
    projects_area.hide().html(projects).fadeIn();
}

let project_mapper = project => {
    return `
        <div class="wrapper">
                
            <div class="card radius shadowDepth1">

                ${project.image ? 
                    `<div class="card__image border-tlr-radius">
                        <a href="${project.link}">
                            <img src="${project.image}" alt="image" id="project-image" class="border-tlr-radius">
                        </a>
                    </div>`           
                : ''}

        
                <div class="card__content card__padding">
        
                    <article class="card__article">
                        <h2><a href="${project.link}">${project.title}</a></h2>
        
                        <p class="paragraph-text-normal">${project.description} ${project.demo ? `<a href="${project.demo}">Demo</a>` : ''}</p>
                    </article>

                                
                    <div class="card__meta">
                        ${project.technologies.map(tech =>
                            `<span class="project-technology paragraph-text-normal">${tech}</span>`
                        ).join('')}
                    </div>

                </div>
            </div>
        </div>
    `
}

let selected = (slug) => {
    render_projects(slug);
}