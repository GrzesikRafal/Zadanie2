export interface tableDataI{
    number:number;
    text:string;
}

export const tableData: tableDataI[] = []


for (let i = 1; i < 168; i++) {
    const dataObj = {
        number: i,
        text: `lorem ${i}`
    }
    tableData.push(dataObj)
}