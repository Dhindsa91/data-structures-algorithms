/**
 * https://leetcode.com/problems/word-search/
 * @param Input grid [][]
 * @param Output boolean
 */
function wordSearch(grid, word) {
  const visited = new Set();

  for (let y = 0; y < grid.length; y++) {
    for (let x = 0; x < grid[0].length; x++) {
      if (dfs(grid, y, x, visited, word, "")) return true;
    }
  }
  return false;
}

function dfs(grid, y, x, visited, word, path) {
  console.log(path);
  if (path === word) return true;
  if (y >= grid.length || y < 0) return false;
  if (x >= grid[0].length || x < 0) return false;

  const pos = `${x},${y}`;
  if (visited.has(pos)) return false;
  visited.add(pos);

  if (word.startsWith(path) === -1) return false;

  if (
    dfs(grid, y, x + 1, visited, word, path + grid[y][x]) ||
    dfs(grid, y, x - 1, visited, word, path + grid[y][x]) ||
    dfs(grid, y + 1, x, visited, word, path + grid[y][x]) ||
    dfs(grid, y - 1, x, visited, word, path + grid[y][x])
  )
    return true;

  visited.delete(pos);
  return false;
}

// const grid = [
//   ["A", "B", "C", "E"],
//   ["S", "F", "C", "S"],
//   ["A", "D", "E", "E"],
// ];                                                                                       
// const word = "ABCCED";

const grid = [
    ["A", "B", "C", "E"],
    ["S", "F", "C", "S"],
    ["A", "D", "E", "E"],
  ],
  word = "RED";

const result = wordSearch(grid, word);
console.log("Found word: ", result);
