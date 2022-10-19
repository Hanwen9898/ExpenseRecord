import { Pipe, PipeTransform } from "@angular/core";

@Pipe({ name: "formatError" })
export class FormatErrorPipe implements PipeTransform {
    constructor() { }

    transform(value: any, module: string) {
        if (module === 'test1') {
            return value + ': by custom paramter test1';
        } else {
            return value + ': by custom paramter test2';
        }
    }
}
