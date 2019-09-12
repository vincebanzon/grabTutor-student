import { Schedule } from './../models/schedule.model'

export class AddSchedule {
  static readonly type = '[SCHEDULE] Add'

  constructor(public payload: Schedule) {}
}

export class RemoveSchedule {
  static readonly type = '[SCHEDULE] Remove'

  constructor(public payload: string) {}
}