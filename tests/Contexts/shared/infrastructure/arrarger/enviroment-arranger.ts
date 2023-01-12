export interface IEnvironmentArranger {
	arrange(): Promise<void>;
	close(): Promise<void>;
}
