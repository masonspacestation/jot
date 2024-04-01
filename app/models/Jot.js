import { generateId } from "../utils/GenerateId.js"



export class Jot {


  constructor(data) {
    this.id = generateId()
    this.title = data.title
    this.body = data.body || ''
    this.subject = data.subject
    this.wordCount = data.wordCount
    this.jotColor = data.jotColor
    // this.timeCreated = null
    // this.timeEdited = null
    this.timeCreated = data.timeCreated == null ? new Date() : new Date(data.timeCreated)
    this.timeEdited = data.timeEdited == null ? new Date() : new Date(data.timeEdited)
  }




  get activeJotEditorTemplate() {
    return `
    <section id="test-form" class="container-fluid bg-dark d-flex justify-content-center align-content-center">
    <div id="body-card" class="col-12 rounded rounded-2 w-50 h-50 m-5 m-auto p-5">
      <div class="row justify-content-around">
        <div class="col-11">
  
          <h3 class="text-secondary"><i class="fs-6 text-end mdi mdi-circle-double"></i> ${this.title}</h3>
  
          <label for="jotBody"></label>
          <textarea onblur="app.JotsController.setJotBody()" name="body" class="h-75 w-100"
            id="jotBody">${this.body}</textarea>
          <div class="row justify-content-between">
            <span class="text-secondary w-50 text-start">Last Edited: ${this.LastViewedDateAndTime}</span>
            <span class="text-secondary w-50 text-end">Created: ${this.CreatedDate}</span>
          </div>
        </div>

        
        <div class="col-1 py-5 text-end">
          <button type="button" onclick="app.JotsController.drawAllJots()" class="btn btn-outline-secondary rounded-circle fs-4 my-5" data-toggle="tooltip"
            data-placement="right" title="Back to all Jots">
            <i class="mdi mdi-notebook"></i>
          </button>
          <button type="button" onclick="app.JotsController.trashJot('${this.id}')" class="btn btn-outline-secondary rounded-circle fs-4 my-5" data-toggle="tooltip"
            data-placement="right" title="Delete Jot aka Jot Not">
            <i class="mdi mdi-trash-can"></i>
          </button>
        </div>
      </div>
    </div>
  </section>
  `
  }

  //   `
  //   <section id="test-form" class="container-fluid bg-dark d-flex justify-content-center align-content-center">
  //   <div id="body-card" class="col-12 rounded rounded-2 w-50 h-50 m-5 m-auto p-5">
  //     <div class="row justify-content-around">
  //       <div class="col-11">

  //         <h3 class="text-secondary"><i class="fs-6 text-end mdi mdi-circle-double"></i>${jots.length} ${this.title}</h3>

  //         <label for="jotBody"></label>
  //         <textarea onblur="app.JotsController.setJotBody()" name="body" class="h-75 w-100"
  //           id="jotBody">${this.body}</textarea>
  //         <div class="row justify-content-between">
  //           <span class="text-secondary w-50 text-start">Last Edited: ${this.LastViewedDateAndTime}</span>
  //           <span class="text-secondary w-50 text-end">Created: ${this.CreatedDate}</span>
  //         </div>
  //       </div>
  //       <div class="col-1 py-5 text-end">

  //         <button type="button" onclick="app.JotsController.drawAllJots()" class="btn btn-outline-secondary rounded-circle fs-4 my-5" data-toggle="tooltip"
  //           data-placement="right" title="Back to all Jots">
  //           <i class="mdi mdi-notebook"></i>
  //         </button>
  //         <button type="button" onclick="app.JotsController.trashJot('${this.id}')" class="btn btn-outline-secondary rounded-circle fs-4 my-5" data-toggle="tooltip"
  //           data-placement="right" title="Delete Jot aka Jot Not">
  //           <i class="mdi mdi-trash-can"></i>
  //         </button>
  //       </div>
  //     </div>
  //   </div>
  // </section>
  // `

  get newJotTitleForm() {
    return `
  
  `
  }


  get jotListTemplate() {
    return `
    <button onclick="app.JotsController.setActiveJot('${this.id}')" class="btn btn-outline-secondary w-auto text-secondary"><i class="mdi mdi-circle-double text-warning"></i> ${this.title}</button>
    `
  }


  get CreatedDate() {
    return this.timeCreated.toLocaleDateString() // 3/28/2024
  }

  get CreatedTime() {
    return this.timeEdited.toLocaleTimeString() // 12:28:11 PM
  }

  get LastViewedDateAndTime() {
    return this.timeEdited.toLocaleString() // 3/28/2024, 2:48:19 PM
  }







  //---------------------------------------->>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
}