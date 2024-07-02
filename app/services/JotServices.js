import { AppState } from "../AppState.js";
import { JotsController } from "../controllers/JotsController.js";
import { Jot } from "../models/Jot.js";
import { loadState, saveState } from "../utils/Store.js";
import { setHTML } from "../utils/Writer.js";

class JotServices {
  trashJot() {
    const jotToDestroy = AppState.activeJot.id
    console.log('jot id', jotToDestroy);

    const indexOfJotToDestroy = AppState.jots.findIndex(jot => jot.id == jotToDestroy)

    if (indexOfJotToDestroy == -1) {
      console.log('Error finding Index');
      return
    }

    AppState.jots.splice(indexOfJotToDestroy, 1)
    this.saveJot()
  }

  setNewJot(newJotTitle) {
    // console.log(newJotTitle, 'passed to service');
    const newJot = new Jot(newJotTitle)

    // newJot.timeCreated = Date()
    AppState.jots.push(newJot)
    console.log('👋', AppState.jots);
    this.saveJot()

    this.setActiveJot(newJot.id)
  }


  setActiveJot(jotId) {
    const activeJot = AppState.jots.find(jot => jot.id == jotId)
    AppState.activeJot = activeJot
    //@ts-ignore
    activeJot.timeEdited = new Date()
    console.log('🎯 ', AppState.activeJot);



    this.saveJot()
  }


  setJotBody(newJotBody) {

    AppState.activeJot.body = newJotBody

    this.saveJot()

    setHTML('editor-view', '')
    AppState.emit('jots')
  }


  saveJot() {
    saveState('jots', AppState.jots)
  }

  loadJots() {
    const jotsFromLocalStorage = loadState('jots', [Jot])
    AppState.jots = jotsFromLocalStorage
    console.log("we've reached the service");
  }






}

export const jotServices = new JotServices