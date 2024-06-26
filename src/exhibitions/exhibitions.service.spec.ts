import { Test, TestingModule } from '@nestjs/testing';
import { ExhibitionsService } from './exhibitions.service';

describe('ExhibitionsService', () => {
  let service: ExhibitionsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ExhibitionsService],
    }).compile();

    service = module.get<ExhibitionsService>(ExhibitionsService);
  });

  describe('createExhibition', () => {
    it('should create an exhibition', () => {
      // Arrange
      service.exhibitions = [];
      const payload = {
        id: 1,
        name: 'Exposition 1',
      }

      // Act
      const exhibition = service.createExhibition(payload);

      // Assert
      expect(exhibition).toBe(payload);
      expect(service.exhibitions).toHaveLength(1);
    });
  })

  describe('getExhibitions', () => {
    it('should return all exhibitions', () => {
      // Arrange
      service.exhibitions = [
        {
          id: 1,
          name: 'Exposition 1',
        },
        {
          id: 2,
          name: 'Exposition 2',
        },
      ];

      // Act
      const exhibitions = service.getExhibitions();

      // Assert
      expect(exhibitions).toEqual(service.exhibitions);
    });
  });
});