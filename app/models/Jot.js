import { generateId } from "../utils/GenerateId.js"



export class Jot {


  constructor(data) {
    this.id = generateId()
    this.title = data.title
    this.body = data.body || ''
    this.subject = data.subject
    this.wordCount = data.wordCount
    this.jotColor = data.jotColor
    this.timeCreated = null
    this.timeEdited = null
  }


  get activeJotTemplate() {
    return `
    <div class="card">
      <h3>${this.title}</h3>
     
      <div>
      <label for="jotBody">Jot Body</label>
      <textarea onblur="app.JotsController.setJotBody()" name="body" id="jotBody">${this.body}</textarea>
      </div>
      
      </div>
      `
  }


  //  <form onsubmit="app.JotsController.setJotBody()" >
  //   <textarea name="body" id="jotBody">${this.body}</textarea>
  //   <button class="btn" type="submit">Submit</button>
  // </form>


  get newJotTitleForm() {
    return `
    <h3>${this.title}</h3>

  `
  }


  get jotListTemplate() {
    return `
    <div onclick="app.JotsController.setActiveJot('${this.id}')" class="col-12 selectable" role="button">
      <div class="d-flex gap-4 fs-3">
        <p>${this.title}</p>
      
      </div>
    </div>
    `
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