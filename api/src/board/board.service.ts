import { Injectable } from '@nestjs/common';

@Injectable()
export class BoardService {
  getUserBoards(id: string): any {
    const boards = [];
    return { id, boards };
  }
}
