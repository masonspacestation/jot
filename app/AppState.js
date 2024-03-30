import { EventEmitter } from './utils/EventEmitter.js'
import { createObservableProxy } from './utils/ObservableProxy.js'
import { Jot } from "./models/Jot.js"
import { generateId } from "./utils/GenerateId.js"

class ObservableAppState extends EventEmitter {

  jots = [

    new Jot({
      title: 'Sample Jot',
      jotColor: '#007744',
    }),






  ]


  /** 
   * @type {Jot}
  */
  activeJot = null













}

export const AppState = createObservableProxy(new ObservableAppState())