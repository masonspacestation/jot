import { generateId } from "../utils/GenerateId.js"



export class Jot {


  constructor(data) {
    this.id = generateId()
    this.title = data.title
    this.body = data.body
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
      <form onsubmit="app.JotsController.setJotBody('${this.id}')" >
      <textarea name="body" id="test-jot-editor">${this.body}</textarea>
      <button class="btn" type="submit">Submit</button>
      </form>
    </div>
    `
  }

  get newJotTitleForm() {
    return `
    <h3>${this.title}</h3>

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