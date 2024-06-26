import projectsData from '../data/projects';

export default class ProjectsAPI {
  constructor() {
    this.page = 1;
    this.perPage = 3;
    this.lastPage = Math.floor(projectsData.length / this.perPage);
  }

  fetchProjects() {
    if (this.page === this.lastPage) {
      return new Promise((resolve, reject) => {
        // * Імітація відповіді від сервера
        setTimeout(() => {
          resolve(
            projectsData.slice(
              this.page * this.perPage - this.perPage,
              projectsData.length
            )
          );
        }, 500);
      });
    }

    return new Promise((resolve, reject) => {
      // * Імітація відповіді від сервера (з затримкою)
      setTimeout(() => {
        resolve(
          projectsData.slice(
            this.page * this.perPage - this.perPage,
            this.page * this.perPage
          )
        );
      }, 500);
    });

    // * Моментальна відповідь
    // return Promise.resolve(
    //   projectsData.slice(
    //     this.page * this.perPage - this.perPage,
    //     this.page * this.perPage
    //   )
    // ).then(projects => {
    //   this.incrementPage();
    //   return projects;
    // });
  }

  incrementPage() {
    this.page += 1;
  }

  resetPage() {
    this.page = 1;
  }
}
