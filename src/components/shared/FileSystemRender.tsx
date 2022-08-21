import { useMemo } from 'react';
import Tree from 'react-d3-tree';
import {
  CustomNodeElementProps,
  Orientation,
  RawNodeDatum,
  TreeLinkDatum,
  TreeNodeDatum,
} from 'react-d3-tree/lib/types/common';
import FileSystemNode from './FileSystemNode';
import { FileSystemObject } from './globalTypes';
import './../../styles/FileSystemRender.scss';

function FileSystemRender(prop: {
  data: FileSystemObject;
  renderDimensions: { renderWidth: number; renderHeight: number };
}): JSX.Element {
  const FSObject = useMemo(() => getD3TreeFromFSObject(prop.data), [prop.data]);

  return (
    <div id="tree-wrapper">
      <Tree
        data={FSObject}
        orientation="vertical"
        zoomable={false}
        translate={{
          x: prop.renderDimensions.renderWidth / 2.7,
          y: prop.renderDimensions.renderHeight / 8,
        }}
        renderCustomNodeElement={(rd3tProps: CustomNodeElementProps) =>
          renderForeignObjectNode(rd3tProps.nodeDatum)
        }
        pathClassFunc={() => 'node-link'}
        pathFunc={straightPathFunc}
      />
    </div>
  );
}

// Converting the file system objects into rawnodedatums for d3 tree
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

// Custom path rendering (to avoid having the link stick out of the image)
function straightPathFunc(
  linkDatum: TreeLinkDatum,
  orientation: Orientation
): string {
  const { source, target } = linkDatum;
  return orientation === 'horizontal'
    ? `M${source.y},${source.x}L${target.y},${target.x}`
    : `M${source.x},${source.y}L${target.x - 5},${target.y - 5}`;
}

// Custom node rendering with image and text
function renderForeignObjectNode(nodeDatum: TreeNodeDatum): JSX.Element {
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
}

export default FileSystemRender;
