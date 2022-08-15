import Tree from 'react-d3-tree';
import { RawNodeDatum } from 'react-d3-tree/lib/types/common';
import { FileSystemObject } from './globalTypes';
import './../../styles/FileSystemRender.scss';
import { useMemo } from 'react';

function FileSystemRender(prop: {
  data: FileSystemObject;
  renderWidth: number;
}): JSX.Element {
  function getD3TreeFromFSObject(FSObject: FileSystemObject): RawNodeDatum {
    const { name } = FSObject;
    const rawNodeDatum: RawNodeDatum = {
      ...FSObject,
      name,
      children: [],
    };
    if (FSObject.isDirectory && FSObject.children) {
      rawNodeDatum.children = Array.from(FSObject.children!.values()).map(
        getD3TreeFromFSObject
      );
    }
    return rawNodeDatum;
  }

  return (
    <div id="tree-wrapper">
      <Tree
        data={getD3TreeFromFSObject(prop.data)}
        rootNodeClassName="node-root"
        branchNodeClassName="node-branch"
        leafNodeClassName="node-leaf"
        orientation="vertical"
        zoomable={false}
        translate={{ x: prop.renderWidth / 2.75, y: 100 }}
        // collapsible={false}
      />
    </div>
  );
}

export default FileSystemRender;
