import { useMemo } from 'react';
import Tree from 'react-d3-tree';
import { RawNodeDatum } from 'react-d3-tree/lib/types/common';
import { FileSystemObject } from './globalTypes';
import './../../styles/FileSystemRender.scss';

function FileSystemRender(prop: {
  data: FileSystemObject;
  renderWidth: number;
}): JSX.Element {
  const FSObject = useMemo(() => getD3TreeFromFSObject(prop.data), [prop.data]);

  function getD3TreeFromFSObject(fsObject: FileSystemObject): RawNodeDatum {
    const { name } = fsObject;
    const rawNodeDatum: RawNodeDatum = {
      ...fsObject,
      name,
      children: [],
    };
    if (fsObject.isDirectory && fsObject.children) {
      rawNodeDatum.children = Array.from(fsObject.children!.values()).map(
        getD3TreeFromFSObject
      );
    }
    return rawNodeDatum;
  }

  return (
    <div id="tree-wrapper">
      <Tree
        data={FSObject}
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
