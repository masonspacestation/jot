import { AppState } from "../AppState.js";
import { jotServices } from "../services/JotServices.js";
import { getFormData } from "../utils/FormHandler.js";
import { setHTML } from "../utils/Writer.js";





export class JotsController {
  constructor(data) {

    console.log('✒️ the jots controller is loaded');
    AppState.on('activeJot', this.drawActiveJot)


  }



  createNewJot() {

    // const form = event.target
    // const jotBody = getFormData(form)
  }

  // drawTitleForm() {
  //   event.preventDefault()
  //   console.log('creating jot');
  //   setHTML('new-jot-title-form', AppState.activeJot.newJotTitleForm)
  // }


  createNewJotTitle() {
    try {
      event.preventDefault()
      const form = event.target
      const newJotTitle = getFormData(form)

      jotServices.setNewJotTitle(newJotTitle)
    }
    catch {
      console.log('not this time');
    }
  }

  drawActiveJot(jotId) {
    const activeJot = AppState.activeJot
    AppState.emit('jots')
    setHTML('active-jot-editor', AppState.activeJot.activeJotTemplate)
  }


  setJotBody(jotId) {
    try {
      event.preventDefault()
      let jotBody = AppState.jots.find(jot => jot.id == jotId)
      jotServices.setJotBody(jotBody)
      console.log(jotBody);
    }
    catch {
      console.log('try again');
    }
  }

  // setActiveJot(newJot) {
  //   console.log('setactive controller: ', newJot);
  //   jotServices.setActiveJot(newJot)
  // }








  // setNewJotTitle(newJotId) {
  //   let newJot = AppState.jots.find(jot => jot.id == newJotId)
  //   jotServices.setNewJotTitle(newJot)
  // }


}