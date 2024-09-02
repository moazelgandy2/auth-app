import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

@Schema({ timestamps: true })
export class User {
  @Prop({ type: String, required: true })
  name: String;

  @Prop({ type: String, required: true, unique: true })
  email: String;

  @Prop({ type: String, required: true })
  password: String;
}

export const UserSchema = SchemaFactory.createForClass(User);
