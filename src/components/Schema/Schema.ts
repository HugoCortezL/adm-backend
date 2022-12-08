import { Field } from "../Field/Field"

export type Api = {
    id: string,
    name: string,
    fields: [Field]
}