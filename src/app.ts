import { RouterConfiguration, Router } from 'aurelia-router';
import { PLATFORM } from 'aurelia-pal';
export class App {

    router: Router;

    configureRouter(config: RouterConfiguration, router: Router) {
      config.map([
        {
          route: ["", "part-composition"],
          name: "composition",
          moduleId: PLATFORM.moduleName("./part-composition/demo"),
          nav: true,
          title: "part-composition"
        }
      ]);

      this.router = router;
    }
}
