/**
 * 
 * @param Input: String - parenthesis
 * @param Output: Number - depth
 */
function maxBreadthParenthesis(s){
    let stack = [];
    let parenthesis = {}
    for(let i = 0; i < s.length; i++){
        let current = s[i];
        if(current === ")"){
            stack.pop();
            collect(parenthesis, stack.length);
        } else if(current === "("){
            stack.push(current);
        }
    }
    let max = 0;
    for(let num in parenthesis){
        max = Math.max(parenthesis[num], max);
    }
    return max;
}

function collect(map, level){
    debugger;
    if(map[level]) map[level]++;
    else map[level] = 1;
}

const input = "((()()()())()())()";
const result = maxBreadthParenthesis(input);
console.log("Max Breadth: ", result)