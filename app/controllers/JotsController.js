import { AppState } from "../AppState.js";
import { jotServices } from "../services/JotServices.js";
import { getFormData } from "../utils/FormHandler.js";
import { Pop } from "../utils/Pop.js";
import { setHTML } from "../utils/Writer.js";





export class JotsController {
  constructor(data) {

    console.log('gettin jotty with it');
    AppState.on('activeJot', this.drawActiveJot)
    AppState.on('jots', this.drawAllJots)

    jotServices.loadJots()
    this.drawAllJots()

  }


  createNewJotTitle() {

  }


  createNewJot() {
    try {
      event.preventDefault()
      const form = event.target
      // debugger
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
  // createNewJot() {
  //   try {
  //     event.preventDefault()
  //     const form = event.target
  //     const newJot = getFormData(form)

  //     jotServices.setNewJot(newJot)
  //     // @ts-ignore
  //     form.reset()
  //   }
  //   catch (error) {
  //     console.error('[CREATING NEW JOT] ', error);
  //     window.alert(error.message)
  //   }
  // }



  drawActiveJot() {
    // const activeJot = AppState.activeJot
    AppState.emit('jots')
    document.getElementById('home-content').classList.add('d-none')
    document.getElementById('editor-view').classList.remove('d-none')
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


  setActiveJot(jotID) {
    console.log('setactive controller: ', jotID);
    jotServices.setActiveJot(jotID)
  }

  drawAllJots() {
    const allJots = AppState.jots
    let jotsContent = ''
    allJots.forEach(jot => jotsContent += jot.jotListTemplate)
    setHTML('jot-list', jotsContent)
    document.getElementById('editor-view').classList.add('d-none')
    document.getElementById('home-content').classList.remove('d-none')


    if (AppState.jots.length == 1) {
      let jotCounter = document.getElementById('jot-count')
      jotCounter.innerHTML = `
      <small class="text-secondary fw-lighter w-75 d-block">Showing ${AppState.jots.length} Jot</small>
      <hr class="text-light w-75">
    `
    } else if (AppState.jots.length > 1) {
      let jotCounter = document.getElementById('jot-count')
      jotCounter.innerHTML = `
      <small class="text-secondary fw-lighter w-75 d-block">Showing ${AppState.jots.length} Jots</small>
      <hr class="text-light w-75">
    `
    }
  }

  trashJot() {
    const wantsToDestroy = window.confirm("Are you sure you want to delete this?")

    if (wantsToDestroy == false) {
      return
    }
    console.log('🙅 destroying this report ');

    jotServices.trashJot()
    this.drawAllJots()
  }


}



