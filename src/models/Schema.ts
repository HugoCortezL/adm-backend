import { Field } from "./"

export type Schema = {
    _id: string,
    name: string,
    fields: [Field]
}