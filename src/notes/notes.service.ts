import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Note } from 'src/schemas/note.schema';
import { NoteDTO } from './note.dto';

@Injectable()
export class NotesService {
  constructor(@InjectModel(Note.name) private note: Model<Note>) {}

  async getNotes() {
    return await this.note.find();
  }

  async addNote(body: NoteDTO) {
    try {
      const res = await this.note.insertMany(body);
      return {
        success: true,
        message: 'Note has been added successfully',
        note: res,
      };
    } catch (e) {
      console.log(e);
      throw new HttpException(
        { success: false, message: 'Error adding note' },
        HttpStatus.BAD_REQUEST,
      );
    }
  }
}
