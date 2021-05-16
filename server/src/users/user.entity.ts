import {
    Entity,
    Column,
    PrimaryGeneratedColumn,
    Unique,
  } from 'typeorm';


  @Entity('users')
  @Unique(['name'])
  @Unique(['email'])
  export class Users{
      @PrimaryGeneratedColumn()
      id:number;
      @Column('varchar', {
        length: 150,
        default: null,
      })
      name:string;
      @Column('varchar', {
        length: 150,
        default: null,
      })
      email:string;
      @Column('varchar', {
        length: 150,
        default: null,
      })
      password:string
 
  }
  export interface IUser {
      name:string;
      email:string;
      password:string
  }
  
  export interface UserLogin {
    email: string;
    password: string;
  }