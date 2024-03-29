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
    <div class="col-6 card">
      <h1>${this.title}</h1>
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Necessitatibus assumenda veniam blanditiis?</p>
    </div>
    `
  }

  get newJotTitleForm() {
    return `
  <div class="col-8 mt-3 p-3">
  <form onsubmit="app.JotsController.drawTitleForm()">
    <label for="title">Title of New Jot</label>
    <input type="text" name="title" id="title" class="form-control">
    <button class="btn" type="submit">Submit</button>
  </form>
</div>
`
  }









  //---------------------------------------->>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
}