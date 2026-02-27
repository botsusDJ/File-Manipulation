import { argv } from "process";
import { createFile, createFolder, readFile, writeTo, append, deleteIt } from "./funcs.js";

let BaseName;

switch (argv[2]) {
    case "createFile":
        createFile(BaseName)
        break
    case "createFolder":
        createFolder(BaseName)
        break
    case "readFile":
        readFile(BaseName)
        break
    case "writeTo":
        writeTo(BaseName)
        break
    case "append":
        append(BaseName)
        break
    case "delete":
        deleteIt(BaseName)
        break
}
