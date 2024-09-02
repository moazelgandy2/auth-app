import { Body, Controller, Get, Post, UseGuards } from '@nestjs/common';
import { NotesService } from './notes.service';
import { NoteDTO } from './note.dto';
import { AuthGuard } from 'src/auth/auth.guard';

@Controller('notes')
@UseGuards(AuthGuard)
export class NotesController {
  constructor(private _notesService: NotesService) {}

  @Get()
  getNotes() {
    return this._notesService.getNotes();
  }

  @Post()
  addNote(@Body() body: NoteDTO) {
    return this._notesService.addNote(body);
  }
}
