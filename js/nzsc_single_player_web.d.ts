/* tslint:disable */
export function add_one(arg0: number): number;

export class PromptWebInterface {
free(): void;
 text(): string;

 is_final(): boolean;

}
export class SinglePlayerNZSCWebInterface {
free(): void;
static  new(arg0: number): SinglePlayerNZSCWebInterface;

 initial_prompt(): string;

 next(arg0: string): PromptWebInterface;

}
