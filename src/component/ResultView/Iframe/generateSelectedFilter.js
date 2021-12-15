/* eslint-disable prefer-destructuring */
/* eslint-disable max-len */

const actualId = (rawId) => (rawId[0] === '_' ? rawId.slice(1, rawId.length) : rawId);

const connectedNodes = {};
export const linkNodes = (nodes, level) => {
  const root = {};
  let parent = root;
  Object.keys(nodes).forEach((e) => {
    if (e >= level) {
      // console.log('nodes[e]', nodes[e], e, Array.isArray(nodes[e]));
      if (!Array.isArray(nodes[e])) {
        const id = actualId(nodes[e].id);
        parent.values = [{ ...nodes[e], id }];
      } else {
        parent.values = [];
        nodes[e].forEach((ele, index) => {
          parent.values.push({ ...nodes[e][index], id: actualId(nodes[e][index].id) });
        });
      }
      parent = parent.values[0];
    }
  });
  // console.log('final', root);
  return root;
};

const mergePathOfGroup = (group, tags) => {
  const topMostCheck = connectedNodes[group]?.values.find((ele) => ele.id === actualId(tags[0].id));
  if (!topMostCheck) {
    connectedNodes[group].values = [...connectedNodes[group].values, ...linkNodes(tags, 0).values];
  } else {
    let parent = connectedNodes[group].values;
    // console.log('for path tags', group, tags, parent);
    const tagsKeys = Object.keys(tags);

    tagsKeys.every((tagKey) => {
      // console.log('parent', parent);
      // ?.values
      const check = parent.find((ele) => ele.id === actualId(tags[tagKey].id));
      // console.log('check', check, tags[tagKey].id);
      if (!check) {
        parent.push(linkNodes(tags, tagKey).values[0]);
        return false;
      }
      parent = check;
      parent = parent.values;
      return true;
    });
  }
};

export const generateSelectedFilter = (cumulativeTags) => {
  Object.keys(cumulativeTags).forEach((group) => {
    connectedNodes[group === 'Plant' ? 'tree' : group] = { groupTitle: group, attribute: group, values: [] };
    const pathNos = Object.keys(cumulativeTags[group]);
    pathNos.forEach((pathNo) => mergePathOfGroup(group === 'Plant' ? 'tree' : group, cumulativeTags[group][pathNo]));
  });
  // Object.keys(cumulativeTags).forEach((group) => {
  //   connectedNodes[group] = { groupTitle: group, attribute: group, values: [] };
  //   const pathNos = Object.keys(cumulativeTags[group]);
  //   pathNos.forEach((pathNo) => mergePathOfGroup(group, cumulativeTags[group][pathNo]));
  // });
  console.log('connectedNodes', connectedNodes);
  return connectedNodes;
};
