import { DateTime } from 'luxon'
import { BaseModel, BelongsTo, belongsTo, column, ManyToMany, manyToMany } from '@ioc:Adonis/Lucid/Orm'
import Status from 'Contracts/Enums/Status'
import User from './User'
import Project from './Project'
export default class Task extends BaseModel {
  @column({ isPrimary: true })
  public id: number


  @column()
  public createdBy:number

  @column()
  public assignedTo:number

  @column()
  public name: string

  @column()
  public description? : string

  @column()
  public statusId: Status

  @column.dateTime()
  public dueAt? : DateTime

  
  @belongsTo(()=> User , {
    localKey : 'createdBy'
  })
  public creator : BelongsTo <typeof User>

  @belongsTo(() => User , {
    localKey: 'assignedTo'
  })
  public assignee : BelongsTo<typeof User>


  @manyToMany(()=> Project , {
    pivotTable: 'project_task',
    pivotColumns : ['sort_order']
  })
  public projects : ManyToMany<typeof Project>


  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime
}
