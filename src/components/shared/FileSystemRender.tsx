import { useMemo } from 'react';
import Tree from 'react-d3-tree';
import {
  CustomNodeElementProps,
  RawNodeDatum,
  TreeNodeDatum,
} from 'react-d3-tree/lib/types/common';
import FileSystemNode from './FileSystemNode';
import { FileSystemObject } from './globalTypes';
import './../../styles/FileSystemRender.scss';

const renderForeignObjectNode = (nodeDatum: TreeNodeDatum) => {
  const nodeSize = { x: 100, y: 100 };
  const foreignObjectProps = {
    width: nodeSize.x,
    height: nodeSize.y,
    x: (-1 * nodeSize.x) / 2,
    y: (-1 * nodeSize.y) / 2,
  };
  return (
    <g>
      {/* `foreignObject` requires width & height to be explicitly set. */}
      <foreignObject {...foreignObjectProps}>
        <FileSystemNode nodeDatum={nodeDatum} />
      </foreignObject>
    </g>
  );
};

function FileSystemRender(prop: {
  data: FileSystemObject;
  renderDimensions: { renderWidth: number; renderHeight: number };
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
        translate={{
          x: prop.renderDimensions.renderWidth / 2.8,
          y: prop.renderDimensions.renderHeight / 8,
        }}
        renderCustomNodeElement={(rd3tProps: CustomNodeElementProps) =>
          renderForeignObjectNode(rd3tProps.nodeDatum)
        }
        pathFunc={'straight'}
      />
    </div>
  );
}

export default FileSystemRender;
