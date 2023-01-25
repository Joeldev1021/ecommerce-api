import {CategoryDeleteCommand} from '../../../../../src/Contexts/category/domain/command/category-delete-command'
import { CategoryId } from '../../../../../src/Contexts/category/domain/value-objects/category-id.vo';
import { CategoryIdMother } from '../../domain/category-id.mother';

export class CategoryDeleteCommandMother {
	static create(
		id: CategoryId,
	): CategoryDeleteCommand{
		return {
			id: id.value,
		};
	}

	static random(): CategoryDeleteCommand {
		return this.create(
			CategoryIdMother.random(),
		);
	}

  static fromPrimitives(id:string):CategoryDeleteCommand {
    return {
      id: id
    }
  }

}
