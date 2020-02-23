import React from 'react'
import {
  ScheduleComponent,
  Day,
  Week,
  WorkWeek,
  Month,
  Agenda,
  Inject,
  Resize,
  DragAndDrop
} from '@syncfusion/ej2-react-schedule'
import { applyCategoryColor } from './helper'
import { extend } from '@syncfusion/ej2-base'
import { SampleBase } from './SampleBase'
import { PropertyPane } from './PropertyPane'
import * as dataSource from './datasource.json'
import './bootstrap4.scss'

/**
 * Schedule events sample
 */

class Scheduler extends SampleBase {
  constructor() {
    super(...arguments)
    this.data = extend([], dataSource.scheduleData, null, true)
  }
  onEventRendered(args) {
    applyCategoryColor(args, this.scheduleObj.currentView)
  }
  render() {
    return (
      <div className="schedule-control-section">
        <div>
          {/* className="col-lg-9" */}
          <ScheduleComponent
            ref={schedule => (this.scheduleObj = schedule)}
            width="100%"
            height="100%"
            selectedDate={new Date(2020, 1, 10)}
            eventSettings={{ dataSource: this.data }}
            eventRendered={this.onEventRendered.bind(this)}
          >
            <Inject
              services={[
                Day,
                Week,
                WorkWeek,
                Month,
                Agenda,
                Resize,
                DragAndDrop
              ]}
            />
          </ScheduleComponent>
        </div>
        {/* <div className="col-lg-3 property-section">
          <PropertyPane title="Calendars">
            <table
              id="property"
              title="Properties"
              className="property-panel-table"
              style={{ width: '100%' }}
            >
              <tbody>
                <tr style={{ height: '250px' }}>
                  <td>
                    <div
                      className="eventarea"
                      style={{ height: '245px', overflow: 'auto' }}
                    >
                      <span
                        className="EventLog"
                        id="EventLog"
                        style={{ wordBreak: 'normal' }}
                      ></span>
                    </div>
                  </td>
                </tr>
                <tr style={{ height: '50px' }}>
                  <td style={{ width: '30%' }}>
                    <div className="evtbtn" style={{ paddingBottom: '10px' }}>
                      <button title="Clear">Clear</button>
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
          </PropertyPane>
        </div> */}
      </div>
    )
  }
}

export default Scheduler