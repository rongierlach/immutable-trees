import identityFunc from '../../util/identityFunc'

export default function (merger = identityFunc, ...trees) {
  return trees.reduce((resultTree, currTree) => {
    currTree.traverseByDepth(node => {
      const key = node.get('key')
      const newVal = node.get('value')
      if (resultTree.has(key)) {
        const oldVal = resultTree.get(key)
        resultTree = resultTree.set(key, merger(oldVal, newVal))
      } else {
        resultTree = resultTree.set(key, newVal)
      }
    })
    return resultTree
  }, this)
}
