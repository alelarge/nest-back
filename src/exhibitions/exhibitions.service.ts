import { Injectable } from '@nestjs/common';

type Exhibition = {
  id: number
  name: string
}

@Injectable()
export class ExhibitionsService {
  exhibitions: object[] = [];
  
  createExhibition(exhibition: Exhibition) {
    this.exhibitions.push(exhibition);
    return exhibition;
  }

  getExhibitions() {
    return this.exhibitions;
  }

  updateExhibition(id: number, exhibition: Exhibition) {
    const exhibitionToUpdate = this.exhibitions[id];

    if (!exhibitionToUpdate) {
      throw new Error(`This Exhibition does not exists`);
    }

    this.exhibitions[id] = exhibition;
  }

  deleteExhibition(id: number) {
    const exhibitionToDelete = this.exhibitions[id];

    if (!exhibitionToDelete) {
      throw new Error(`This Exhibition does not exists`);
    }

    const deleteExhibition = this.exhibitions.splice(id, 1);
    return deleteExhibition;
  }
}