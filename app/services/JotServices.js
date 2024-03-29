import { AppState } from "../AppState.js";
import { Jot } from "../models/Jot.js";
import { loadState, saveState } from "../utils/Store.js";

class JotServices {

  setNewJotTitle(newJotTitle) {
    // console.log(newJotTitle, 'passed to service');
    const newJot = new Jot(newJotTitle)

    newJot.timeCreated = Date()
    AppState.jots.push(newJot)
    console.log('👋', AppState.jots);
    this.setActiveJot(newJot.id)
  }


  setActiveJot(jotId) {
    // console.log('newjot sent to set active in service: ', jotId);
    const foundJot = AppState.jots.find(jot => jot.id == jotId)
    AppState.activeJot = foundJot
    foundJot.timeEdited = Date()
    console.log('🎯 ', AppState.activeJot);



  }


  setJotBody(newJotBody) {

    console.log('👉 jot body passed to service ', newJotBody);
  }


  saveJot() {
    saveState('jots', AppState.jots)
  }

  loadJots() {
    const jotsFromLocalStorage = loadState('jots', [Jot])
    AppState.jots = jotsFromLocalStorage
  }






}

export const jotServices = new JotServices