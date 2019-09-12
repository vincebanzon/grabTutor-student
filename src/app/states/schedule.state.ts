import { State, Action, StateContext, Selector } from '@ngxs/store'
import { Schedule } from './../models/schedule.model'
import { AddSchedule, RemoveSchedule } from '../actions/schedule.actions'

export class ScheduleStateModel {
  schedules: Schedule[]
}

@State<ScheduleStateModel>({
  name: 'schedules',
  defaults: {
    schedules: []
  }
})

export class ScheduleState {

  @Selector()
  static getSchedules(state: ScheduleStateModel) {
    return state.schedules
  }

  @Action(AddSchedule)
  add({getState, patchState}: StateContext<ScheduleStateModel>, { payload }:AddSchedule) {
    const state = getState();
    patchState({
      schedules: [...state.schedules, payload]
    })
  }

  @Action(RemoveSchedule)
  remove({getState, patchState}: StateContext<ScheduleStateModel>, { payload }:RemoveSchedule) {
    const state = getState();
    patchState({
      schedules: getState().schedules.filter(a => a.id != payload)
    })
  }
}