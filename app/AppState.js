import { EventEmitter } from './utils/EventEmitter.js'
import { createObservableProxy } from './utils/ObservableProxy.js'
import { Jot } from "./models/Jot.js"
import { generateId } from "./utils/GenerateId.js"

class ObservableAppState extends EventEmitter {

  jots = [

    new Jot({
      id: generateId(),
      title: '',
      timeCreated: Date(),
      timeEdited: Date(),
      jotColor: '',
      body: '',
      subject: '',
      wordCount: 0,
    }),






  ]















}

export const AppState = createObservableProxy(new ObservableAppState())