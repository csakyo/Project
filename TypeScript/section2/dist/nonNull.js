"use strict";
const getMemberName = (string) => {
    console.log(string.name);
};
getMemberName({ name: '田中' });
let memberName;
const addName = (val) => {
    memberName = val;
};
addName('佐藤');
console.log(memberName);
//# sourceMappingURL=nonNull.js.map