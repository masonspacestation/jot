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
  <div id="editor-bg" class="d-flex text-center justify-content-center bg-dark">
    <div id="active-jot-editor" class="col-8 card bg-light shadow rounded rounded-2 p-5">

    <div id="body-editor" class="w-75 m-5 p-3 text-start">
      <section class="row">
        <div class="card">
          <h3>${this.title}</h3>
  
          <div>
            <label for="jotBody">Jot Body</label>
            <textarea onblur="app.JotsController.setJotBody()" name="body" id="jotBody">${this.body}</textarea>
          </div>
  
        </div>
      </section>
    </div>

    </div>
  </div>





      `
  }





  get newJotTitleForm() {
    return `
    <h3>${this.title}</h3>

  `
  }


  get jotListTemplate() {
    return `
    <button onclick="app.JotsController.setActiveJot('${this.id}')" class="btn btn-outline-light w-auto text-light"><i class="mdi mdi-circle-double text-warning"></i> ${this.title}</button>

    
    `
  }

  /* <div onclick="app.JotsController.setActiveJot('${this.id}')" class="col-12 selectable" role="button">
        <div class="d-flex gap-4 fs-2">
          <span>${this.title} | ${this.timeEdited}</span>
        
        </div>
      </div> */


  get CreatedDate() {
    return this.timeCreated.toLocaleDateString() // 3/28/2024
  }

  get CreatedTime() {
    return this.timeEdited.toLocaleTimeString() // 12:28:11 PM
  }

  get LastViewedDateAndTime() {
    return this.timeEdited.toLocaleString() // 3/28/2024, 2:48:19 PM
  }
  //   <div class="col-8 mt-3 p-3">
  //   <form onsubmit="app.JotsController.drawTitleForm()">
  //     <label for="title">Title of New Jot</label>
  //     <input type="text" name="title" id="title" class="form-control">
  //     <button class="btn" type="submit">Submit</button>
  //   </form>
  // </div>






  //---------------------------------------->>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
}