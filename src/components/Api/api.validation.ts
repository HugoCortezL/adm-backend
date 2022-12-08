import { Api } from "./Api";

export class ApiValidator {
    validate(api: Api): [boolean, string]{
        if(api.title.length == 0){
            return [false, "Please enter a valid title"]
        }
        if(api.version.length == 0 || !(/^\d+(\.\d+)*$/.test(api.version))){
            return [false, "Please enter a valid version"]
        }
        if(api.baseUrl.length <= 8 || !(/^(ftp|http|https):\/\/[^ "]+$/.test(api.baseUrl))){
            return [false, "Please enter a valid base URL"]
        }
        return [true, "All the fields are correct"]
    }
}