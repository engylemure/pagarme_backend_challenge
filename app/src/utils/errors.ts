export class CustomError extends Error {
    internalName: string;
    method: string;

    constructor(err: Error, methodPath: string, classError: string) {
        super()
        const { name, message, stack } = err
        this.name = name
        this.message = message
        this.stack = stack 
        this.internalName = classError,
        this.method = methodPath
    }
}

export const EClassError = {
    INTERNAL: 'INTERNAL',
    USER_ERROR: 'USER_ERROR'
}
export enum EErrorType {
    INTERNAL,
    USER_ERROR
}

export function throwCustomError(error: Error, methodPath: string, classError: string) {
    switch(error.constructor) {
        case CustomError:
            throw error
        default:
            throw new CustomError(error, methodPath, classError)
    }
}