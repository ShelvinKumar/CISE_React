//src/database.service.ts
import { Injectable, OnModuleInit } from '@nestjs/common';
import { InjectConnection } from '@nestjs/mongoose';
import { Connection } from 'mongoose';

@Injectable()
export class DatabaseService implements OnModuleInit {
  constructor(@InjectConnection() private readonly connection: Connection) {}

  onModuleInit() {
    this.connection.on('connecting', () => {
      console.log('Mongoose connecting to MongoDB...');
    });

    this.connection.on('connected', () => {
      console.log('Mongoose connected to MongoDB');
    });

    this.connection.on('error', (error) => {
      console.error('Mongoose connection error:', error);
    });

    this.connection.on('disconnected', () => {
      console.log('Mongoose disconnected from MongoDB');
    });

    this.connection.on('reconnected', () => {
      console.log('Mongoose reconnected to MongoDB');
    });
  }
}