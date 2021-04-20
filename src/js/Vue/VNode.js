class VNode{
    constructor(tag,data,children,text,elm){
        this.tag = tag
        this.data = data
        this.children = children
        this.text = text
        this.elm = elm
    }
}

// 空节点
function createEmptyVNode(){
    const node = new VNode()
    node.text = ''
    return node
}

// 文本节点
function createTextVNode(val){
    return new VNode(undefined,undefined,undefined,String(val))
}

// 克隆VNode节点
function cloneVNode(node){
    const cloneVnode = new VNode(
        node.tag,
        node.data,
        node.children,
        node.text,
        node.elm
    )
    return cloneVNode
}