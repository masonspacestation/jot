import { AppState } from "../AppState.js";
import { jotServices } from "../services/JotServices.js";
import { getFormData } from "../utils/FormHandler.js";
import { setHTML } from "../utils/Writer.js";





export class JotsController {
  constructor(data) {

    console.log('✒️ the jots controller is loaded');
    AppState.on('activeJot', this.drawActiveJot)
    AppState.on('jots', this.drawAllJots)

    jotServices.loadJots()
    this.drawAllJots()
  }



  createNewJot() {
    try {
      event.preventDefault()
      const form = event.target
      const newJot = getFormData(form)

      jotServices.setNewJot(newJot)
      // @ts-ignore
      form.reset()
    }
    catch (error) {
      console.error('[CREATING NEW JOT] ', error);
      window.alert(error.message)
    }
  }



  drawActiveJot() {
    // const activeJot = AppState.activeJot
    AppState.emit('jots')



    // const editorBgToAdd = document.getElementById('editor-view')
    // editorBgToAdd.add()
    setHTML('editor-view', AppState.activeJot.activeJotEditorTemplate)
  }


  setJotBody() {
    event.preventDefault()
    const form = event.target

    // @ts-ignore
    const newJotBody = form.value
    jotServices.setJotBody(newJotBody)

    // REVIEW why is this wrong?
    // const newJotBody = event.target
    // console.log(newJotBody);

    // try {
    //   event.preventDefault()
    //   let foundJot = AppState.jots.find(jot => jot.id == jotId)
    //   const newBody = foundJot.body
    //   jotServices.setJotBody(newBody)
    //   console.log('🔮 ', foundJot);
    // }
    // catch {
    //   console.log('try again');
    // }
  }



  // click on jot name - pass id to click event -  service sets active jot equal to this new one - active jot will draw through listener

  setActiveJot(jotID) {
    // console.log('setactive controller: ', jotID);
    jotServices.setActiveJot(jotID)
  }

  drawAllJots() {
    // REVIEW __________
    // const editorBgToRemove = document.getElementById('editor-view')
    // editorBgToRemove.remove()


    const allJots = AppState.jots
    let jotsContent = ''
    allJots.forEach(jot => jotsContent += jot.jotListTemplate)
    setHTML('jot-list', jotsContent)

  }






}