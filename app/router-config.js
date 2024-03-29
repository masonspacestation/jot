import { ExamplesController } from "./controllers/ExamplesController.js";
import { HomeController } from "./controllers/HomeController.js";
import { Router } from "./utils/Router.js";
import { JotsController } from "./controllers/JotsController.js";


export const router = new Router([

  {
    path: '',
    view: 'app/views/JotView.html',
    controllers: [JotsController],
  }
])