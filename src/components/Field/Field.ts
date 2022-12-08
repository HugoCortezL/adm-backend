export enum FieldType {
    String = "String",
    Number = "Number",
    Boolean = "Boolean",
    Enum = "Enum",
    Schema = "Schema",
}

export type Field = {
    name: string,
    type: FieldType,
    enum?: string,
    schema?: string,
    nullable: boolean,
    required: boolean
}