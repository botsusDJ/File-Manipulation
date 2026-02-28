import fs from "fs/promises";
import { argv } from "process";

export async function createFile(BaseName) {
    try {
        BaseName = argv[3];
        fs.writeFile(`${BaseName}`, "");
    } catch (err) {
        console.error("Error: ", err)
    }
};

export async function createFolder(BaseName) {
    try {
        BaseName = argv[3];
        fs.mkdir(`${BaseName}`, { recursive: true });
    } catch (err) {
        console.error("Error: ", err)
    }
};

export async function readFile(BaseName) {
    try {
        BaseName = argv[3];
        let Content = await fs.readFile(`${BaseName}`, "utf-8");
        console.log(Content)
    } catch (err) {
        console.error("Error: ", err)
    }
};

export async function readTwoAndWrite() {
    try {
        let fileOne = argv[3]
        let fileTwo = argv[4]
        let Content = argv[5]
        let fileOneContent = await fs.readFile(`${fileOne}`, "utf-8");
        let fileTwoContent = await fs.readFile(`${fileTwo}`, "utf-8");
        console.log(fileOneContent)
        console.log(fileTwoContent)

        fs.writeFile(`${fileOne}`, `${Content}`);
        fs.writeFile(`${fileTwo}`, `${Content}`);
    } catch (err) {
        console.error("Error: ", err)
    }
};

export async function deleteIt(BaseName) {
    try {
        BaseName = argv[3];
        fs.unlink(`${BaseName}`);
    } catch (err) {
        console.error("Error: ", err)
    }
};

export async function writeTo(BaseName) {
    try {
        BaseName = argv[3];
        let Content = argv[4];
        fs.writeFile(`${BaseName}`, `${Content}`);
    } catch (err) {
        console.error("Error: ", err)
    }
};

export async function append(BaseName) {
    try {
        BaseName = argv[3];
        let Content = argv[4];
        fs.appendFile(`${BaseName}`, `${Content}`);
    } catch (err) {
        console.error("Error: ", err)
    }
};
