import fs from "fs";
import { argv } from "process";

export function createFile(BaseName) {
    BaseName = argv[3];
    fs.writeFileSync(`${BaseName}`, "");
};

export function createFolder(BaseName) {
    BaseName = argv[3];
    fs.mkdirSync(`${BaseName}`, { recursive: true });
}

export function readFile(BaseName) {
    BaseName = argv[3];
    Content = fs.readFileSync(`${BaseName}`, "utf-8");
    console.log(Content)
}

export function deleteIt(BaseName) {
    BaseName = argv[3];
    fs.unlink(`${BaseName}`);
};

export function writeTo(BaseName) {
    BaseName = argv[3];
    Content = argv[4];
    fs.writeFileFileSync(`${BaseName}`, `${Content}`);
}

export function append(BaseName) {
    BaseName = argv[3];
    Content = argv[4];
    fs.appendFileSync(`${BaseName}`, `${Content}`);
}