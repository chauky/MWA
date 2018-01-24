const tree = {
    name: "home",
    files: ["notes.txt", "todo.txt"],
    subFolders: [
        {
            name: "payroll",
            files: ["funds.csv"],
            subFolders: []
        },
        {
            name: "misc",
            files: ["summer1.jpg", "summer2.jpg", "summer3.jpg"],
            subFolders: [
                {
                    name: "logs",
                    files: ["logs1", "logs2", "logs3", "logs4", "paper.pdf"],
                    subFolders: []
                }]
        }]
};

var find = filename => function (o) {
    if (o.hasOwnProperty("files") && o.files.includes(filename)) {
        return true;
    }
    for (var s of o.subFolders) {
        if (find(filename)(s)) return true;
    }
    return false;
}
console.log(find("paper.pdf")(tree)); // true 
console.log(find("randomfile")(tree)); // false