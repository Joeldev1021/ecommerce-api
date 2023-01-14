/* eslint-disable @typescript-eslint/no-unused-vars */
import { VOFormatException } from '../../../../src/Contexts/shared/domain/errors/vo-format.exception';
import { NameVO } from '../../../../src/Contexts/shared/domain/value-objects/name.vo';
import { UuidVO } from '../../../../src/Contexts/shared/domain/value-objects/uuid.vo';
import { EmailVO } from '../../../../src/Contexts/user/domain/value-objects/email.vo';
import { PasswordVO } from '../../../../src/Contexts/user/domain/value-objects/password.vo';
import { UsernameVO } from '../../../../src/Contexts/user/domain/value-objects/username.vo';

describe('Test Value-Object', () => {
	it('should throw error if  userame length is < 4', async () => {
		expect(() => {
			const name = new UsernameVO('abc');
		}).toThrow(VOFormatException);
	});

	it('should throw error if password length is < 4', async () => {
		expect(() => {
			const password = new PasswordVO('pas');
		}).toThrow(VOFormatException);
	});

	it('should throw error if Email is invalid', async () => {
		expect(() => {
			const email = new EmailVO('error');
		}).toThrow(VOFormatException);
	});

	it('should throw error if ID is invalid', async () => {
		expect(() => {
			const uuid = new UuidVO('23');
		}).toThrow(VOFormatException);
	});

	it('should throw error if Name contains number', async () => {
		expect(() => {
			const name = new NameVO('sports2');
		}).toThrow(VOFormatException);
	});
});
