import { DateTime } from 'luxon'
import { BaseModel, column, ManyToMany, manyToMany } from '@ioc:Adonis/Lucid/Orm'
import Status from 'Contracts/Enums/Status'
import User from './User'
import Task from './Task'
export default class Project extends BaseModel {
  @column({ isPrimary: true })
  public id: number


  @column()
  public name: string

  @column()
  public description? : string

  @column()
  public statusId: Status

  @manyToMany(()=> User , {
    pivotTable: 'project_user',
    pivotColumns: ['role_id']
  })
  public users : ManyToMany <typeof User>


  // many task
  @manyToMany(()=> Task , {
    pivotColumns : ['sort_order']
  })
  public tasks : ManyToMany<typeof Task>



  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime
  
}
