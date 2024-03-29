import { AppState } from "../AppState.js";
import { Jot } from "../models/Jot.js";

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
  // setJotBody(newJot) {
  //   throw new Error("Method not implemented.");
  // }

  // setJotBody(newJotBody) {

  //   console.log(newJotBody, 'passed to service');
  // }









}

export const jotServices = new JotServices