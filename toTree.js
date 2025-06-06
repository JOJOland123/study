const flatData = [
    { id: 1, name: '根节点', parentId: null },
    { id: 2, name: '子节点1', parentId: 1 },
    { id: 3, name: '子节点2', parentId: 1 },
    { id: 4, name: '孙节点1-1', parentId: 2 },
    { id: 5, name: '孙节点1-2', parentId: 2 },
    { id: 6, name: '子节点3', parentId: null },
    { id: 7, name: '孙节点3-1', parentId: 6 },
    { id: 8, name: '孙节点3-1', parentId: 7 },
    { id: 9, name: '孙节点3-1', parentId: 8 }
];

function toTree(arr) {
    function buildTree(parentId = null) {
        return arr.filter(item => item.parentId === parentId)
            .map(ele => ({
                ...ele,
                children: buildTree(ele.id)
            }));
    }
    return buildTree();
}

function toTree1(arr) {
    const map = new Map();
    const roots = [];
    
    // 创建所有节点映射
    arr.forEach(node => {
        map.set(node.id, { ...node, children: [] });
    });
    
    // 构建父子关系
    arr.forEach(node => {
        if (node.parentId !== null) {
            const parent = map.get(node.parentId);
            parent?.children.push(map.get(node.id));
        } else {
            roots.push(map.get(node.id));
        }
    });
    
    return roots;
}

console.time('toTree');
console.dir(toTree(flatData),{depth:null});
console.timeEnd('toTree');


console.time('toTree1');
console.dir(toTree1(flatData),{depth:null});
console.timeEnd('toTree1');
