import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose, { ObjectId } from 'mongoose';
import { User } from './user.schema';

@Schema({ timestamps: true })
export class Note {
  @Prop({ type: String, required: true })
  title: String;

  @Prop({ type: String, required: true })
  description: String;

  @Prop({ type: mongoose.Schema.Types.ObjectId, required: true, ref: 'User' })
  createdBy: String;
}

export const NoteSchema = SchemaFactory.createForClass(Note);
