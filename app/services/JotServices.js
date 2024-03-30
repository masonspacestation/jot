import { AppState } from "../AppState.js";
import { Jot } from "../models/Jot.js";
import { loadState, saveState } from "../utils/Store.js";
import { setHTML } from "../utils/Writer.js";

class JotServices {

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
    // console.log('newjot sent to set active in service: ', jotId);
    const activeJot = AppState.jots.find(jot => jot.id == jotId)
    AppState.activeJot = activeJot
    //@ts-ignore
    activeJot.timeEdited = Date()
    console.log('🎯 ', AppState.activeJot);



    this.saveJot()
  }


  setJotBody(newJotBody) {

    AppState.activeJot.body = newJotBody

    console.log(AppState.activeJot);
    this.saveJot()

    setHTML('active-jot-editor', '')
    AppState.emit('jots')
  }


  saveJot() {
    saveState('jots', AppState.jots)
  }

  loadJots() {
    const jotsFromLocalStorage = loadState('jots', [Jot])
    AppState.jots = jotsFromLocalStorage
    console.log("we've reached the service");

    // REVIEW __________
    // const editorBgToRemove = document.getElementById('active-jot-editor')
    // editorBgToRemove.remove()
  }






}

export const jotServices = new JotServices