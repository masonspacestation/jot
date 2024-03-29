import { AppState } from "../AppState.js";
import { jotServices } from "../services/JotServices.js";






export class JotsController {
  constructor(data) {

    console.log('✒️ the jots controller is loaded');







  }
  //this opens the title editor
  createNewJot(title) {

    console.log('controller creating new jot called ', title);

    let jotTitle = title
    jotServices.createNewJot(jotTitle)
  }

  setNewJotTitle(newJotId) {
    let newJot = AppState.jots.find(jot => jot.id == newJotId)
    jotServices.setNewJotTitle(newJot)
  }

  setJotBody(newJotId) {
    let newJot = AppState.jots.find(jot => jot.id == newJotId)
    jotServices.setJotBody(newJot)
  }
}