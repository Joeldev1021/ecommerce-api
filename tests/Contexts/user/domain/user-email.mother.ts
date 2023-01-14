import { EmailVO } from '../../../../src/Contexts/user/domain/value-objects/email.vo';
import { EmailMother } from '../../shared/domain/email.mother';

export class UserEmailMother {
	static create(value: string): EmailVO {
		return new EmailVO(value);
	}

	static random(): EmailVO {
		return this.create(EmailMother.random());
	}
}
